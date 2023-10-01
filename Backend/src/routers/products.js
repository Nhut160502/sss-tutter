import express from "express";
import { productControllers } from "../controllers/index.js";
import { upload } from "../configs/multer.js";
const productsRouter = express.Router();

productsRouter.get("/", productControllers.index);
productsRouter.get("/:slug", productControllers.show);
productsRouter.post("/", upload.array("files"), productControllers.store);
productsRouter.put("/:id", upload.array("files"), productControllers.update);
productsRouter.delete("/:id", productControllers.destroy);

export default productsRouter;
