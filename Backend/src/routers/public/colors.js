import express from "express";
import { colorControllers } from "../../controllers/customer/index.js";

const colorsRouter = express.Router();

colorsRouter.get("/", colorControllers.getList);

export default colorsRouter;
