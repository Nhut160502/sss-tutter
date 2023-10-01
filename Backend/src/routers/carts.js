import express from "express";
import { cartControllers } from "../controllers/index.js";

const cartsRouter = express.Router();

cartsRouter.get("/", cartControllers.index);
cartsRouter.post("/", cartControllers.store);
cartsRouter.delete("/:id", cartControllers.destroy);

export default cartsRouter;
