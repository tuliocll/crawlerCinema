const Movie = require("../database/models/movies");
const crawler = require("../services/crawler");

class MovieController {
  async store() {
    try {
      console.log("raspando....");
      await Movie.remove();
      await crawler(async cbMovies => {
        cbMovies.forEach(async cbMovie => {
          await Movie.create(cbMovie);
        });
      });

      return true;
    } catch (err) {
      return false;
    }
  }

  async index(req, res) {
    try {
      console.log("teste");
      const retorno = await Movie.find();
      return res.json(retorno);
    } catch (err) {
      console.log("Error " + err);
      return res.json({ error: true });
    }
  }
}

module.exports = new MovieController();
