import dotenv from "dotenv"
import path from "path";
import { apiError } from "../utils/apiError.util.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.util.js";
dotenv.config({ path: path.resolve('src', './.env') });

const authenticateUser = asyncHandler(async (req, res, next) => {

    const token = req.cookie.accessToken
    if (!token) {
        throw new apiError(401, "No Access Token Generated!")
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(decoded + " " + decoded.id)
        req.userId = decoded.id;
        next();
    } catch (error) {
        throw new apiError(40, "Invalid or Expired Token!")
    }
})

export { authenticateUser }