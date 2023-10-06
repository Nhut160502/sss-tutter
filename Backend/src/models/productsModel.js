import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";
const Schema = mongoose.Schema;

const productsModel = new Schema(
  {
    name: { type: String, required: true, unique: true, lowercase: true },
    slug: { type: String, slug: "name" },
    type: { type: Schema.Types.ObjectId, ref: "Types", required: true },
    collections: {
      type: Schema.Types.ObjectId,
      ref: "Collections",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
    },
    price: { type: Number, required: true },
    salePrice: { type: Number },
    colors: [{ type: Schema.Types.ObjectId, ref: "Colors", required: true }],
    sizes: [{ type: Schema.Types.ObjectId, ref: "Sizes", required: true }],
    media: [
      {
        color: {
          type: Schema.Types.ObjectId,
          ref: "Colors",
          required: true,
        },
        thumbnail: { type: String, required: true },
        gallery: [{ type: String, required: true }],
      },
    ],
    stock: [
      {
        color: {
          type: Schema.Types.ObjectId,
          require: true,
          ref: "Colors",
        },
        size: {
          type: Schema.Types.ObjectId,
          require: true,
          ref: "Sizes",
        },
        qty: { type: Number, required: true },
      },
    ],

    linkShopee: { type: String },
    linkLazada: { type: String },
    barcode: { type: String, required: true, unique: true },
    preOrder: { type: Boolean },
    stylePick: { type: Boolean },
    status: { type: Boolean, default: true },
    desc: { Type: String },
  },
  { timestamps: true }
);

configMongoose();

export const Products = mongoose.model("Products", productsModel);
