import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../model/userModel";

interface AuthenticatedRequest extends Request {
  user?: any;
}

const verify = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
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
      req.user = await userModel.findById(decoded.id).select("-password");
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(401).send("Not Authorized");
  }
};

const isAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user && req.user.isAdmin) {
    console.log(req.user);
    next();
  } else {
    res.status(401).json({ message: "Not authorized as admin!" });
  }
};

export { verify, isAdmin };
