const express = require('express');
const routes = express.Router();

const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const NotificationController = require('./controllers/NotificationController');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

//Like and deslike
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

//notifications
routes.get('/notifications', NotificationController.index);
routes.put('/notifications', NotificationController.update);

module.exports = routes;
