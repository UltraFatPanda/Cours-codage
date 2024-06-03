const obj = {
  // un objet à un index qui a sa value
  pseudo: "From Scratch",
  // index = pseudo value = from scratch
  ville: "Bordeaux",
  admin: false,

  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },
  // c'est mieux de l'écrire en fonction ? Eviter les fonctions flechées en poo
  // direBonjour() {
  //   console.log("Bonjour je suis " + this.pseudo);
  // }
};

// Ajouter
obj.age = 24;
obj["admin"] = true;
// la deuxième synthaxe permet de faire de la concaquénation

// Modifier
obj.pseudo = "FS";

// Supprimer
delete obj.ville;

// Checker si propriété existe
console.log("pseudo" in obj);
console.log("pseudo" in obj);

// Parcourir l'objet
for (const key in obj) {
  console.log(obj[key]);
  // cette ligne permet d'avoir la valeur de chaque index dans notre objet
  // console.log(key + " : " + obj[key]);
  // cette ligne permet d'avoir un log plus visible avec l'index et sa valeur correpsondante
}
// console.log(obj.direBonjour());

////
//Les méthodes natives de JS
////
// quand on fait Object.quelque chose on appelle la méthode js de Object, comme avec Math.random

// Obtenir les clés (key = index ?)
const keys = Object.keys(obj);
// renvois les index contenus dans l'objets

// Obtenir les valeurs
const values = Object.values(obj);
// renvois les valeurs contenus dans les index de l'obets

const nestedArray = Object.entries(obj);
// console.log(nestedArray);
//crée un tableau avec chacun des éléments

const obj2 = {
  taille: "1m80",
  poids: "75kg",
};

// Fusionner objects
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);
// fusionne les objets, permet d'ajouter les index à un meme objet fusionné, l'objet qui l'emporte est le deuxieme annoncé

// Empecher les modifications
const newObj = Object.freeze(obj);
// quand on change un index de l'objet aucun changement n'est pris en compte après le freeze et on ne peut rien ajouter non plus
const newObj = Object.seal(obj);
// seal en revanche permet d'ajouter des index sans pouvoir modifié les index déjà déclarés
newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";

// Object.seal

// It prevents adding and/or removing properties from the sealed object; using delete will return false
// It makes every existing property non-configurable: they cannot be converted from 'data descriptors' to 'accessor descriptors' (and vice versa), and no attribute of accessor descriptors can be modified at all (whereas data descriptors can change their writable attribute, and their value attribute if writeable is true).
// Can throw a TypeError when attempting to modify the value of the sealed object itself (most commonly in strict mode)
// Object.freeze

// Exactly what Object.seal does, plus:
// It prevents modifying any existing properties
// Neither one affects 'deep'/grandchildren objects. E.g., if obj is frozen, obj.el can’t be reassigned, but the value of obj.el could be modified, e.g. obj.el.id can be changed.

// console.log(newObj);

//---------------------
// Contruire des objets
//---------------------

// Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User("From Scratch", "Bordeaux");
// si on log ça on a le user1 sous forme d'objet avec l'index pseudo et ville et ses valeurs respectives, on appelle ça instancier l'objet
const user2 = new User("Denis", "Nantes");

console.log(user2.getCity());
// renvois Denis habite à Nantes

//------------------------
// Factory functions
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("FS", "nice");
// console.log(user4);

//------------------------
// Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("Samia", "Lyon");

Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
};

Object.assign(Utilisateur.prototype, {
  method1() {
    // Ma méthode
  },
  method2() {
    // Ma méthode
  },

  // par contre ces finctions là sont environs 30% plus lente que celles joués dans le prototype, donc il faut idéalement utiliser les méthodes déjà fournées ? OU alors on peut mettre les fonctions dans le protoype
});

// console.log(user5);

//-----------
// L'héritage
//-----------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  // en disant extend il hérite des index et des méthodes du parent
  run() {
    console.log("Le chien court !");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("j'ai tué un oiseau");
  }
}

const rintintin = new Dog("Rintintin", 9);
// en disant dog il hérite de la classe dog, cad de la classe animal + la méthode run
console.log(rintintin);
