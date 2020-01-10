const Movie = require("../database/models/movies");
const crawler = require("../services/crawler");

class MovieController {
  async store(req, res) {
    try {
      console.log("raspando....");
      // await Movie.remove();

      await crawler(async cbMovies => {
        cbMovies.forEach(async cbMovie => {
          const movies = await Movie.find();
          movies.forEach(async bdMovie => {
            if (bdMovie.eventID !== cbMovie.eventID) {
              // create new movie
              await Movie.create(cbMovie);
            }
          });
        });
      });

      return res.json({ status: "ok" });
    } catch (err) {
      console.log("Error ", err);
      return res.json({ status: "error" });
    }
  }

  async index(req, res) {
    try {
      const retorno = await Movie.find();
      return res.json(retorno);
    } catch (err) {
      console.log("Error " + err);
      return res.json({ error: true });
    }
  }

  async find(req, res) {
    try {
      const retorno = await Movie.findById(req.params.id);
      return res.json(retorno);
    } catch (err) {
      console.log("Error " + err);
      return res.json({ error: true });
    }
  }

  async rate(req, res) {
    try {
      if (!req.body.rate || isNaN(req.body.rate)) {
        return res.json({ validation: "error" });
      }

      const retorno = await Movie.findById(req.params.id);
      retorno.rate = req.body.rate;
      retorno.save();
      return res.json(retorno);
    } catch (err) {
      console.log("Error " + err);
      return res.json({ error: true });
    }
  }
}

module.exports = new MovieController();
