const express = require("express");
const app = express();
app.use(express.json());

// Beer counter to handle id incrementation of posting. Initialized at current size of array+1
let beerIdCounter = 3;

// Array to hold beers
const beers = [
  { id: 1, name: "Carlsberg", origin: "Denmark" },
  { id: 2, name: "Tuborg", origin: "Denmark" },
];

// Create
app.post("/beers", (req, res) => {
  let newBeer = req.body;
  let assignedId = beerIdCounter;
  newBeer.id = assignedId;
  beerIdCounter++;
  beers.push(newBeer);
  res.send(req.body);
  console.log(beers);
});

// Read
app.get("/beers", (req, res) => {
  res.send(beers);
});

app.get("/beers/:id", (req, res) => {
  let isFound = false;
  for (let beer of beers) {
    if (beer.id == req.params.id) {
      isFound = true;
      res.send(beer);
    }
  }
  if (!isFound) {
    res.send("Beer is not on our stocks");
  }
});

// Update
app.patch("/beers/:id", (req, res) => {
  let isFound = false;
  for (let beer of beers) {
    if (beer.id == req.params.id) {
      isFound = true;
      beer.name = req.body.name;
      res.send("The beer has been patched");
    }
  }
  if (!isFound) {
    res.send("Beer is not on our stocks");
  }
});

app.put("/beers/:id", (req, res) => {
  let isFound = false;
  for (let beer of beers) {
    if (beer.id == req.params.id) {
      isFound = true;
      beer.name = req.body.name;
      res.send("The beer has been edited");
    }
  }
  if (!isFound) {
    res.send("Beer is not on our stocks");
  }
});

// Delete
app.delete("/beers/:id", (req, res) => {
  let isFound = false;
  for (let beer of beers) {
    if (beer.id == req.params.id) {
      isFound = true;
      beers.splice(beer.id, 1);
      console.log(beers);
      res.send(
        "The requested beer has been deleted, the new list looks like this " +
          beers
      );
    }
  }
  if (!isFound) {
    res.send("Beer is not on our stocks");
  }
});

console.log(beers);
app.listen(3000, () => {
  console.log("App is running and listening on port 3000");
});
