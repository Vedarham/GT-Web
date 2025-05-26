import { Transaction } from "../models/transaction.model";

import { asyncHandler } from "../utils/asyncHandler.util.js"
import { apiError } from "../utils/apiError.util.js"
import { apiResponse } from "../utils/apiResponse.util.js"
import { Gamer } from "../models/gamer.model.js"
import { Organizer } from "../models/organizer.model.js"
import { Tournament } from "../models/tournament.model.js"

const recordTransaction = asyncHandler(async(req,res)=>{
    const { userId, tournamentId, amount, currency, paymentMethod, transactionId } = req.body;

    if (!userId || !tournamentId || !amount || !paymentMethod || !transactionId) {
        throw new apiError(400,"Missing required fields")
    }
    const transaction = await Transaction.create({
        userId,
        tournamentId,
        amount,
        currency,
        paymentMethod,
        transactionId,
        status: "successful"
    });

    return res.status(201).json(new apiResponse(201, transaction, "Transaction Recorded Successfully"));
});

export { recordTransaction };