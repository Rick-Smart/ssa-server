const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");

// Matches with "/api/services"
router.route("/").get(serviceController.findAll);

// Matches with "/api/services/:id"
router
  .route("/:id")
  .get(serviceController.findById)
  .delete(serviceController.deleteOne);

module.exports = router;
