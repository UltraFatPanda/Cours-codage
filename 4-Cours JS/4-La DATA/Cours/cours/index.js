// Rappel des types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined, parce qu'on ne l'a pas défini

// console.log(typeof boolean)  => va dire que c'est boléen, permet de check la nature de la donnée

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);
// on peut se balader dans le array, en tapant [0] on a Bordeaux puis en tapant [3] on a la lettre d de bordeaux !
// on l'appelle array car c'est le nom habiutel d'un tableau mais on aurait pu l'appeller comme on veut

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// ce truc là c'est toujours un tableau. le dernier élément est un objet, un objet se présente toujours avec des accolades
// console.log(array2[4].nom); cette commande permet d'afficher juste le nom de la fonction, ici Denis

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// objet.adresse = "22 rue du code";  cette ligne permet de rajouter un élément à l'objet !
// console.log(objet.age);  => affiche 33
// on pourrait aussi remplacer une donnée en disant par exemple :
// objet.pseudo = "Bob"

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
// console.log(data[2].pseudo[0]);  =>> affiche le N de Nikola

//---------------------------
// Les structures de controle
//---------------------------
if (data[0].age > data[1].age) {
  console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //Valeur si faux
}

// pour les if else, on a pas besoin d'accolades si tout es t sur la même ligne, cad :
//  if (valeur à tester) alors fais ça
//ou même :
// if (valeur à tester)
// valeur si vrai
// else
// valeur si faux
//ou encore :
// valeur à tester ? si vrai : si faux

// While  moins utilisé que les boucles for
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeur de w est de : " + w);
}

// Do while, pas super utilisé
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}
//moins utilisé sous cette forme

// on déclare la valeur de i | jusqu'où on boucle | on incrémente i tant que la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]); => affiche la première techno de chacun
  // document.body.innerHTML += "<h2>" + data[i].technos + "</h2>"; ==>affiche les technos des 3
  // ne pas oublier le += car sinon ça écrase à chaque tour de boucle !
}
//data.lenght est la "longueur" de la data, ici c'est 3, car il ya 3 éléments dans le tableau.

// Switch
// ==> permet d'éviter de faire des if else à rallonge si pleins d'éléments
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
    // il faut toujours finir avec un cas par défaut, ici c'est null=> ça ne fait rien
  }
});

//----------------
// Méthodes String
//----------------
//Les méthodes sont des fonctions qui ont déjà été codé dans JS et donc qu'on a pas besoin de recoder
//
let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// permet de savoir le type de donnée, ici une chaine de caratère

// console.log(eval(parseInt("1") + 2));
//eval est une méthode pour faire des calculs ?
//parseInt est une méthode changer un string/chaine de charactère en number

// console.log(isNaN(string));
// la méthode isNan permet de dire si ce n'est pas un nombre. Si isNan est true, ce n'est pas un nombre

// console.log(string2.length);
// console.log(string2[string2.length - 1]);
// attention la length n'est pas égale à l'index, car la lenght part de 0 ! Il faut donc enlever moins un pour cibler le dernier charatère

// console.log(string2.indexOf("langage"));
//permet de dire à quel index le mot ou la lettre mis entre apostrophes commence
// console.log(string2.indexOf("x")); // Retourne -1 s'il ne le connait pas

// let newString = string2.slice(20);
//Tu coupes à 20 et tu gardes tuout ce qui est après 20
// let newString = string2.slice(5, 17);
// tu commences à couper à 5 et tu t'arrêtes à 17
// console.log(newString);

// console.log(string2.split("i"));
// à chaque fois tu coupes les i

// console.log(string2.toLowerCase());
//tu mets toute la chaine de caractère en minuscule
// console.log(string2.toUpperCase());
//idem en majuscule

// console.log(string2.replace("Javascript", "PHP"));
//à chaque fois qu'il trouve le premier terme, il va le remplacer par le second

//-----------------
// Méthodes Numbers
//-----------------

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(1));
//permet de garder un certain nombre après la virgule, ici 1

// console.log(parseInt("43"));
// console.log(parseInt(numberString));
//ici parseInt prend juste le premier nombre de la chaine de caratère, ici il renvois 42 car il ne prends que les nombres entiers
// console.log(parseFloat(numberString));
// idem mais prends ce qui est après la virgule aussi

// Math
// console.log(Math.PI);
// donne la valeur de pi

// console.log(Math.round(4.5));
//arrondi au plus proche

// console.log(Math.floor(4.9));
//arrondi à l'inferieur

// console.log(Math.ceil(4.1));
//idem au plus haut

// console.log(Math.pow(2, 7));
//donne 2 à la puissance 7

// console.log(Math.sqrt(16));
//donne la racine carré

// console.log(Math.floor(Math.random() * 50));
//donne un nombre random entre 0 et 50, ici sans virgule car on a Math.floor

//-----------------
// Méthodes Arrays
//-----------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);
//permet de fusionner deux tableaux et de rester dans un tableau et pas une chaine de caractère !

// let newArray = [...array3, ...array4];
// console.log(newArray);
//autre méthode permettant de faire la même

// console.log(array3.join(' /'));
//permet de dire entre chaque élément du tableau tu vas mettre quelque chose, ici un /

// console.log(array3.slice(1));
//découpe moi le premier élément du tableau, si on avait mis 2, les 2premiers sont coupés !

// console.log(newArray.slice(2, 5));
//garde juste le 3 ,4 et 5, à partir de quand tu sclices et jusqu'ou tu prends

// console.log(array3.indexOf("Python"));
//donne l'index d'un élément en particulier

// array3.forEach((languages) => console.log(languages));
// Enumère tous les langages de array3

// console.log(array3.every((language) => language == "Php"));
// renvois true ou false s'il y a le terme exact??

// console.log(array3.some((language) => language == "Php"));
// renvois true ou false selon s'il y a le mot quelque part (pas forcement le mot exact, par exemple si je mets une lettre il renvois tous les mots comprenant la lettre)??

// let shift = array3.shift();
// console.log(array3);
// permet d'enlever le premier élément d'un tableau

// console.log(array3.pop());
// retire le dernier élément

// const restArray = array3.splice(0, 2, "C++");
// console.log(array3);
// renvois ["C++", "Python"]
// dis enfait entre 0 et 2 tu enlèves et tu mets le 3e élément à la place
// const restArray = array3.splice(0, 2, ...array4);
// renvois ["Ruby","Solidity", "Python"]
// avec "..." permet de fusionner les listes

// IMPORTANT //

let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
// permet de faire l'opération que l'on veut sur chaque élément du tableau, ici on additionne tous les éléments

arrayNumber.push(17);
// permet d'ajouter un élément à la fin du tableau

// FILTER, SORT, MAP   +++++

// console.log(arrayNumber.filter((number) => number > 10));
// renvois tous les éléments supérieurs à 10
// number est une convention, on l'applle souvent comme ça mais on pourrait l'appeller n'importe comment

// console.log(arrayNumber.sort());
// renvois [1,12,17,28,4,74]
// il lit d'abord le premier chiffre de chaque nombre, comme une machine !

// console.log(arrayNumber.sort((a, b) => a - b));
//permet d'avoir une liste croissante ou décroissante, là il lit bien comme les humains
// a et b sont des conventions, on l'applle souvent comme ça mais on pourrait l'appeller n'importe comment

// arrayNumber.map((number)=> console.log(number));
// donne la même chose qu'un forEach, énumère tous les number

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");
// renvois une liste de tous les numbers et les injecte via html ! join permet de mettre un vide entre chaque élément

//-----------------
// Méthodes Objects   +++++
//-----------------
// document.body.innerHTML = data
//   .filter((user) => user.pseudo.includes("a"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) =>
//       `
//     <div class="user-card">
//       <h2>${user.pseudo}</h2>
//       <p>Age : ${user.age} ans</p>
//       <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
//     </div>
//   `
//   )
//   .join("");

// Au début on filtre les user qui ont la lettre a dans le pseudo, puis on classe d'abord par age, puis on crée une division pour chaque user, avec leur age et on crée une petit fonction pour dire si admin = true écris admininistrateur sinon écris membre

//----------
// Les dates
//----------

// Date classique
let date = new Date();
// si on log tel quel il nous met la date du jour

// Timestamp
let timestamp = Date.parse(date);
// console.log(timestamp);
// la méthode parse donne le temps en ms qui s'est écoulé entre 1970 et maintenant

// IsoString
let iso = date.toISOString();
// donne la date selon un format isoString

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  });
  return newDate;
}
// on aurai pu l'écrire en fonction fléchée comme d'hab
// cette méthode permet de choisir un peu plus le format de la date
// long veut dire qu'il écrit tout le mois mais on aurait pu démander en short ou en numeric

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

//--------------
// Destructuring
//--------------

// let moreData = {
//   destVar: ["Element 1", "Element 2"],
// };

// const { destVar } = moreData;
// // ça veut dire à partir de maintenant qu'on on faire destVar ça veut dire qu'on fait un moreData.destVar
// // ça équivaut à écrire ça, "c'est un truc de feignant" :
// const destVar = moreData.destVar;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// x y et z prennent les valeurs du dessus
// console.log(x);
// console.log(y);
// console.log(z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  // ne prends que la première valeur en enleveant le T ?
  let [y, m, d] = newDate.split("-");
  // partout ou il a un tiret tu casses le truc
  return [d, m, y].join("/");
  // le résultat du split, tu me les sépares avec un slash
};
// console.log(dateDestructuring(iso));

//-------------
// Les Datasets
//-------------
//Pour retrouver quelque chose sans utiliser son id on peut créer une data-, par exmeple dans la balise h3, on rajoute data-lang"js"
//
const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);
// renvois la langue enfermé dans la data de h3js : js

const h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset.lang));
// renvois la langue enfermée dans chacune des balises

//----------
// Les Regex
//On peut aller voir les cheat sheets de regex
//----------
let mail = "from_s$cratch33@gmail.com";
// console.log(mail.search(/frscceeceom/));
// cherche moi dans le mail, cet élément. S'il le trouve il va renvoyer 0 sinon il renvois -1. Ici il renvois -1

// console.log(mail.replace(/from/, "de"));
// remplace le "from" par "de"

// console.log(mail.match(/SCratch/i));
//quand ne marche pas renvois null, le "i" veut dire ignore les majuscule est minuscule. Ici comme ça marche il renvoit un tableau ?

// console.log(mail.match(/[zug]/));
//chercher individuellement toutes les lettres et dis s'il y en trouve ua moins 1. Ici il trouve juste le g

// console.log(mail.match(/[123]/));
// idem pour des chiffres, ici il trouve juste le 3

// Tous les chiffres
// console.log(mail.match(/\d/));
// cette commende spéciale permet de demander s'il trouve au moins un chiffre, ici il dit qu'il trouve le 3

// Matcher toutes les lettres
// console.log(mail.match(/[a-z]/));
// pareil on lui demande s'il trouve au moins UNE lettre, ici il s'arrete au f, la première lettre qu'il trouve

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));
// permet de demander s'il a trouvé des lettres puis divers caractères spéciaux

let separator = 265264849;
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
