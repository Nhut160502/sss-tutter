import express from "express";
import { categoryControllers } from "../../controllers/customer/index.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", categoryControllers.getAll);

export default categoriesRouter;
