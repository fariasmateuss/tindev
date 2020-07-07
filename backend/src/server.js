const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});

const routes = require('./routes');

mongoose.connect(
  'mongodb+srv://Mateus:Mateus@cluster0-4roep.mongodb.net/tindev?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
);

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
