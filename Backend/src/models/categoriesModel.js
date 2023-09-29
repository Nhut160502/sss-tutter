import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const categoryModel = new Schema(
  {
    name: { type: String, required: true, unique: true, lowercase: true },
    type: { type: Schema.Types.ObjectId, ref: "Types", required: true },
    slug: { type: String, slug: "name" },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

configMongoose();

export const Categories = mongoose.model("Categories", categoryModel);
