const express = require("express");

const app = new express();

app.use("/", (req, res, next) => {
  res.send("ok man");
});

app.listen(3000, () => {
  console.log("started!");
});
