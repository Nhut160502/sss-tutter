import express from "express";
import { sizeControllers } from "../../controllers/dashboard/index.js";

const sizesRouter = express.Router();

sizesRouter.get("/", sizeControllers.index);
sizesRouter.get("/:slug", sizeControllers.show);
sizesRouter.post("/", sizeControllers.store);
sizesRouter.put("/", sizeControllers.update);
sizesRouter.delete("/:id", sizeControllers.destroy);

export default sizesRouter;
