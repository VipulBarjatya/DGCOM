import { Schema, model } from "mongoose";

export interface Iuser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const userSchema = new Schema<Iuser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model<Iuser>("user", userSchema);
