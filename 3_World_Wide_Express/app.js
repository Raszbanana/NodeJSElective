const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")  
})

app.get("/time", (req, res) => {
    res.sendFile(__dirname + "/public/pages/time.html")    
})

// For deploying on heroku
// app.listen(process.env.PORT, '0.0.0.0', () => {
//     console.log(process.env.PORT);
//   });

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, 'localhost', () => {
    console.log("Listening on port", PORT);
})

console.log(process.env.PORT);