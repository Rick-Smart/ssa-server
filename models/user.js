const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hash: { type: String, required: true },
  books: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Book",
  },
  created: { type: Date, default: new Date(Date.now()) },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
