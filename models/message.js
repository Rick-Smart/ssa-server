const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String, required: true },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
