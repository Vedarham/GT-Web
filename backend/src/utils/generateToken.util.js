import { Gamer } from "../models/gamer.model.js";
import { apiError } from "./apiError.util.js";

const generateToken = async (userID) => {

    const gamer = await Gamer.findById(userID);

    try {
        const refreshToken = gamer.generateRefreshToken();
        const accessToken = gamer.generateAccessToken();
        gamer.refreshToken = refreshToken
        await gamer.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
     
    } catch (err) {
        throw new apiError(500, "Something went wrong while Generating Token")
    }
}
export { generateToken }