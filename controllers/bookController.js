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
  create: function (req, res) {
    db.Book.create(req.body)
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
    db.Book.updateOne({ _id: req.params.id }, { checkedOut: req.body.checkOut })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
