const express = require("express");

const movieController = require("./controllers/MovieController");

const routes = new express.Router();

routes.get("/movies", movieController.index);
routes.get("/movie/:id", movieController.find);
routes.post("/movie/:id/rate", movieController.rate);

routes.get("/forceUpdate", movieController.store);

module.exports = routes;
