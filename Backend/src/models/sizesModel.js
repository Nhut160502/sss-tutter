import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const sizesModel = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, slug: "name" },
    type: { type: Number, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

configMongoose();

export const Sizes = mongoose.model("Sizes", sizesModel);
