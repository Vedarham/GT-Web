import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import "./PaymentPage.style.css"
// import dotenv from "dotenv"
// import path from "path";
// dotenv.config({ path: path.resolve('src', './.env') });

function PaymentPage({ price }) {
  const [product] = useState({
    name: 'Tournament Registration',
    price: price,
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    return fetch("http://localhost:8000/api/stripe/create-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response:", response);
        return response.json(); 
      })
      .then((data) => {
        console.log("Payment Success:", data);
        
      })
      .catch((error) => {
        console.error("Payment Error:", error);
      });
  };

  return (
    <div className="payment-container">
      <StripeCheckout
        stripeKey={process.env.STRIPE_PUBLISHABLE_KEY || "pk_test_51R96tTQrMyuQ1wqCz8JeMHY2eKMBXoEh4DxKsN68QyNAf033fhLOlwAgco9L4WIawGULQTKaljR5c8HmqyjpoMa700dKhMfpQo"
          }
        token={makePayment}
        name="Tournament Registration"
        description={`Pay Rs. ${product.price} to join`}
        amount={product.price * 100}
        currency="INR"
        shippingAddress
        billingAddress
      >
        <button className="btn-large green">Pay Now: ₹{product.price} </button>
      </StripeCheckout>
    </div>
  );
}

export default PaymentPage;
