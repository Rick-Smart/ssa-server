const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api"
router.route("/").get(bookController.findAll).post(bookController.create);

// Matches with "/api/books"
router
  .route("/:id")
  .delete(bookController.deleteOne)
  .patch(bookController.checkOut);
module.exports = router;
