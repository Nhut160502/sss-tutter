import express from "express";
import { categoryControllers } from "../controllers/index.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", categoryControllers.index);
categoriesRouter.get("/:slug", categoryControllers.show);
categoriesRouter.post("/", categoryControllers.store);
categoriesRouter.put("/:id", categoryControllers.update);
categoriesRouter.delete("/:id", categoryControllers.destroy);

export default categoriesRouter;
