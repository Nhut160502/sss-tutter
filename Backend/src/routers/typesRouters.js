import express from "express";
import { typeControllers } from "../controllers/index.js";

const typesRouters = express.Router();

typesRouters.get("/", typeControllers.index);
typesRouters.get("/:slug", typeControllers.show);
typesRouters.post("/", typeControllers.store);
typesRouters.put("/:id", typeControllers.update);
typesRouters.delete("/:id", typeControllers.destroy);

export default typesRouters;
