const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const studentRoutes = require("./students");

// Post routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/students", studentRoutes);

module.exports = router;
