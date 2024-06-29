const http = require("http");
const app = require("./app");

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

server.listen(port);

// Ici, vous importez le package HTTP natif de Node et l'utilisez pour créer un serveur, en passant une fonction qui sera exécutée à chaque appel effectué vers ce serveur. Cette fonction reçoit les objets request et response en tant qu'arguments. Dans cet exemple, vous utilisez la méthode end de la réponse pour renvoyer une réponse de type string à l'appelant.

// Node utilise le système de module CommonJS, donc pour importer le contenu d'un module JavaScript, on utilise le mot-clé require plutôt que le mot-clé import . Ce système est particulièrement utile car il nous permet d'importer les modules de base de Node très facilement (comme le module  http ici) sans spécifier le chemin exact du fichier. Node sait qu'il doit importer un module de base quand on ne spécifie pas un chemin relatif (qui commence par  ./  ou  /  , par exemple).

// Vous verrez dans le prochain chapitre que nous utilisons aussi le mot-clé require pour importer nos propres fichiers en utilisant leur chemin relatif, comme "./app.js" ou même "./app"  , tout simplement – require  nous permet d'omettre l'extension  .js .

// Dans la dernière ligne, vous configurez le serveur pour qu'il écoute :

// soit la variable d'environnement du port grâce à process.env.PORT : si la plateforme de déploiement propose un port par défaut, c'est celui-ci qu'on écoutera ;

// soit le port 3000, ce qui nous servira dans le cas de notre plateforme de développement.

// Démarrez le serveur en exécutant node server à partir de la ligne de commande. Pour vérifier qu'il envoie la réponse correcte, utilisez une fenêtre de navigateur pour accéder à http://localhost:3000 (en supposant que vous ayez bien suivi les étapes ci-dessus).

// Vous pouvez également utiliser un outil de test tel que Postman pour effectuer une requête GET (ou tout autre type de requête d'ailleurs, car notre serveur ne fait actuellement aucune distinction !) vers la même URL : http://localhost:3000 (à nouveau, en supposant que vous ayez bien suivi les étapes ci-dessus).

// la fonction normalizePort renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne ;

// la fonction errorHandler  recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur ;

// un écouteur d'évènements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.

// Notre serveur de développement Node est à présent opérationnel. Vous pouvez ainsi ajouter les fonctionnalités appropriées à l'application Express.
