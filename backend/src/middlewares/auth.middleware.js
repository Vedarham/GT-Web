import dotenv from "dotenv"
import path from "path";
import { apiError } from "../utils/apiError.util.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { Gamer } from "../models/gamer.model.js";

dotenv.config({ path: path.resolve('src', './.env') });

const authenticateUser = asyncHandler(async (req, res, next) => {

console.log("Cookies:", req.cookies);
console.log("Authorization Header:", req.header("Authorization"));

    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            throw new apiError(401, "Unauthorized request")
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        
        const gamer = await Gamer.findById(decodedToken?._id).select("-password -refreshToken")
        
        if (!gamer) {
            
            throw new apiError(401, "Invalid Access Token")
        }
    
        req.gamer = gamer;
        next()
    } catch (error) {
        throw new apiError(401, error?.message || "Invalid access token")
    }
     
})

export { authenticateUser }