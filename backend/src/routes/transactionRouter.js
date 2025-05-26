import { recordTransaction } from "../controllers/transactionController.js";

const router = express.Router();

router.post("/record", recordTransaction); 

export default router;
