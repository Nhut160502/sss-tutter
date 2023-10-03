import express from "express";
import "dotenv/config";
import cors from "cors";
import session from "express-session";
import { connectDatabase } from "./src/configs/database.js";
import router from "./src/routers/index.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// static file
app.use(express.static("./public"));
// connect database
connectDatabase();

// config session
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "somesecret",
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

// config router
app.use("/api", router);

app.listen(8080, () => {
  console.log(
    `Server running on http://${process.env.HOST}:${process.env.PORT}`
  );
});
