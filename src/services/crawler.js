const cheerio = require("cheerio");
const request = require("request");

const URL = "https://www.veloxtickets.com/Portal/Ingresso/Cinema/Jequie";

request(URL, (err, res, body) => {
  if (err) {
    console.log("Erro", err);
    return;
  }

  const $ = cheerio.load(body);

  const teste = $(
    "#ko_body > div.container.loading-page.home.complete-load > div:nth-child(3) > div > section > div > div.eventsContainer > div > div:nth-child(1) > article > a > picture > img"
  );
  console.log(teste.children(1));

  $(
    "#ko_body > div.container.loading-page.home.complete-load > div:nth-child(3) > div > section > div > div.eventsContainer > div"
  ).each(index => {
    const img = $(this)
      .find("div:nth-child(1) > article > a > picture > img")
      .attr("src");
    console.log("asd", img);
  });
});
