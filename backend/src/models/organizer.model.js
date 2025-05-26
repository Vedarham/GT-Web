import mongoose, { Schema } from "mongoose";

const organizerSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Gamer", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: Number },
  avatar: { type: String },
  tournamentsHeld: [
    {
      tournament: { type: Schema.Types.ObjectId, ref: "Tournament" },
      date: { type: Date },
    },
  ], 
  createdAt: { type: Date, default: Date.now },
});

export const Organizer = mongoose.model("Organizer", organizerSchema)
