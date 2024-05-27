// Définition

// XMLHttpRequest (c'est vieux et plus trop utilisé mais on peut le croiser dans du vieux code. D'ailleurs le vieux javascript est toujours reconnu et sera toujours valide)

function reqListener() {
  // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.json", true);
req.open("get", "data.txt", true);
req.send();

// tout ça permet de faire une requête

// Fetch  +++++

fetch("url", "options")
  .then((response) => {
    // response
  })
  .catch((err) => console.log(err));

// catch c'est si la requête n'est pas passé, tu m'attrapes le contenu de l'erreur

fetch("data.txt")
  .then((res) => res.text())
  .then((data) => console.log(data));

// souvent on l'appelle res pour response, ça donne le statut de la requête. Il y a un code de réponse http.

// Les réponses informatives (100 - 199),
// Les réponses de succès (200 - 299),
// Les messages de redirection (300 - 399),
// Les erreurs du client (400 - 499),
// Les erreurs du serveur (500 - 599).

// fetch("data.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//---------------
// Projet Blagues
//---------------

// L'interface Headers vous permet de créer vos propres objets d'en-têtes via le constructeur Headers

const myHeaders = new Headers();

const init = {
  method: "GET", // POST, PUT, DELETE  de base fetch est en GET
  headers: myHeaders,
  mode: "cors",
  // cors sert à gérer les autorisations
  cache: "default",
};
fetch("data.json", init).then((res) => res.json());
// .then((data) => console.log(data));

//CRUD => Create (POST), Read (GET), Update (PUT), Delete (DELETE)
// Les 4 méthodes les plus populaires ?

//--------------------------
// npm i -g json-server
// json-server --watch db.json

let init2 = {
  method: "POST", // POST, PUT, DELETE
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", (e) => {
  // e.preventDefault();
  fetch("http://localhost:3000/posts", init2);
  // on lui dit de fetch le endpoint ?
});

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
});
// autre façon de faire ?

//On peut aussi supprimer un id particulier (avec la première data envoyée = id1) en utilisant la method DELETE et en rajoutant l'id à la fin de l'url du fetch, par exemple si on voulait supprimer l'id 2 :  fetch("http://localhost:3000/posts/2", init2)

//-----------
// Asynchrone
//-----------

setTimeout(() => {
  // console.log("Test !");
}, 2000);

// Promise
fetch("monlien").then((res) => res);
// ça c'est une promesse, la fonction n'est éxécuté que lorsqu'il récupère les données

// async/await
async function fetchData() {
  await fetch("monlien");
  await maFonction();
  executeFonction();
  // sans le async et le await il execute direct la fonction quand il récupère la donnée. Ici il va attendre la fonction "maFonction" soit executée pour éxécuter la dernière fonction. On peut rajouter pleins de await
}
const fetchData2 = async () => {
  await fetch("monlien");
  await maFonction();
  executeFonction();
  // dans une fonction flechée il faut mettre le async après le =
};

//---------
// User Api
//---------

//--------------------------------
// JSON
// JSON = format de données

// méthode .json() Elle retourne une promesse qui s'auto-résout en renvoyant le corps de la requête parsée au format JSON.

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    let settings = JSON.stringify(data);
    // on transforme un objet en forme de caractère json, permet par exemple d'envoyer des objets en format json vers une base de donnée.
    console.log(JSON.parse(settings));
    // méthode parse => transforme Json en objet JS
  });

//---------------------------------
// Web API
//----------

//CLIENT STORAGE = cookies
//--------------

//Local Storage = par exemple quand préférences de sites en darkmode

localStorage.data = "Je stocke la data";
// ici on a écrit data après localStorage mais on pourrait écrire n'importe quel nom de stockage, il faut juste que ce soit cohérent avec ce que l'on veut stocker

// console.log(localStorage.data) => renvois "Je stocke la data"
document.body.textContent = localStorage.data;
// cete ligne permet de ressortir la donnée stockée dans le local storage dans le body, pour dire par exemple bonjour machin
localStorage.removeItem("data");
// permet d'effacer la donnée nommée data

// par contre on ne peux passer que des chaines de caractères, pas de tableaux ni d'objets
localStorage.user = JSON.stringify(obj);
// avec cette ligne en revanche on converti en JSON notre objet ! Il peut donc etre stocké
JSON.parse(localStorage.user);
// permet de lire sous forme d'objet, le JSON qu'on vient de stocker

//Session storage

// pareil que le local storage mais n'est stocké que durant la navigation de l'utilisateur et est vidé après

sessionStorage.dataSettings = "55px";
sessionStorage.clear();
// permet de vider le storage

//Cookies
document.cookie = "username=FromScratch";
// de base un cookie si on ne lui donne pas de date d'expiration il est vidé à la fin de la session

//Bonne pratique =
document.cookie = "pseudo=FS; path=/; max-age=450000; secure; samesite";
// ce sont des paramètres le path montre le chemin ou sauvegarder les données ?, le max age est la durée du cookie et les deux derniers paramètres sont là pour aider à la sécurisation des données
