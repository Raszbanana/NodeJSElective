import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import session from "express-session";
import planetRouter from "./routers/planets.js"

const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


const app = express();
app.use(session({
    secret: 'keyboard cat should not be pushed',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

app.use(planetRouter);
app.use(helmet());

app.use("/auth", authLimiter);

app.use(express.static("public"))

// app.get("/clothes", (req, res) => {
    //     res.sendFile(__dirname + "/public/clothes.html")
    // })
    
    
app.post("/auth/login", (req, res) => {
        res.send({message: "You are trying to log in..."})
})

function ipLogger(req, res, next){
    console.log(req.ip)
    next();
}

app.get("/frontgate", (req, res) => {
    res.send({});
})

let isHatchOpen = false;
function allowEscape(req, res, next) {
    if (isHatchOpen) {
    console.log("go on");
    req.escapee = "Jimmy LongBalls"
    next();
    } else {
        res.send({ message: "You got caught by gigaChad, succumb to your demons mortal"})
    }
}

app.get("/escapedoor", allowEscape, (req, res) => {
    res.send({ message: `Congrats ${req.escapee}, you have escaped gigaChad`})
})

app.get("/room", (req, res, next) => {
    console.log("You are in room 1")
    next();
})


app.get("/room", (req, res) => {
    res.send({data: "You are in room 2"})
})

app.get("*", (req, res) => {
    res.send("<h1>Wrong room homeboy</h1>")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})