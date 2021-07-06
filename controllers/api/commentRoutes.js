const router = require('express').Router();
const { Comment} = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE a card
router.post('/', async (req, res) => {
  try {
    // Since the model will create a unique UUID value by default, we just need to provide the `id` of the Reader that will own this card
    const commentData = await Comment.create({
      text: req.body.text,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});