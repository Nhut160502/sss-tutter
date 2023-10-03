import express from "express";
import { colorControllers } from "../controllers/index.js";

const colorRouter = express.Router();

colorRouter.get("/", colorControllers.index);
colorRouter.get("/:slug", colorControllers.show);
colorRouter.post("/", colorControllers.store);
colorRouter.put("/", colorControllers.update);
colorRouter.delete("/:id", colorControllers.destroy);

export default colorRouter;
