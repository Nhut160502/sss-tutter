import express from "express";
import typesRouters from "./typesRouters.js";
import collectionsRouter from "./collections.js";
import categoriesRouter from "./categories.js";
import productsRouter from "./products.js";
import colorRouter from "./colors.js";
import sizesRouter from "./sizes.js";
import ordersRouter from "./orders.js";
import cartsRouter from "./carts.js";

const router = express.Router();

router.use("/type", typesRouters);
router.use("/collection", collectionsRouter);
router.use("/category", categoriesRouter);
router.use("/product", productsRouter);
router.use("/color", colorRouter);
router.use("/size", sizesRouter);
router.use("/order", ordersRouter);
router.use("/cart", cartsRouter);

export default router;
