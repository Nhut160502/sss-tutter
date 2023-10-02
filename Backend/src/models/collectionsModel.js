import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const collectionsModel = new Schema(
  {
    name: { type: String, required: true, unique: true, lowercase: true },
    desc: { type: String },
    thumbnail: { type: String, required: true },
    slug: { type: String, slug: "name" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);
configMongoose();
export const Collections = mongoose.model("Collections", collectionsModel);
