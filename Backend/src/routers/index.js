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
import categories from "./public/category.js";
import colors from "./public/colors.js";
import sizes from "./public/sizes.js";

const router = express.Router();

router.use("/public/product", products);
router.use("/public/category", categories);
router.use("/public/color", colors);
router.use("/public/size", sizes);

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
