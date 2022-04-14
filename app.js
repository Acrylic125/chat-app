const path = require("path");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.join(__dirname, "/public")));

io.on("connection", (socket) => {
  socket.on("join-chat", () => {
    socket.join("global-chat");
    console.log(`Joined Chat : Active Sockets : ${io.sockets.sockets.size}`);
  });
  socket.on("send-message", ({ username, message }) => {
    console.log("Sending message...");
    io.to("global-chat").emit("receive-message", { username, message });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
