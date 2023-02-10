import express, { Request, Response } from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController";
import verify from "../middleware/authMiddleware";

router.post("/signup", registerUser);
router.post("/login", authUser);
router.get("/profile", verify, getUserProfile);

export default router;
