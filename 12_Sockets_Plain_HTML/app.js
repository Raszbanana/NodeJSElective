import express from "express";
import http from "http"
import path from "path";
import { Server } from "socket.io";

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
    // console.log("Client connecterino", socket.id);
    socket.on("a client changed the color", ({data}) => {
        // changes the other tabs
        // socket.broadcast.emit("please change the color", { data })

        // changes current tab
        // socket.emit("please change the color", { data })

        // changes all tabs
        io.emit("please change the color", {data})

    })

    socket.on("disconnect", () => { console.log("Farewell", socket.id)})
})

app.get('/colors', (req, res) => {
    res.sendFile(path.resolve("./public/colors.html"))
})

server.listen(3000)

