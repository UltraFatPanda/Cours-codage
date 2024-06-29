// const express = require("express");

// const app = express();

// app.use((req, res, next) => {
//   console.log("Requête reçue !");
//   next();
// });

// app.use((req, res, next) => {
//   res.status(201);
//   next();
// });

// app.use((req, res, next) => {
//   res.json({ message: "Votre requête a bien été reçue !" });
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Réponse envoyée avec succès !");
// });

// module.exports = app;
// Cette application Express contient quatre éléments de middleware :

// le premier enregistre « Requête reçue ! » dans la console et passe l'exécution ;

// le deuxième ajoute un code d'état 201 à la réponse et passe l'exécution ;

// le troisième envoie la réponse JSON et passe l'exécution ;

// le dernier élément de middleware enregistre « Réponse envoyée avec succès ! » dans la console.

app.use("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "Mon premier objet",
      description: "Les infos de mon premier objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 4900,
      userId: "qsomihvqios",
    },
    {
      _id: "oeihfzeomoihi",
      title: "Mon deuxième objet",
      description: "Les infos de mon deuxième objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 2900,
      userId: "qsomihvqios",
    },
  ];
  res.status(200).json(stuff);
});
