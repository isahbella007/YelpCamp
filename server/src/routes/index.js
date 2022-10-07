import express from "express"
import auth from "./auth.js";
import camps from "./camps.js";
import reviews from "./review.js";
const router = express.Router(); 

router.use("/auth",auth )
router.use("/camp", camps)
router.use("/review", reviews)

export default router