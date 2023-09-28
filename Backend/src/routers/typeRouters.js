import express from "express";
import { typeControllers } from "../controllers/index.js";

const typeRouters = express.Router();

typeRouters.get("/", typeControllers.index);
typeRouters.get("/:slug", typeControllers.show);
typeRouters.post("/", typeControllers.store);
typeRouters.put("/:id", typeControllers.update);
typeRouters.delete("/:id", typeControllers.destroy);

export default typeRouters;
