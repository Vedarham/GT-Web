import { v4 as uuidv4 } from "uuid";
import Stripe from "stripe";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createStripeSession = asyncHandler(async (req, res) => {
    const { userId, tournamentId, amount, currency } = req.body;
     // Generate a unique transaction ID

    if (!userId || !tournamentId || !amount) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const transactionId = uuidv4(); 

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency,
                    product_data: { name: "Tournament Entry" },
                    unit_amount: amount * 100,
                },
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/payment-success?tournamentId=${tournamentId}&txnId=${transactionId}`,
        cancel_url: `${process.env.CLIENT_URL}/payment-failed`,
        metadata: { userId, tournamentId, transactionId }, // Store transaction UUID
    });

    res.json({ id: session.id, url: session.url, transactionId });
});

// const stripeWebhook = asyncHandler(async (req, res) => {
//     const sig = req.headers["stripe-signature"];

//     let event;
//     try {
//         event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//     } catch (err) {
//         return res.status(400).json({ success: false, message: `Webhook error: ${err.message}` });
//     }

//     if (event.type === "checkout.session.completed") {
//         const session = event.data.object;
//         const { userId, tournamentId } = session.metadata;

//         // Record transaction in DB
//         await Transaction.create({
//             userId,
//             tournamentId,
//             amount: session.amount_total / 100,
//             currency: session.currency.toUpperCase(),
//             paymentMethod: "Stripe",
//             transactionId: session.id,
//             status: "successful",
//         });

//         console.log(`✅ Payment Successful for Tournament ${tournamentId}`);
//     }

//     res.json({ success: true });
// });


export { createStripeSession }