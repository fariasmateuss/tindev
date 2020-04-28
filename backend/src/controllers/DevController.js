const axios = require('axios');
const Dev = require('../models/Dev');
const Notification = require('../models/Notification');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;
    let notification = false;

    const loggedDev = await Dev.findById(user)
      .select('likes')
      .select('dislikes');

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } },
      ],
    });

    const haveNotification = await Notification.find({
      user_id: user,
      view: false,
    });

    if (haveNotification.length > 0) {
      notification = true;
    }
    return res.json({ users, notification });
  },

  async store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username });

    if (userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(
      `https://api.github.com/users/${username.toLowerCase()}`
    );

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    return res.json(dev);
  },
};
