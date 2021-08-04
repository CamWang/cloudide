const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('dist'));

app.post('/submit', function(req, res){
  let uid = req.body.uid;
  res.json({ status: "success", type:"message", message: "submitted" });
  setTimeout(function() {
    let obj = {
      success: true,
      title: "Compile Success",
    }
    io.to(uid).emit("judge compile", JSON.stringify(obj));
  }, 5000);
});

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`);
  io.on('disconnect', () => {
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(port, () => {
  console.log(`Cloud IDE listening at http://localhost:${port}`)
})