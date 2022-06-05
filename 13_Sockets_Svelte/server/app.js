import express from 'express';
import http from 'http';
import path from 'path';
import "dotenv/config";
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static(path.resolve("../client/public/")));
app.use(express.urlencoded({extended: true}));

import session from 'express-session';
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })

app.use(sessionMiddleware)
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next)
io.use(wrap(sessionMiddleware))

io.on("connection", (socket) => {

  socket.on("colorChanged", (data) => {
    const username = socket.request.session.username;
    io.emit("changeColor", {data, username})
  })
})

import userRouter from './routers/userRegistration.js'
app.use(userRouter)


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})