const db = require("../models");
const auth = require("../utils/hash");

// Defining methods for the User Controller
module.exports = {
  findAll: (req, res) => {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: async (req, res) => {
    const hashedUser = await auth.hashPassword(req.body);
    db.User.create(hashedUser)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  deleteOne: (req, res) => {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.deleteOne())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  userAuth: (req, res) => {
    const request = req.body;
    db.User.findOne({ email: request.email })
      .then(async (dbData) => {
        const authenticatedUser = await auth.authUser(dbData, request);
        if (authenticatedUser) {
          return authenticatedUser;
        } else return res.status(300).json(err);
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
