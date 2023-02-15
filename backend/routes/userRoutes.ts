import express, { Request, Response } from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  getUsers,
} from "../controllers/userController";
import { verify, isAdmin } from "../middleware/authMiddleware";

router.post("/signup", registerUser);
router.post("/login", authUser);
router.get("/profile", verify, getUserProfile);
router.get("/", verify, isAdmin, getUsers);

export default router;
