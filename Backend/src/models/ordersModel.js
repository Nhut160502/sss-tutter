import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const ordersModel = new Schema(
  {
    fullName: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, lowercase: true },
    numberPhone: { type: Number, required: true },
    provinceId: {
      type: Schema.Types.ObjectId,
      ref: "Provinces",
      required: true,
    },
    districtId: {
      type: Schema.Types.ObjectId,
      ref: "Districts",
      required: true,
    },
    wardsId: { type: Schema.Types.ObjectId, ref: "Wards", required: true },
    address: { type: String, required: true },
    method: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

configMongoose();

export const Orders = mongoose.model("Orders", ordersModel);
