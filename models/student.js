const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  class: { type: Number, required: true },
  email: { type: String, required: true },
  books: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Book",
  },
  created: { type: Date, default: () => Date.now() },
  updated: { type: Date, default: () => Date.now() },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
