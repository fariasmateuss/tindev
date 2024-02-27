require('dotenv').config({
  path: ['.env.local', '.env'],
  debug: process.env.DEBUG,
});

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

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    dbName: 'tindev',
  })
  .then(() =>
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    ),
  )
  .catch(console.dir);

app.use((req, _res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
