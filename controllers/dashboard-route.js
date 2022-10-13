// User, Post, Comment - variables and routes
const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/authentication");

// copied from home-routes needs authentication, edit, and create
router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: { user_id: req.session.user_id },
    attributes: ["id", "title", "created_at", "post_content"],
    include: [
      {
        model: Comment,
        attributes: [
          ["id", "post_id", "user_id", "created_at", "post_content"],
        ],
        inlcude: {
          model: User,
          attributes: ["username"],
          // would like to add a socialmedia attribute as a future feature.
        },
      },
    ],
  })
    .then((dbPostData) => {
      const post = dbPostData.map((post) => post.get({ plain: true }));
      res.render("Dashboard", {
        post,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// edit
router.get("/edit", withAuth, (req, res) => {
  Post.find({
    where: { user_id: req.session.user_id },
    attributes: ["id", "title", "created_at", "post_content"],
    include: [
      {
        model: Comment,
        attributes: [
          ["id", "post_id", "user_id", "created_at", "post_content"],
        ],
        inlcude: {
          model: User,
          attributes: ["username"],
          // would like to add a socialmedia attribute as a future feature.
        },
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json("Not Found");
        return;
      }

      // serialize data to be stored
      const post = dbPostData.get({ plain: true });
      res.render("Dashboard", {
        posts,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create
router.get("/create", withAuth, (req, res) => {
  Post.findAll({
    where: { user_id: req.session.user_id },
    attributes: ["id", "title", "created_at", "post_content"],
    include: [
      {
        model: Comment,
        attributes: [
          ["id", "post_id", "user_id", "created_at", "post_content"],
        ],
        inlcude: {
          model: User,
          attributes: ["username"],
          // would like to add a socialmedia attribute as a future feature.
        },
      },
    ],
  })

    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json("Not Found");
        return;
      }

      // serialize data to be stored
      const post = dbPostData.get({ plain: true });
      //
      res.render("Dashboard", {
        posts,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
