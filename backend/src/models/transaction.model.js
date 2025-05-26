import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const TransactionSchema = new mongoose.Schema({
    transactionId: { type: String, default: uuidv4 }, // Unique identifier
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tournamentId: { type: mongoose.Schema.Types.ObjectId, ref: "Tournament", required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true, enum: ["INR", "USD"] },
    paymentMethod: { type: String, required: true, enum: ["Stripe", "Razorpay", "UPI"] },
    status: { type: String, enum: ["successful", "failed", "pending"], default: "pending" },
}, { timestamps: true });

const Transaction = mongoose.model("Transaction", TransactionSchema);
export { Transaction };
