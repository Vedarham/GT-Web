import { Router } from "express";
import { getTournamentsByOrganizer, hostTournament } from "../controllers/hostController.js";

const router = Router();

router.route('/create').post(hostTournament)

router.route('/organizer/:organizerId').get(getTournamentsByOrganizer)
export default router