from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from .models import Payment
from .forms import PaymentForm
import stripe
import json
from app import stripe_config
from stripe.error import CardError, RateLimitError, InvalidRequestError, AuthenticationError, APIConnectionError, StripeError


stripe.api_key = 'sk_test_51N0KjQLB7XNaA4sGXE7to4QrrlFzC4qypGNLWxPmp6tzyskDurJQ1Yx93fg0p3LNjyRPHyzQDyFwtFasBK0bPaqS00hgEIG21h'


def process_payment(request):
    if request.method == 'POST':
        form = PaymentForm(request.POST)

        if form.is_valid():
            payment_intent_id = form.cleaned_data['payment_intent_id']

            try:
                # Retrieve the PaymentIntent from Stripe
                payment_intent = stripe.PaymentIntent.retrieve(payment_intent_id)

                if payment_intent.status == 'succeeded':
                    payment = Payment.objects.create(
                        user=request.user,
                        amount=payment_intent.amount / 100,
                        stripe_payment_id=payment_intent.id
                    )
                    # Your success logic here
                    return redirect('success_page')
                else:
                    messages.error(request, "The payment failed. Please try again later.")
                
            except CardError as e:
                messages.error(request, "Your card has been declined.")
            except RateLimitError as e:
                messages.error(request, "Too many requests made to the API too quickly. Please try again later.")
            except InvalidRequestError as e:
                messages.error(request, "Invalid parameters were supplied to Stripe's API. Please contact support.")
            except AuthenticationError as e:
                messages.error(request, "Authentication with Stripe's API failed. Please contact support.")
            except APIConnectionError as e:
                messages.error(request, "Network communication with Stripe failed. Please try again later.")
            except StripeError as e:
                messages.error(request, "An error occurred while processing your payment. Please try again later.")
            except Exception as e:
                messages.error(request, "An error occurred. Please try again later.")

    form = PaymentForm()
    return render(request, 'payments/payment_form.html', {'form': form})

@csrf_exempt
def create_payment_intent(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            amount = data.get('amount', 0)  # Default to 0 if amount is not provided

            payment_intent = stripe.PaymentIntent.create(
                amount=int(amount * 100),
                currency='gbp',
                metadata={'integration_check': 'accept_a_payment'},
            )
            return JsonResponse({
                'clientSecret': payment_intent['client_secret']
            })
        except Exception as e:
            return JsonResponse({'error': str(e)})
    else:
        return JsonResponse({'error': 'Invalid request method'})