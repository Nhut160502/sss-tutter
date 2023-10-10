import express from "express";
import typesRouters from "./private/typesRouters.js";
import collectionsRouter from "./private/collections.js";
import categoriesRouter from "./private/categories.js";
import productsRouter from "./private/products.js";
import colorRouter from "./private/colors.js";
import sizesRouter from "./private/sizes.js";
import ordersRouter from "./private/orders.js";
import cartsRouter from "./private/carts.js";

import products from "./public/product.js";

const router = express.Router();

router.use("/public/product", products);

// private
router.use("/private/type", typesRouters);
router.use("/private/collection", collectionsRouter);
router.use("/private/category", categoriesRouter);
router.use("/private/product", productsRouter);
router.use("/private/color", colorRouter);
router.use("/private/size", sizesRouter);
router.use("/private/order", ordersRouter);
router.use("/private/cart", cartsRouter);

// public

export default router;
