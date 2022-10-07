const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// get users
router.get("/", (req, res) => {
console.log('');
Post.findAll({
    where: { id: req.params.id},
    attributes: [
    'id',
    'title',
    'created_at',
    'post_content'],
})