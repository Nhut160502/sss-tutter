import express from "express";
import { collectionControllers } from "../../controllers/dashboard/index.js";
import { upload } from "../../configs/multer.js";

const collectionsRouter = express.Router();
collectionsRouter.get("/", collectionControllers.index);
collectionsRouter.get("/:slug", collectionControllers.show);
collectionsRouter.post("/", upload.single("file"), collectionControllers.store);
collectionsRouter.put("/", upload.single("file"), collectionControllers.update);
collectionsRouter.delete("/:id", collectionControllers.destroy);

export default collectionsRouter;
