const express = require("Express");
const app = express();

let httpServer = require("http").Server(app);
// let io = require("socket.io")(server);

let { Server } = require("socket.io");
const io = new Server(httpServer);

let names = ["ADA", "BETA", "CELT", "DELI"];
let messages = [];

app.use(express.static("./"));

app.get("./", function (req, res) {
  res.redirect("index.html");
});

httpServer.listen(3000, function () {
  console.log("Server hört auf port 3000");
});

io.on("connection", function (socket) {
  console.log("ws connection established", io.engine.clientsCount);

  if (io.engine.clientsCount) {
    socket.name = names[0];
    names.shift();
    socket.emit("display message", socket.name);
  }

  io.sockets.sockets.forEach((client) => {
    if (client === socket) {
      console.log("new Client", client.connected, client.id);
      for (let i in messages) {
        socket.emit("display message", messages[i]);
      }
    }
    // else {
    //   console.log("other client", client.id);
    // }
  });

  //   for (let i in messages) {
  //     io.sockets.emit("display message", messages[i]);
  //   }

  socket.on("send message", function (data) {
    messages.push(data);
    io.emit("display message", data); // sends data to all connected clients
  });

  socket.on("disconnect", (reason) => {
    console.log(socket.name, "disconnecting because ", reason);
    names.unshift(socket.name);
  });
});
