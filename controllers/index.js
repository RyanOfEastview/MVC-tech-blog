// boilerplate code
const router = require("express").Router();
const userRoutes = require("./api");
const userRoutes = require("./home-route");
const userRoutes = require("./dashboard-route");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

// added error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;