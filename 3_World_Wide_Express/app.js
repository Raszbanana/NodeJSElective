const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")  
})

app.get("/time", (req, res) => {
    res.sendFile(__dirname + "/public/pages/time.html")    
})
// For heroku
app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(process.env.PORT);
  });

// app.listen(3000, 'localhost', () => {
//     console.log("Listening on port 3000");
// })