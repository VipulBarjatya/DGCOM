import { Request, Response } from "express";
import { userModel } from "../model/userModel";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken";

// @desc     Register User & Encrypt Password
// @route    POST    /api/users/login
// @access   Public
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    res.status(409).send({ message: `${email} already exists` });
  }

  try {
    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name: name,
      email: email,
      password: hashedPwd,
    });

    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc     Auth User & Get Token
// @route    POST    /api/users/login
// @access   Public
export const authUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (user) {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user.id),
      });
    } else {
      res.send({ message: "incorrect password" });
    }
  } else {
    res.json({ error: "User not found" });
  }
};

// @desc     Get User profile
// @route    GET    /api/users/profile
// @access   Private
export const getUserProfile = async (req: Request, res: Response) => {
  const { id } = req.body;

  const user = await userModel.findById(id);

  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404).json({ message: "unauthorized user" });
  }
};
