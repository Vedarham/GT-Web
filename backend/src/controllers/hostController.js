import { asyncHandler } from "../utils/asyncHandler.util.js"
import { apiError } from "../utils/apiError.util.js"
import { apiResponse } from "../utils/apiResponse.util.js"
import { Gamer } from "../models/gamer.model.js"
import { Organizer } from "../models/organizer.model.js"
import { Tournament } from "../models/tournament.model.js"

const hostTournament = asyncHandler(async(req,res)=>{
    const {status, title, gameType , categories,game , cost, region, organizerId} = req.body;
    const organizer = await Organizer.findById(organizerId)
    if(!organizer){
        throw new apiError(404,"Organizer not found")
    }

    // if same named tournament exist ... thinking if for single user or all ; must be unique
    
    const tournament = await Tournament.create({
       organizerId, status, title, gameType , categories,game , cost , region
    })
    organizer.tournamentsHeld.push(tournament._id);
    await organizer.save();

    return res.status(201).json(
        new apiResponse(200,tournament,"Tournament Created Successfully")
    )
})

const getTournamentsByOrganizer = asyncHandler(async (req, res) => {
    const { organizerId } = req.params;
    const tournaments = await Tournament.find({ organizerId })
        .populate("organizerId", "name email") 
        .populate("gamers", "username")
        .exec();
  
    if (!tournaments || tournaments.length === 0) {
        return res.status(404).json(
            new apiResponse(404, null, "No tournaments found for this organizer")
        );
    }
  
    res.status(200).json(
        new apiResponse(200, tournaments, "Tournaments fetched successfully")
    );
  })

const updateTournament =asyncHandler(async (req,res)=>{

})

// Get all tournament 
// Delete

// joinController -> join, exit, add-friends-by-referral 
export {hostTournament, getTournamentsByOrganizer}