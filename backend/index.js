import express from "express";
import cors from "cors";
import db from "./utils/db.js";
import bodyParser from "body-parser";
import KosRouter from "./router/KosRouter.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(KosRouter);

app.listen(3000, () => {
  console.log("Server Up Running....");
});
