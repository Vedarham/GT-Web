import dotenv from "dotenv";
import path from "path";
import jwt from "jsonwebtoken";
import { apiError } from "../utils/apiError.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { Gamer } from "../models/gamer.model.js";

dotenv.config({ path: path.resolve('src', './.env') });

const authenticateUser = asyncHandler(async (req, _, next) => {
  console.log("Cookies:", req.cookies);

  const accessToken = req.cookies?.accessToken;

  if (!accessToken) {
    throw new apiError(401, 'Unauthorized request - token not found');
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    throw new apiError(401, 'Invalid or expired access token');
  }

  const gamer = await Gamer.findById(decodedToken._id).select('-password -refreshToken');

  if (!gamer) {
    throw new apiError(401, 'User not found');
  }

  req.gamer = gamer;
  next();
});

export { authenticateUser };
