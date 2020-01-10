const cheerio = require("cheerio");
const request = require("request");

const URL = "https://www.veloxtickets.com/Portal/Ingresso/Cinema/Jequie";

function rasparDados(cb) {
  request(URL, (err, res, body) => {
    if (err) {
      console.log("Erro", err);
      return;
    }

    const $ = cheerio.load(body);

    var scripts = $("script").filter(function() {
      return (
        $(this)
          .html()
          .indexOf("var eventComingSoonData =") > -1
      );
    });
    if (scripts.length === 1) {
      var text = $(scripts[0]).html();

      const [old, newstr] = text.split("eventToBuyData");

      const [oo] = newstr.split("}];");
      return cb(JSON.parse(oo.slice(3, oo.length) + "}]"));
    } else {
      console.log("Erro, script vazio");
      return false;
    }
  });
}

module.exports = rasparDados;
