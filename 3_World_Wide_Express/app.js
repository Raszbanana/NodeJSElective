const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/weather.html")    
})

app.get("/forecast", (req, res) => {
    res.sendFile(__dirname + "/public/weather.html")
})

app.listen(3000, () => {
    console.log("App is running and listening on port 3000");
  });