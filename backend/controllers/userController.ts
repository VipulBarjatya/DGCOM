import { Request, Response } from "express";
import { userModel } from "../model/userModel";
import { Iuser } from "../model/userModel";
import bcrypt from "bcryptjs";

// @desc     Auth User & Get Token
// @route    POST    /api/users/login
// @access   Public

export const authUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (user) {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      res.json(`${user.name} you are successfuly signed in`);
    } else {
      res.send({ message: "incorrect password" });
    }
  } else {
    res.json({ error: "User not found" });
  }
};
