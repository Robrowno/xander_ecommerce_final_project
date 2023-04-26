import React, { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Pass prices and user data as props to the CheckoutForm component
const CheckoutForm = ({ prices, user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const createPaymentIntent = async (amount) => {
    // Replace this with your Django view URL for creating a payment intent
    const createPaymentIntentURL = "/create_payment_intent/";

    const response = await fetch(createPaymentIntentURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include CSRF token if needed
      },
      body: JSON.stringify({
        amount: amount,
      }),
    });

    return await response.json();
  };

  const processPayment = async (paymentData) => {
    // Replace this with your Django view URL for processing a payment
    const processPaymentURL = "/process_payment/";

    const response = await fetch(processPaymentURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include CSRF token if needed
      },
      body: JSON.stringify(paymentData),
    });

    return await response.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    // Get the card number element
    const cardElement = elements.getElement(CardNumberElement);

    // Create the payment method using Stripe.js
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
      return;
    }


    // Replace the hardcoded amount with the actual price from the props
    const amount = prices.total;

    // Create a payment intent
    const data = await createPaymentIntent(amount);
    const clientSecret = data.clientSecret;

    // Confirm the card payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (result.error) {
      setPaymentError(result.error.message);
      setPaymentSuccess(null);
    } else {
    const paymentData = {
      stripe_token: result.paymentIntent.id,
      email: user.email, // Replace the hardcoded email with the actual user email from the props
      payment_intent_id: result.paymentIntent.id,
    };

// Send the payment data to the Django backend for processing
      const paymentResponse = await processPayment(paymentData);

      if (paymentResponse.error) {
        setPaymentError(paymentResponse.error);
        setPaymentSuccess(null);
      } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <label>
        Card number
        <CardNumberElement />
      </label>
      <label>
        Expiration date
        <CardExpiryElement />
      </label>
      <label>
        CVC
        <CardCvcElement />
       </label>
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>Payment successful: {paymentSuccess}</div>}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

// Load Stripe.js with your publishable key
const stripePromise = loadStripe("pk_test_51N0KjQLB7XNaA4sG3uNLzQuEqkM6nJOpQpmEASo5UEEOEhqT0MFhSkzOxXaVGSe8QNy4VlXDTwvoLIcVZXkmt2NV00J0CeCJ9u");

const Checkout = (props) => {
  return (
    // Pass prices and user data as props to the CheckoutForm component
    <Elements stripe={stripePromise}>
      <CheckoutForm prices={props.prices} user={props.user} />
    </Elements>
  );
};

export default Checkout;

