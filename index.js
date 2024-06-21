import cookieParser from "cookie-parser"
import { Server } from "socket.io";
import express from "express";
import {createServer} from "http"

const app = express();
const httpServer = createServer(app)
const io = new Server(httpServer, {
    pingTimeout: 60000,
    cors: {
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    }
})

io.on("connection", (socket) => {
    // io connection here
});

import chatRouter from "./routes/apps/chat-app/chat.routes.js";
import messageRouter from "./routes/apps/chat-app/message.routes.js";


app.use("/api/v1/chat-app/chats", chatRouter);
app.use("/api/v1/chat-app/messages", messageRouter);

httpServer.listen(3000);