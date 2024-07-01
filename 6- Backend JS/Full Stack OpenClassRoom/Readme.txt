Le front est installé avec  npm install  , et lancé avec  npm run start
    Les projets Node sont initialisés avec la commande  npm init 



Créez un fichier server.js à l'intérieur de votre dossier backend . Il contiendra votre premier serveur Node.
    Un serveur Node basique est démarré avec la méthode  createServer  du package  http  .



npm install -g nodemon

    nodemon server +++

        Nodemon est un package qui mettra à jour votre serveur démarré à chaque changement de fichier, vous facilitant le développement Node.



npm install express

    Le framework Express est installé et enregistré dans le  package.json  avec   npm install express  .

    Pour créer une application Express, appelez simplement la méthode  express()  .

    Un middleware est un bloc de code qui traite les requêtes et réponses de votre application.

    Ajouter la normalisation de port, la gestion d'erreur et du logging basique à votre serveur Node le rend plus constant et plus facile à déboguer.


La méthode app.use() vous permet d'attribuer un middleware à une route spécifique de votre application.

    Le CORS définit comment les serveurs et les navigateurs interagissent, en spécifiant quelles ressources peuvent être demandées de manière légitime – par défaut, les requêtes AJAX sont interdites.

    Pour permettre des requêtes cross-origin (et empêcher des erreurs CORS), des headers spécifiques de contrôle d'accès doivent être précisés pour tous vos objets de réponse.


npm install mongoose

    Pour des applications qui ont besoin d'évoluer rapidement, les bases de données NoSQL comme MongoDB sont souvent un bon choix de technologie.

    MongoDB Atlas permet d'héberger gratuitement une base de données MongoDB.

    Le package Mongoose facilite les interactions entre votre application Express et votre base de données MongoDB.

    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://jimbob:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



La méthode  Schema  de Mongoose vous permet de créer un schéma de données pour votre base de données MongoDB.

    La méthode  model  transforme ce modèle en un modèle utilisable.



Les méthodes de votre modèle Thing permettent d'interagir avec la base de données :

    save()  – enregistre un Thing ;

    find()  – retourne tous les Things ;

    findOne()  – retourne un seul Thing basé sur la fonction de comparaison qu'on lui passe (souvent pour récupérer un Thing par son identifiant unique).

    La méthode  app.get()  permet de réagir uniquement aux requêtes de type GET.



app.put()  et  app.delete()  attribuent des middlewares aux requêtes de type PUT et de type DELETE.

    Les méthodes  updateOne()  et  deleteOne()  de votre modèle Thing permettent de mettre à jour ou de supprimer un Thing dans la base de données.



La méthodeexpress.Router()  vous permet de créer des routeurs séparés pour chaque route principale de votre application – vous y enregistrez ensuite les routes individuelles.

    Un fichier de contrôleur exporte des méthodes qui sont ensuite attribuées aux routes pour améliorer la maintenabilité de votre application.


bcrypt  est un package proposant une fonction de hachage que vous pouvez installer avec  npm  .

    mongoose-unique-validator  améliore les messages d'erreur lors de l'enregistrement de données uniques.


npm install bcrypt

    nous appelons la fonction de hachage de bcrypt dans notre mot de passe et lui demandons de « saler » le mot de passe 10 fois. Plus la valeur est élevée, plus l'exécution de la fonction sera longue, et plus le hachage sera sécurisé. Pour plus d'informations, consultez la documentation de bcrypt ;

     s'agit d'une fonction asynchrone qui renvoie une Promise dans laquelle nous recevons le hash généré ;

    dans notre bloc then , nous créons un utilisateur et l'enregistrons dans la base de données, en renvoyant une réponse de réussite en cas de succès, et des erreurs avec le code d'erreur en cas d'échec. 