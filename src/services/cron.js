const cron = require("node-cron");

const movieController = require("../controllers/MovieController");

function cronJob() {
  console.log("teste");
  cron.schedule("0 0 * * *", () => {
    console.log("::Atualizar::");
    movieController.store();
  });
}

module.exports = cronJob();
