const User = require("../models/user");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const makingPayment = async (req, res) => {
  const { email } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_email: email, // Müşteri e-posta bilgisi
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Premium Üyelik",
          },
          unit_amount: 1000, // 10 USD
        },
        quantity: 1,
      },
    ],
  });

  res.json({ id: session.id });
};

const handlerwebHook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_ENDPOINT_KEY;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret, 500);
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const customerEmail = session.customer_details.email;

    // Call the function to upgrade the user to premium
    try {
      await upgradeUserToPremium(customerEmail);
    } catch (error) {
      console.error("Failed to upgrade user to premium:", error);
      return res.status(500).send("Failed to upgrade user.");
    }
  }

  res.status(200).send();
};

async function upgradeUserToPremium(email) {
  try {
    // Find the user in the database by email
    const user = await User.findOne({ email: email });

    if (user) {
      // Update the user's role to premium
      user.role = "premium";
      await user.save(); // Save the changes

      console.log(`User ${email} has been upgraded to premium!`);
    } else {
      console.log(`User not found: ${email}`);
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

module.exports = {
  makingPayment,
  handlerwebHook,
};
