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
from stripe.error import CardError, RateLimitError, InvalidRequestError, AuthenticationError, APIConnectionError, StripeError
from django.contrib import messages
from django.http import HttpRequest, HttpResponse




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
        request = self.factory.post(
            reverse('process_payment'),
            data={'stripeToken': 'tok_visa'},
            content_type='application/json'
        )
        request.user = self.user

        # Call the _add_messages_middleware method with the request variable
        self._add_messages_middleware(request)

        response = process_payment(request)
        retrieve_mock.return_value = self.payment_intent

        request = self.factory.post(self.process_payment_url, data=json.dumps({
            'stripe_token': 'test_stripe_token',
            'email': 'test@example.com',
            'payment_intent_id': self.payment_intent.id,
        }), content_type='application/json')

        request.user = self.user

        # Call the _add_messages_middleware method again with the updated request variable
        self._add_messages_middleware(request)

        response = process_payment(request)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {'success': 'Payment processed successfully'})
        self.assertTrue(Payment.objects.filter(user=self.user, amount=20.0, stripe_payment_id=self.payment_intent.id).exists())


    # Rest of your test methods...

    def _add_messages_middleware(self, request):
        # Apply SessionMiddleware
        self.session_middleware.process_request(request)
        request.session.save()

        # Apply MessageMiddleware
        self.message_middleware.process_request(request)
        request.session.save()
