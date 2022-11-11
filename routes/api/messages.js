const router = require("express").Router();
const messageController = require("../../controllers/messageController");

const auth = require("../../middleware/auth");

router.use(auth);

// Matches with "/api/messages"
router.route("/").post(messageController.create);

// Matches with "/api/messages/:id"
router.route("/:id").delete(messageController.deleteOne);

// Matches with "/api/messages/usermessages"
router.route("/usermessages").get(messageController.findAll);

module.exports = router;
