import { asyncHandler } from "../utils/asyncHandler.util.js"
import { apiError } from "../utils/apiError.util.js"
import { apiResponse } from "../utils/apiResponse.util.js"
import { Gamer } from "../models/gamer.model.js"
import { Organizer } from "../models/organizer.model.js"
import { Tournament } from "../models/tournament.model.js"

const switchToOrganizer = asyncHandler(async(req,res)=>{
   const {gamerId} = req.body

   if (!gamerId) {
    return res.status(400).json({ message: "Gamer ID is required" });
  }

   const gamer = await Gamer.findById(gamerId)
   if(!gamer){
    throw new apiError(404,"Gamer not found")
   }

   if(gamer.role === "organizer"){
    return res.status(400).json({
        message:"You are already an Organizer"
    })
   }

   const organizer = Organizer.create({
    user: gamer._id,
    name : gamer.fullname, 
    email: gamer.email,
    avatar: gamer.avatar
   })

   gamer.role = "organizer";
   await gamer.save()

   return res.status(200).json(
    new apiResponse(200,organizer,"Switched to organizer successfully")
   )
})

const updateOrganizer = asyncHandler(async(req,res)=>{
  const {name,email,contact,avatar} = req.body

  // const org = await Organizer.findOne({email})
  // if(!org){
  //   throw new apiError(400,"Organizer not found!")
  // }
  
  const updOrg =   Organizer.findOneAndUpdate({ "_id": req.body._id ({
    name,
    email,
    contact,
    avatar
  })},{ new: true })

  return res.status(200).json(new apiResponse(200, createdGamer, "User registered Successfully"))
})
// back-to-gamer or delete-organizer-role , 


export {switchToOrganizer}