const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  email: { type: String, required: true },
  books: [],
  created: { type: Date, default: new Date(Date.now()) },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
