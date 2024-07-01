const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    // fonction pour crypter le mdp, 10 corresponds au nombre de tour ce qui permet d'avoir un mdp plutot sécure, plus le nbre de tour est élevé plus c'est long => on est toujours en asynchrone après
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {};
