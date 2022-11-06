const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findManyByID: function (req, res) {
    console.log(req.body);
    db.Book.find({ _id: { $in: req.body } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Book.find({ title: req.body.title })
      .then((data) => {
        if (data.length > 0) {
          return console.log("You already own this book");
        } else {
          return db.Book.create(req.body);
        }
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  deleteOne: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((data) => data.deleteOne())
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  checkOut: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((data) => {
        if (data.checkedOut) {
          return db.Book.updateOne(
            { _id: req.params.id },
            { $set: { checkedOut: false } }
          );
        } else {
          return db.Book.updateOne(
            { _id: req.params.id },
            { $set: { checkedOut: true } }
          );
        }
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
