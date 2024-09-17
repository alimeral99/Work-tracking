import React, { useState } from "react";
import axios from "axios";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PyCWbGHtt8ecPGjVbllxqnflJ7raGR9DJ2CGv8yuuY0XE3YoThPfMQxnpFIldp82KQ176EznRrkjbaDXqPuDEan00WB0HfUbK"
);

function PaymentForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/stripe/payment",
        { email }
      );

      const session = response.data; // Backend'den dönen checkout session bilgileri
      const stripe = await stripePromise;

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error(error.message);
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>

        <div>
          <input id="quantity" type="number" />
        </div>

        <button type="submit">Ödeme Yap</button>
      </form>
    </div>
  );
}

export default PaymentForm;
