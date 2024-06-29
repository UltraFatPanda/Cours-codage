Le front est installé avec  npm install  , et lancé avec  npm run start
    Les projets Node sont initialisés avec la commande  npm init 


Créez un fichier server.js à l'intérieur de votre dossier backend . Il contiendra votre premier serveur Node.
    Un serveur Node basique est démarré avec la méthode  createServer  du package  http  .

npm install -g nodemon
    nodemon server
        Nodemon est un package qui mettra à jour votre serveur démarré à chaque changement de fichier, vous facilitant le développement Node.



npm install express

    Le framework Express est installé et enregistré dans le  package.json  avec   npm install express  .

    Pour créer une application Express, appelez simplement la méthode  express()  .

    Un middleware est un bloc de code qui traite les requêtes et réponses de votre application.

    Ajouter la normalisation de port, la gestion d'erreur et du logging basique à votre serveur Node le rend plus constant et plus facile à déboguer.


La méthode app.use() vous permet d'attribuer un middleware à une route spécifique de votre application.

    Le CORS définit comment les serveurs et les navigateurs interagissent, en spécifiant quelles ressources peuvent être demandées de manière légitime – par défaut, les requêtes AJAX sont interdites.

    Pour permettre des requêtes cross-origin (et empêcher des erreurs CORS), des headers spécifiques de contrôle d'accès doivent être précisés pour tous vos objets de réponse.