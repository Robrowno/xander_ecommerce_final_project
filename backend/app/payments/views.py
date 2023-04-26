from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from .models import Payment
from django.http import HttpResponseRedirect
import stripe
import json
from app.stripe_config import stripe
from stripe.error import CardError, RateLimitError, InvalidRequestError, AuthenticationError, APIConnectionError, StripeError

def process_payment(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'})

    data = json.loads(request.body)
    stripe_token = data.get('stripe_token')
    email = data.get('email')
    payment_intent_id = data.get('payment_intent_id')

    try:
        payment_intent = stripe.PaymentIntent.retrieve(payment_intent_id)
        if payment_intent.status == 'succeeded':
            payment = Payment.objects.create(
                user=request.user,
                amount=payment_intent.amount / 100,
                stripe_payment_id=payment_intent.id
            )
            return JsonResponse({'success': 'Payment processed successfully'})
        else:
            messages.error(request, "The payment failed. Please try again later.")
            return JsonResponse({'error': 'Payment failed'})
    except CardError as e:
        messages.error(request, "Your card has been declined.")
        return JsonResponse({'error': 'Card declined'})
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
    

def success_page(request):
    return render(request, 'payments/success_page.html')
