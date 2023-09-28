import express from "express";
import { collectionControllers } from "../controllers/index.js";

const collectionRouter = express.Router();
collectionRouter.get("/", collectionControllers.index);

export default collectionRouter;
