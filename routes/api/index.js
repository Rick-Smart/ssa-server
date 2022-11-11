const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const studentRoutes = require("./students");
const serviceRoutes = require("./services");
const messageRoutes = require("./messages");

// Post routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/students", studentRoutes);
router.use("/services", serviceRoutes);
router.use("/messages", messageRoutes);

module.exports = router;
