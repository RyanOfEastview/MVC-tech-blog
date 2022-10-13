// boilerplate code
const router = require("express").Router();
const commentRoute = require("./comment");
const postRoute = require("./post");
const userRoute = require("./user");

router.use("/comment", commentRoute);
router.use("/post", postRoute);
router.use("/users", userRoute);

module.exports = router;
