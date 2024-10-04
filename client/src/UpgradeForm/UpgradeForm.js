import React, { useState } from "react";
import "./UpgradeForm.css";
import axios from "axios";

import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PyCWbGHtt8ecPGjVbllxqnflJ7raGR9DJ2CGv8yuuY0XE3YoThPfMQxnpFIldp82KQ176EznRrkjbaDXqPuDEan00WB0HfUbK"
);

function PaymentForm() {
  const { currentUser } = useSelector((state) => state.user);

  const [email, setEmail] = useState(currentUser.email);

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
    <div className="upgrade-form">
      <form onSubmit={handleSubmit}>
        <h2>Upgrade</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />

        <button className="upgradeButton" type="submit">
          Click to upgrade your acount
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
