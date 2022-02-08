const express = require("express")
const app = express();
app.use(express.json());

const beers =[
    {id: 1, name: "Carlsberg"},
    {id: 2, name: "Tuborg"},
]

app.post("/beers", (req,res)=>{
    let newBeer = req.body;
    console.log(beers.length)
    let assignId = beers.length+1
    newBeer.id = assignId;
    beers.push(newBeer);
    res.send(req.body);
    console.log(beers)
    
})

app.get("/beers",(req,res)=>{
    res.send(beers);
})  

app.get("/beers/:id",(req,res)=>{
    let isFound = false;
    for (let beer of beers) {
        if (beer.id == req.params.id) {
            isFound = true;
            console.log(isFound)
            res.send(beer)
        }
    }
    if (!isFound) {
        res.send("Beer is not on our stocks")
    }
})

app.delete("/beers/:id",(req,res)=>{
    let isFound = false;
    for (let beer of beers) {
        if (beer.id == req.params.id) {
            isFound = true;
            beers.splice(beer.id, 1)
            console.log(beers)
            res.send("The requested beer has been deleted, the new list looks like this " + beers)
        }
    }
    if (!isFound) {
        res.send("Beer is not on our stocks")
    }
})


console.log(beers);
app.listen(3000, () => {
    console.log("App is running and listening on port 3000")
})