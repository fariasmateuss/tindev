const { Schema, model } = require('mongoose');

const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: {
      type: String,
      required: true,
    },
    likes: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Dev' }],
      select: false,
    },
    dislikes: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Dev' }],
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Dev', DevSchema);
