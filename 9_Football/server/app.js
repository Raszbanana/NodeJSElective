import express from 'express';
import playersRouter from "./routers/playersRouter.js"
import path from "path";

// import cors from "cors";
// app.use(cors());

const app = express();
app.use(express.static(path.resolve("../client/public")));

app.use(playersRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => {
    console.log("listening on " + PORT)
})