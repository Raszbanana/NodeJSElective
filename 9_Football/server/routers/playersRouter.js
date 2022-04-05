import { Router } from "express";
import db from "../database/createConnection.js"

const playersRouter = Router();

playersRouter.get("/api/players", async (req, res) => {
    const players = await db.all("SELECT * FROM players;");

    res.send({data: players})
})

playersRouter.post("/api/players", async (req, res) => {
    const { name } = req.body;
    const { changes } = await db.run(`INSERT INTO players (name) VALUES ('?');`, [name]);

    res.send({rowsAffected: changes})
})

export default playersRouter;