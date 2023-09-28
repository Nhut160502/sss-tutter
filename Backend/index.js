import express from "express";
import 'dotenv/config'
import cors from 'cors'
import { connectDatabase } from "./src/configs/database.js";
const app = express();
app.use(express.json())
app.use(cors());
app.use(express.static("./public"));
connectDatabase();
app.listen(8080, () => {
  console.log(`Server running on http://${process.env.HOST}:${process.env.PORT}`);
});
