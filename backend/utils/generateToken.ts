import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

 const generateToken = (id: ObjectId) => {
  if (process.env.ACCESS_TOKEN_SECRET) {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "30d",
    });
  }
};

export default generateToken