require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const cronJob = require("./services/cron");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

console.log(":Ouvindo:");
app.listen(3000);
