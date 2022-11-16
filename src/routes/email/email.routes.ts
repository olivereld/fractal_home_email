import { Router } from "express";
import { sendEmail } from "../../controllers/email/email.controller";

const router = Router();
//Obtain google login url
router.get('/',sendEmail)

export default router;