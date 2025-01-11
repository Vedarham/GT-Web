
import { asyncHandler } from "../utils/asyncHandler.util.js"
import { apiError } from "../utils/apiError.util.js"
import { apiResponse } from "../utils/apiResponse.util.js"
import { Gamer } from "../models/gamer.model.js";
import { generateToken } from "../utils/generateToken.util.js";


const signupUser = asyncHandler(async (req, res) => {
    const { username, email, fullname, password } = req.body;
    const existedGamer = await Gamer.findOne({
        $or: [{ username }, { email }]
    })

    if (existedGamer) {
        throw new apiError(409, "User Already Exists!")
    }

    const gamer = await Gamer.create({
        username: username.toLowerCase(),
        email,
        fullname,
        password
    })

    const createdGamer = await Gamer.findById(gamer._id).select("-password -refreshToken")

    if (!createdGamer) {
        throw new apiError(500, "Something went wrong while registering!")
    }


    return res.status(201).json(
        new apiResponse(200, createdGamer, "User registered Successfully")
    )
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        throw new apiError(400, "Invalid User Credentials")
    }
    const gamer = await Gamer.findOne({ email })
    if (!gamer) { 
        throw new apiError(404, "Credential doesn't exist")
    }
    const isPasswordValid = await gamer.isPasswordCorrect(password)
    if (!isPasswordValid) {
        throw new apiError(401, "Invalid User Credentials")
    }
    if (gamer.refreshToken) {
        return res
            .status(200)
            .cookie("accessToken", gamer.generateAccessToken(), { httpOnly: true, secure: true })
            .cookie("refreshToken", gamer.generateRefreshToken(), { httpOnly: true, secure: true })
            .json(new apiResponse(200, { gamer: gamer._id }, "Re-login Success!"));
    }
    const {accessToken,refreshToken}= await generateToken(gamer._id);

    const loggedGamer = await Gamer.findById(gamer._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    }

    // console.log("Access Token:", accessToken);
    // console.log("Refresh Token:", refreshToken); 

    return res
        .status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new apiResponse(201,
                { gamer: loggedGamer, accessToken, refreshToken },
                "Login Success!"))
})

const getUser = asyncHandler(async(req,res)=>{
    
const gamer = await Gamer.findById(req.userId).select("-password -refreshToken");
console.log(gamer)
  if (!gamer) {
    throw new apiError(404, "User not found");
  }

  res.status(200).json(gamer); 
});

// const logoutUser = asyncHandler(async(req,res)=>{
//     Gamer.findById()
// })

export { loginUser, signupUser, getUser } 