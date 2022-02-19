const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  email: { type: String, required: true },
  books: [{ type: Object }],
  created: { type: Date, default: new Date(Date.now()) },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
