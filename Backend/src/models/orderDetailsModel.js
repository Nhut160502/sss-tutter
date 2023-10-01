import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;
const orderDetailsModel = new Schema(
  {
    orderId: { type: Schema.Types.ObjectId, ref: "Orders", required: true },
    details: [
      {
        type: Map,
        of: new Schema({
          products: { type: Schema.Types.ObjectId, ref: "Products" },
          colors: { type: Schema.Types.ObjectId, ref: "Colors" },
          sizes: { type: Schema.Types.ObjectId, ref: "Sizes" },
          qty: { type: Number },
          price: { type: Number },
        }),
      },
    ],
    total: { type: Number, required: true },
    status: { type: Boolean, default: 0 },
    reasonCancel: { type: String, lowercase: true },
  },
  { timestamps: true }
);

configMongoose();

export const OrderDetails = mongoose.model("OrdersDetails", orderDetailsModel);
