import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const colorsModel = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, slug: "name" },
    code: { type: String, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

configMongoose();

export const Colors = mongoose.model("Colors", colorsModel);
