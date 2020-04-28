const { Schema, model } = require('mongoose');

const NotificationSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'Dev',
    },
    liked_user_id: {
      type: Schema.Types.ObjectId,
      ref: 'Dev',
    },
    objective: Number,
    view: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Notification', NotificationSchema);
