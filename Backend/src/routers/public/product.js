import express from "express";
import { productControllers } from "../../controllers/customer/index.js";
import { upload } from "../../configs/multer.js";
const productsRouter = express.Router();

productsRouter.get("/newarrivals", productControllers.newarrivals);
productsRouter.get("/stylepick", productControllers.stylepick);

export default productsRouter;
