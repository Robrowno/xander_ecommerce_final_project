from django.test import RequestFactory, TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from unittest.mock import MagicMock, patch
from payments.models import Payment
from payments.views import process_payment, create_payment_intent
from django.contrib.sessions.middleware import SessionMiddleware
from django.contrib.messages.middleware import MessageMiddleware
import stripe
import json
from payments.forms import PaymentForm
from stripe.error import CardError, RateLimitError, InvalidRequestError, AuthenticationError, APIConnectionError, StripeError
from django.contrib import messages



class PaymentAppTestCase(TestCase):
    def _get_messages(self, request):
        return [str(message) for message in messages.get_messages(request)]

    def setUp(self):
        self.factory = RequestFactory()
        self.user = get_user_model().objects.create_user(email='testuser@example.com', password='testpassword')
        self.process_payment_url = reverse('process_payment')
        self.success_page_url = reverse('success_page')
        self.session_middleware = SessionMiddleware()
        self.message_middleware = MessageMiddleware()
        self.payment_intent = stripe.PaymentIntent.construct_from({
            'id': 'test_payment_intent_id',
            'amount': 2000,
            'status': 'succeeded',
            'client_secret': 'test_client_secret',
        }, stripe.api_key)

    @patch('stripe.PaymentIntent.retrieve')
    def test_process_payment_success(self, retrieve_mock):
        retrieve_mock.return_value = self.payment_intent
        request = self.factory.post(self.process_payment_url, {
            'stripe_token': 'test_stripe_token',
            'email': 'test@example.com',
            'payment_intent_id': self.payment_intent.id,
        })
        request.user = self.user
        response = process_payment(request)

        self.assertEqual(response.status_code, 302)
        self.assertEqual(response.url, self.success_page_url)
        self.assertTrue(Payment.objects.filter(user=self.user, amount=20.0, stripe_payment_id=self.payment_intent.id).exists())

    @patch('stripe.PaymentIntent.create')
    def test_create_payment_intent_success(self, create_mock):
        create_mock.return_value = self.payment_intent
        request = self.factory.post(reverse('create_payment_intent'), content_type='application/json', data=json.dumps({'amount': 20}))
        request.user = self.user
        response = create_payment_intent(request)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content)['clientSecret'], self.payment_intent['client_secret'])

    def test_create_payment_intent_invalid_request_method(self):
        request = self.factory.get(reverse('create_payment_intent'))
        request.user = self.user
        response = create_payment_intent(request)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content)['error'], 'Invalid request method')
    
    def test_payment_form_valid(self):
        form = PaymentForm({
            'stripe_token': 'test_stripe_token',
            'email': 'test@example.com',
            'payment_intent_id': 'test_payment_intent_id',
        })
        if not form.is_valid():
            print(form.errors)
        self.assertTrue(form.is_valid())


    def test_payment_form_invalid(self):
        form = PaymentForm({
            'stripe_token': '',
            'email': '',
        })
        self.assertFalse(form.is_valid())

    @patch('stripe.PaymentIntent.retrieve')
    def test_process_payment_card_error(self, retrieve_mock):
        retrieve_mock.side_effect = CardError('Card declined', param=None, code=None, http_status=None)
        request = self.factory.post(self.process_payment_url, {
            'stripe_token': 'test_stripe_token',
            'email': 'test@example.com',
            'payment_intent_id': self.payment_intent.id,
        })
        request.user = self.user
        self.session_middleware.process_request(request)
        self.message_middleware.process_request(request)
        response = process_payment(request)
        self.assertEqual(response.status_code, 200)
        self.assertIn("Your card has been declined.", self._get_messages(request))

    @patch('stripe.PaymentIntent.retrieve')
    def test_process_payment_failed(self, retrieve_mock):
        payment_intent_failed = stripe.PaymentIntent.construct_from({
            'id': 'test_payment_intent_id_failed',
            'amount': 2000,
            'status': 'requires_payment_method',
        }, stripe.api_key)
        retrieve_mock.return_value = payment_intent_failed
        request = self.factory.post(self.process_payment_url, {
            'stripe_token': 'test_stripe_token',
            'email': 'test@example.com',
            'payment_intent_id': payment_intent_failed.id,
        })
        request.user = self.user
        self.session_middleware.process_request(request)
        self.message_middleware.process_request(request)
        response = process_payment(request)

        self.assertEqual(response.status_code, 200)
        self.assertIn("The payment failed. Please try again later.", self._get_messages(request))

