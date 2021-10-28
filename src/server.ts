/* eslint-disable no-console */
import express from "express";
import { router } from "./router";

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
