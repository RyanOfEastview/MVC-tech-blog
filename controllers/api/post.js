const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/authentication");

// get users
// post
router.get("/", (req, res) => {
  Post.findAll({})
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
