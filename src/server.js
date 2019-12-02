require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");

const movieController = require("./controllers/MovieController");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

cron.schedule("0 0 * * *", () => {
  console.log("::Atualizar::");
});
movieController.store();

app.get("/get", movieController.index);

console.log(":Ouvindo:");
app.listen(3000);
