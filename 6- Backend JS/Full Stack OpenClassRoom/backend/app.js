const express = require("express");
const mongoose = require("mongoose");

const app = express();

const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");

mongoose
  .connect(
    "mongodb+srv://UltraFatPanda:UltraFatPanda0545699631@cluster0.p5gblyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

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

module.exports = app;
// Cette application Express contient quatre éléments de middleware :

// le premier enregistre « Requête reçue ! » dans la console et passe l'exécution ;

// le deuxième ajoute un code d'état 201 à la réponse et passe l'exécution ;

// le troisième envoie la réponse JSON et passe l'exécution ;

// le dernier élément de middleware enregistre « Réponse envoyée avec succès ! » dans la console.
