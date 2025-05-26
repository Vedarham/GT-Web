
import { asyncHandler } from "../utils/asyncHandler.util.js"
import { apiError } from "../utils/apiError.util.js"
import { apiResponse } from "../utils/apiResponse.util.js"
import { Gamer } from "../models/gamer.model.js";
import { generateToken } from "../utils/generateToken.util.js";


const signupUser = asyncHandler(async (req, res) => {
    const { username, email, fullname, password,state,district,referralCode } = req.body;
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
        state,
        district,
        referralCode,
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
  secure: process.env.NODE_ENV === "production", // false on localhost
  sameSite: "Lax", // or 'None' with secure in production
};


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
              }
            )

const getUser = asyncHandler(async (req, res) => {
    const gamer = await Gamer.findById(req.gamer._id).select('-password -refreshToken');
  
    if (!gamer) {
      throw new apiError(404, 'User not found');
    }
  
    res.status(200).json(gamer);
  });
  
const updateUser = asyncHandler( async (req, res) => {
    const { fullname, username, email, newpassword, confirmPassword } = req.body;
  
    const existedGamer = await Gamer.findOne({
        $or: [{ username }, { email }]
    })

    if (existedGamer) {
        throw new apiError(409, "User Already Exists!")
    }

    if (newpassword !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
  
    try {
      const userId = req.userId;
      const user = await Gamer.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (fullname) user.fullname = fullname;
      if (username) user.username = username;
      if (email) user.email = email;
      if(newpassword) user.password =newpassword;

      await user.save();
      res.json({ message: 'User updated successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }})

const logoutUser = asyncHandler((req, res) => {
    res.clearCookie('token', {
      httpOnly: true,  
      secure: process.env.NODE_ENV === 'production',  
      sameSite: 'strict',  // Helps mitigate CSRF attacks
      path: '/'  // Define the path if necessary (can be '/' for the whole domain)
    });
  
    res.status(200).json({ message: 'Logged out successfully' });
  });  

export { loginUser, signupUser, getUser , updateUser , logoutUser} 