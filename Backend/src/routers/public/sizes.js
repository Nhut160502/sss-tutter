import express from "express";
import { sizeControllers } from "../../controllers/customer/index.js";

const sizesRouter = express.Router();

sizesRouter.get("/", sizeControllers.getList);

export default sizesRouter;
