import express from "express";
import typeRouters from "./typeRouters.js";
import collectionRouter from "./collections.js";

const router = express.Router();

router.use("/type", typeRouters);
router.use("/collection", collectionRouter);

export default router;
