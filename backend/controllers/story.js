const Story = require("../models/story");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getStoryById = (req, res, next, id) => {
  Story.findById(id)
    .populate("storyAuthor")
    .exec((err, story) => {
      if (err) {
        return res.status(400).json({
          error: "Story not found",
        });
      }
      req.story = story;
      next();
    });
};

exports.createStory = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }

    let story = new Story(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!",
        });
      }
      story.photo.data = fs.readFileSync(file.photo.path);
      story.photo.contentType = file.photo.type;
    }

    //save to the DB
    story.save((err, story) => {
      if (err) {
        res.status(400).json({
          error: "Saving story in DB failed",
        });
      }
      res.json(story);
    });
  });
};

exports.getStory = (req, res) => {
  req.story.photo = undefined;
  return res.json(req.story);
};

exports.deleteStory = (req, res) => {
  let story = req.story;
  story.remove((err, deletedStory) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete the story",
      });
    }
    res.json({
      message: "Deletion was a success",
      deletedStory,
    });
  });
};

exports.getAllStories = (req, res) => {
  Story.find()
    .select("-photo")
    .populate("storyAuthor")
    .exec((err, stories) => {
      if (err) {
        return res.status(400).json({
          error: "No stories found",
        });
      }
      res.json(stories);
    });
};

// middleware
exports.photo = (req, res, next) => {
  if (req.story.photo.data) {
    res.set("Content-Type", req.story.photo.contentType);
    return res.send(req.story.photo.data);
  }
  next();
};
