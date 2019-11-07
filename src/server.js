const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("retorno do crawler");
});

console.log("ouvindo...");
app.listen(3000);
