import express from "express";
import { productControllers } from "../controllers/index.js";
const productsRouter = express.Router();

productsRouter.get("/", productControllers.index);
productsRouter.get("/:slug", productControllers.show);
productsRouter.post("/", productControllers.store);
productsRouter.put("/:id", productControllers.update);
productsRouter.delete("/:id", productControllers.destroy);

export default productsRouter;
