import express from "express";
import { collectionControllers } from "../controllers/index.js";

const collectionsRouter = express.Router();
collectionsRouter.get("/", collectionControllers.index);
collectionsRouter.get("/:slug", collectionControllers.show);
collectionsRouter.post("/", collectionControllers.store);
collectionsRouter.put("/:id", collectionControllers.update);
collectionsRouter.delete("/:id", collectionControllers.destroy);

export default collectionsRouter;
