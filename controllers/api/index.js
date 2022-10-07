// boilerplate code
const router = require("express").Router();
const commentRoute = require("./comment");
const postRoute = require("./post");
const userRoute = require("./user");

router.use("/comment", comment);
router.use("/post", post);
router.use("/users", users);

module.exports = router;