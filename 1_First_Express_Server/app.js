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
  const beerToCreate = req.body;
  beerToCreate.id = beerIdCounter++;
  beers.push(beerToCreate);
  res.send({ data: beerToCreate });
});

// Read
app.get("/beers", (req, res) => {
  res.send({ data: beers });
});

app.get("/beers/:id", (req, res) => {
  const foundBeer = beers.find((beer) => beer.id === Number(req.params.id));
  foundBeer ? res.send({ data: foundBeer }) : res.status(204).send({});
});

// Update
app.patch("/beers/:id", (req, res) => {
  const foundBeerIndex = beers.findIndex(
    (beer) => beer.id === Number(req.params.id)
  );
  if (foundBeerIndex !== -1) {
  const foundBeer = beer[foundBeerIndex];
  const beerToUpdateWith = req.body;
  const updatedBeer = { ...foundBeer, ...beerToUpdateWith, id: foundBeer.id };
  beers[foundBeerIndex] = updatedBeer;
  res.send({ data: updatedBeer });
  } else {
    res.status(404).send({});
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
  const deleteId = beers.findIndex((beer) => beer.id === Number(req.params.id));
  beers.splice(deleteId, 1);
  console.log({ data: beers });
  res.send("The requested beer has been deleted");
});

console.log(beers);
app.listen(3000, () => {
  console.log("App is running and listening on port 3000");
});
