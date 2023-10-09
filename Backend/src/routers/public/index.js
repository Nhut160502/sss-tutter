import express from "express";
import productsRouter from "./product.js";

const router = express.Router();

router.use("/product", productsRouter);

export default router;
