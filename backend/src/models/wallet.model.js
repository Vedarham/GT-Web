import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Gamer", required: true, unique: true },
    cashBalance: { type: Number, default: 0 }, // INR available for tournaments/shop
    trophies: { type: Number, default: 0 }, // 1 trophy = ₹5 conversion
    transactions: [
        {
            type: { type: String, enum: ["deposit", "withdraw", "purchase", "redeem"], required: true },
            amount: Number,
            trophies: Number,
            description: String,
            date: { type: Date, default: Date.now }
        }
    ]
});

export const Wallet = mongoose.model("Wallet", walletSchema);
