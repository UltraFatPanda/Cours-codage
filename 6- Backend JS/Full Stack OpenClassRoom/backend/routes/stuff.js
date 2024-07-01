const express = require("express");

const router = express.Router();

const stuffCtrl = require("../controllers/stuff");

// const Thing = require("../models/thing");

// router.post("/", (req, res, next) => {
//   delete req.body._id;
//   const thing = new Thing({
//     ...req.body,
//   });
//   thing
//     .save()
//     .then(() => res.status(201).json({ message: "Objet enregistré !" }))
//     .catch((error) => res.status(400).json({ error }));
// });

// Ce modèle comporte une méthode save() qui enregistre simplement votre Thing dans la base de données.
// La méthode save() renvoie une Promise. Ainsi, dans notre bloc then() , nous renverrons une réponse de réussite avec un code 201 de réussite. Dans notre bloc catch() , nous renverrons une réponse avec l'erreur générée par Mongoose ainsi qu'un code d'erreur 400

// router.get("/:id", (req, res, next) => {
//   Thing.findOne({ _id: req.params.id })
//     .then((thing) => res.status(200).json(thing))
//     .catch((error) => res.status(404).json({ error }));
// });

// nous utilisons la méthode get() pour répondre uniquement aux demandes GET à cet endpoint ;

// nous utilisons deux-points : en face du segment dynamique de la route pour la rendre accessible en tant que paramètre ;

// nous utilisons ensuite la méthode findOne() dans notre modèle Thing pour trouver le Thing unique ayant le même _id que le paramètre de la requête ;

// ce Thing est ensuite retourné dans une Promise et envoyé au front-end ;

// si aucun Thing n'est trouvé ou si une erreur se produit, nous envoyons une erreur 404 au front-end, avec l'erreur générée.

// router.put("/:id", (req, res, next) => {
//   Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//     .then(() => res.status(200).json({ message: "Objet modifié !" }))
//     .catch((error) => res.status(400).json({ error }));
// });

// Ci-dessus, nous exploitons la méthode updateOne() dans notre modèle Thing . Cela nous permet de mettre à jour le Thing qui correspond à l'objet que nous passons comme premier argument. Nous utilisons aussi le paramètre id passé dans la demande, et le remplaçons par le Thing passé comme second argument.

// L'utilisation du mot-clé new avec un modèle Mongoose crée par défaut un champ_id . Utiliser ce mot-clé générerait une erreur, car nous tenterions de modifier un champ immuable dans un document de la base de données. Par conséquent, nous devons utiliser le paramètre id de la requête pour configurer notre Thing avec le même _id qu'avant.

// router.delete("/:id", (req, res, next) => {
//   Thing.deleteOne({ _id: req.params.id })
//     .then(() => res.status(200).json({ message: "Objet supprimé !" }))
//     .catch((error) => res.status(400).json({ error }));
// });

// La méthode deleteOne() de notre modèle fonctionne comme findOne() et updateOne() dans le sens où nous lui passons un objet correspondant au document à supprimer. Nous envoyons ensuite une réponse de réussite ou d'échec au front-end.

// router.get("/", (req, res, next) => {
//   Thing.find()
//     .then((things) => res.status(200).json(things))
//     .catch((error) => res.status(400).json({ error }));
// });

// Dans l'exemple ci-dessus, nous utilisons la méthode find() dans notre modèle Mongoose afin de renvoyer un tableau contenant tous les Things dans notre base de données. À présent, si vous ajoutez un Thing , il doit s'afficher immédiatement sur votre page d'articles en vente.

// En revanche, si vous cliquez sur l'un des Things , l'affichage d'un seul élément ne fonctionne pas. En effet, il tente d'effectuer un appel GET différent pour trouver un Thing individuel. Implémentons cette route maintenant.

router.get("/", stuffCtrl.getAllStuff);
router.post("/", stuffCtrl.createThing);
router.get("/:id", stuffCtrl.getOneThing);
router.put("/:id", stuffCtrl.modifyThing);
router.delete("/:id", stuffCtrl.deleteThing);

module.exports = router;

module.exports = router;
