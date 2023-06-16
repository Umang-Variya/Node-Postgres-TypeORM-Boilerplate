import express from "express";
import cors from "cors";
import mainRouter from "./routes/index";
import { AppDataSource } from "./data-source";
const port = process.env.APP_PORT || 3300;
require("dotenv").config();

AppDataSource.initialize()
  .then(async () => {
    console.log("Connected To Postgres👍");

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );
      res.setHeader("Access-Control-Allow-Credentials", true as any);
      next();
    });
    app.use(cors());
    app.use(express.json());
    app.use(express.static("public"));
    app.use("/", mainRouter);
    app.use(express.static(__dirname + "/"));


    app.listen(port, () => console.log(`Server running at port ${port}!🚀`));
})