import { Router } from "express";

const playersRouter = Router();
const players = [
    {id: 1, name: "John"},
    {id: 2, name: "myMan"},
    {id: 3, name: "ThisMan"}
]

playersRouter.get("/players", (req, res) => {
    res.send({data: players})
})

export default playersRouter;