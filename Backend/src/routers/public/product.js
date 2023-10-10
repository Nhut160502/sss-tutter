import express from "express";
import { productControllers } from "../../controllers/customer/index.js";
const productsRouter = express.Router();

productsRouter.get("/newarrivals", productControllers.newarrivals);
productsRouter.get("/bestsaller", productControllers.bestSaller);
productsRouter.get("/stylepick", productControllers.stylepick);
productsRouter.get("/:slug", productControllers.show);
productsRouter.get("/", productControllers.getAll);

export default productsRouter;
