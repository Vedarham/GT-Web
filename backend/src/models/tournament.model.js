import mongoose, { Schema } from "mongoose";

const tournamentSchema = new Schema({
    status: { type: String, enum: ["upcoming", "ongoing", "completed"], required: true },
    organizerId: { type: Schema.Types.ObjectId, ref: "Organizer", required:true},
    gamers: [{ type: Schema.Types.ObjectId, ref: "Gamer" }],
    banner: { type: String },
    title: { type: String, required: true },
    gameType: {
        type: String,
        enum: ["RPG", 
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
            eventType: {
                type: String,
                enum: ["Solo", 
                    "Duo",
                    "Squad"],
                required: true,
            }, 
            wins: { type: Number, default: 0 },
            losses: { type: Number, default: 0 },
        },
    ],
    game:{
    type: String,
    required: true,
    enum: [
      'League of Legends',
      'Dota 2',
      'Apex Legends',
      'CS:GO',
      'Valorant',
      'PUBG',
    ], 
  },
    cost: {
        type: { type: String, enum: ["free", "paid", "trophies"], required: true },
        amount: { type: Number, default: 0 },
    },
    // date: { type: Date, required: true },
   region: {
  type: String,
  required: true,
  enum: [
    'All', 
  ],
  default: 'All' 
},
    createdAt: { type: Date, default: Date.now },
});
// platform pc xbox mobile ...
export const Tournament = mongoose.model("Tournament", tournamentSchema);
