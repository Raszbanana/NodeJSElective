const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.use(express.static(__dirname + "/public/pages"));

const nav = fs
  .readFileSync(__dirname + "/public/components/nav/nav.html")
  .toString();

const frontpage = fs
  .readFileSync(__dirname + "/public/pages/frontpage/frontpage.html")
  .toString();

const themepark = fs
  .readFileSync(__dirname + "/public/pages/themepark/themepark.html")
  .toString();

const frontpagePage = nav + frontpage;
const themeparkPage = nav + themepark;

app.get("/", (req, res) => {
  res.send(frontpagePage);
});

app.get("/themepark", (req, res) => {
  res.send(themeparkPage);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});
