import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../model/userModel";

const verify = (req: Request, res: Response, next: NextFunction) => {
  const authHeader =
    <string>req.headers["auth"] || <string>req.headers["authorization"];

  try {
    const token = authHeader.split(" ")[1];
    if (token && process.env.ACCESS_TOKEN_SECRET) {
      const decoded = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET
      ) as jwt.JwtPayload;
      console.log(decoded);
      // req.[user] = await userModel.findById(decoded.id).select("-password");
      req.body["id"] = decoded.id;
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(401).send("Not Authorized");
  }
};

export default verify;
