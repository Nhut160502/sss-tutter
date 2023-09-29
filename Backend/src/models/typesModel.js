import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const typeModel = new Schema(
  {
    name: { type: String, requierd: true, unique: true, lowercase: true },
    slug: { type: String, slug: "name" },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

configMongoose();
export const Types = mongoose.model("Types", typeModel);
