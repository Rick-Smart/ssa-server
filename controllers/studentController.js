const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function (req, res) {
    db.Student.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Student.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Student.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  deleteOne: function (req, res) {
    db.Student.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.deleteOne())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //   this is find a student by id then add books to their book field
  updateBooks: function (req, res) {
    db.Student.updateOne(
      { id: req.params.id },
      { $push: { books: req.body.books } }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  addBooks: function (req, res) {
    db.Student.updateOne(
      { id: req.params.id },
      { $set: { books: req.body.books } }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeBooks: function (req, res) {
    db.Student.updateOne({ id: req.params.id }, { $unset: { books: [] } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  checkOut: function (req, res) {
    console.log(req.body);
    db.Student.updateOne(
      { _id: req.params.id },
      { $push: { books: req.body.book } }
    )
      .then((data) => {
        console.log(data);
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
