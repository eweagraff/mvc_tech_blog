const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//Create Comment
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      text: req.body.text,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});
