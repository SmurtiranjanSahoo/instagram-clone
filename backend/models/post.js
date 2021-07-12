const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

const postSchema = new Schema(
  {
    postAuthor: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    caption: {
      type: String,
      trim: true,
      maxlength: 200,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
