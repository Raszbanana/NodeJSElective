const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pages/weather.html")    
})

app.listen(3000, () => {
    console.log("App is running and listening on port 3000");
  });