import express from "express";
import { orderControllers } from "../controllers/index.js";

const ordersRouter = express.Router();
ordersRouter.get("/", orderControllers.index);
ordersRouter.get("/:id", orderControllers.show);
ordersRouter.patch("/comfirm/:id", orderControllers.confirm);
ordersRouter.patch("/shipping/:id", orderControllers.shipping);
ordersRouter.patch("/completed/:id", orderControllers.completed);
ordersRouter.patch("/canceled/:id", orderControllers.canceled);

export default ordersRouter;
