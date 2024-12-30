import bcrypt from "bcrypt"

import {asyncHandler} from "../utils/asyncHandler.util.js"
import {apiError} from "../utils/apiError.util.js"
import {apiResponse} from "../utils/apiResponse.util.js"
import { Gamer } from "../models/gamer.model.js";
const signupUser = asyncHandler(async(req,res)=>{
    const {username, email, fullname , password} = req.body;

    // if([email,fullname,password].some((field)=>
    //     field?.trim()===""
    // )){
    //     throw new apiError(400,"Something Went Wrong!")
    // }

    const gamer = await Gamer.create({
        username: username.toLowerCase(),
        email,
        fullname,
        password
    })

    const createdGamer = await Gamer.findById(gamer._id).select("-password -refreshToken")

    if(!createdGamer){
        throw new apiError(500,"Something went wrong while registering!")
    }


    return res.status(201).json(
        new apiResponse(200, createdGamer, "User registered Successfully")
    )
})

const loginUser = asyncHandler(async(req,res)=>{
    const { email , password} = req.body;
    if(!email){
        throw new apiError(400, "Invalid User Credentials")
    }
    const gamer = await Gamer.findOne({ email })
    if(!gamer){
        throw new apiError(404,"Credential doesn't exist")
    }
    const isPasswordValid = await gamer.isPasswordCorrect(password)
    if (!isPasswordValid){
        throw new apiError(401,"Invalid User Credentials")
    }

    const loggedGamer = await Gamer.findById(gamer._id).select("-password -refreshToken")

    return res
        .status(201)
        .json(
        new apiResponse(200,
            {gamer: loggedGamer},
            "Login Success!"))
})

export {loginUser, signupUser}