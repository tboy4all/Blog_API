const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },

  { timestamps: true }
)

module.exports = mongoose.model('Post', PostSchema)
