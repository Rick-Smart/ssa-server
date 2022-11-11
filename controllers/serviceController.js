const db = require("../models");

// Defining methods for the Service Controller
module.exports = {
  findAll: (req, res) => {
    db.Service.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Service.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  deleteOne: (req, res) => {
    db.Service.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.deleteOne())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
