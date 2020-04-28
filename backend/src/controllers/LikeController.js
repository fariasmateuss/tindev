const Dev = require('../models/Dev');
const Notification = require('../models/Notification');

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    //0 for like and 1 for match
    let objective = 0;

    let viewLoggedNotify = false;
    let viewTargetNotify = false;

    const targetSocket = req.connectedUsers[devId];

    const loggedDev = await Dev.findById(user).select('+likes');
    const targetDev = await Dev.findById(devId).select('+likes');

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      const loggedSocket = req.connectedUsers[user];
      objective = 1;

      if (loggedSocket) {
        req.io.to(loggedSocket).emit('match', targetDev);
        viewLoggedNotify = true;
      }

      if (targetSocket) {
        req.io.to(targetSocket).emit('match', loggedDev);
        viewTargetNotify = true;
      }
    }

    await Notification.create({
      user_id: targetDev,
      liked_user_id: loggedDev,
      objective,
      view: viewTargetNotify,
    });

    if (objective === 1) {
      await Notification.create({
        user_id: loggedDev,
        liked_user_id: targetDev,
        objective,
        view: viewLoggedNotify,
      });
    }

    if (targetSocket && objective === 0) {
      req.io.to(targetSocket).emit('notification');
    }

    loggedDev.likes.push(targetDev._id);
    await loggedDev.save();

    return res.send();
  },
};
