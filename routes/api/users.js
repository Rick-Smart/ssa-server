const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/").get(userController.findAll).post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .delete(userController.deleteOne);

module.exports = router;
