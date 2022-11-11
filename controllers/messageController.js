const db = require("../models");

// Defining methods for the messageController
module.exports = {
  findAll: function (req, res) {
    db.Message.find(req.query)
      .sort({ date: -1 })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Message.findById(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findManyByID: function (req, res) {
    db.Message.find({ _id: { $in: req.body } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Message.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  deleteOne: function (req, res) {
    db.Message.findById({ _id: req.params.id })
      .then((data) => data.deleteOne())
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
