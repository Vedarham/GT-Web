import { Gamer } from "../models/gamer.model.js";
import { apiError } from "./apiError.util.js";

const generateToken = async (userId) => {

        try {
            const gamer = await Gamer.findById(userId);
        if (!gamer) {
            throw new apiError(404, "User not found");
        }
            const accessToken = gamer.generateAccessToken()
            const refreshToken = gamer.generateRefreshToken()
    
            gamer.refreshToken = refreshToken
            await gamer.save({ validateBeforeSave: false })
            return {accessToken, refreshToken}
    
        } catch (error) {
            throw new apiError(500, "Something went wrong while generating referesh and access token")
        }
};


export { generateToken }