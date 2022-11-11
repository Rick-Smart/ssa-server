const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  services: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Services",
  },
  services: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Messages",
  },
  created: { type: Date, default: new Date(Date.now()) },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
