import mongoose from "mongoose";

const tournamentSchema = new Schema({
    status: { type: String, enum: ["upcoming", "ongoing", "completed"], required: true },
    organizers: [{ type: Schema.Types.ObjectId, ref: "Organizer" }],
    gamers: [{ type: Schema.Types.ObjectId, ref: "Gamer" }],
    banner: { type: String },
    title: { type: String, required: true },
    eventType: {
        type: String,
        enum: ["rpg", 
            "MOBA",
            "FPS",
            "Fighting",
            "RTS",
            "Card",
            "Battle Royale"],
        required: true,
    },
    categories: [
        {
            gameType: { type: String, required: true }, 
            wins: { type: Number, default: 0 },
            losses: { type: Number, default: 0 },
        },
    ],
    game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
    cost: {
        type: { type: String, enum: ["free", "paid"], required: true },
        amount: { type: Number, default: 0 },
    },
    date: { type: Date, required: true },
    region: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const Tournament = mongoose.model("Tournament", tournamentSchema);
