const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/").get(bookController.findAll).post(bookController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(bookController.deleteOne)
  .patch(bookController.checkOut);

// Matches with "/api/books/studentbooks"
router.route("/studentbooks").post(bookController.findManyByID);

module.exports = router;
