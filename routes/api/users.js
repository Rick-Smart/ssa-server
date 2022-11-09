const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/").get(userController.findAll).post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .delete(userController.deleteOne);

// Matches with "/api/users/auth"
router.route("/auth").post(userController.userAuth);

module.exports = router;
