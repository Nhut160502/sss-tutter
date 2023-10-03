import express from "express";
import { categoryControllers } from "../controllers/index.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", categoryControllers.index);
categoriesRouter.get("/:slug", categoryControllers.show);
categoriesRouter.post("/", categoryControllers.store);
categoriesRouter.put("/", categoryControllers.update);
categoriesRouter.delete("/:id", categoryControllers.destroy);
categoriesRouter.get("/type/:id", categoryControllers.findType);

export default categoriesRouter;
