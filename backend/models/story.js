const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

const storySchema = new Schema(
  {
    storyAuthor: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", storySchema);
