import dotenv from "dotenv"
import path from "path";
import jwt from "jsonwebtoken"
dotenv.config({ path: path.resolve('src', './.env') });
import bcrypt from "bcrypt"
import mongoose, { Schema } from "mongoose";

const gamerSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  contact: { type: Number },

  role: { type: String, enum: ["gamer", "organizer", "publisher"], default: "gamer" },
  avatar: { type: String },
  refreshToken: { type: String },

  gameIds: [{ type: Schema.Types.ObjectId, ref: "Game" }], // Referenced games
  state: { type: String , required:true},
  district: { type: String , required:true},
  referralCode:{type:String},

  gameHistory: {
    totalGames: { type: Number, default: 0 },
    categories: [
      {
        tournament: { type: Schema.Types.ObjectId, ref: "Tournament" }, // Link to tournament
        gameType: { type: String, required: true },
        wins: { type: Number, default: 0 },
        losses: { type: Number, default: 0 },
      },
    ],
  },

  tournamentStats: {
    totalWins: { type: Number, default: 0 },
    totalRank: { type: Number, default: 0 }, // Calculated from tournaments
    tournamentsParticipated: [{ type: Schema.Types.ObjectId, ref: "Tournament" }], // Reference to tournaments
  },

  createdAt: { type: Date, default: Date.now },
});

gamerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

gamerSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

gamerSchema.methods.generateAccessToken = function () {
  return jwt.sign({
    _id: this._id,
    email: this.email,
    username: this.username,
    fullname: this.fullname,

  },
    process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  })

}
gamerSchema.methods.generateRefreshToken = function () {
  return jwt.sign({
    _id: this._id,
  },
    process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  })
}
export const Gamer = mongoose.model("Gamer", gamerSchema)