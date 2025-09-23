const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const path = require("path");


const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

const cors = require('cors');
app.use(cors());


io.on('connection', function (socket) {
    console.log("connected");
    socket.on("send-location", function (data) {
        io.emit("recive-location", {
            id: socket.id,
            ...data,
        });
    });
    socket.on("disconnect", function () {
        io.emit("user-disconnected", socket.id);
    })
});



app.get("/", function (req, res) {
    res.render("index");
});
const PORT = process.env.PORT || 3000; server.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });