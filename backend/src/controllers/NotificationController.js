const Notification = require('../models/Notification');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;
    const notifications = await Notification.find({ user_id: user })
      .populate('liked_user_id')
      .sort('-createdAt');
    return res.json({ notifications });
  },

  async update(req, res) {
    const { user } = req.headers;
    await Notification.updateMany(
      { user_id: user, view: false },
      { $set: { view: true } }
    );
    return res.send();
  },
};
