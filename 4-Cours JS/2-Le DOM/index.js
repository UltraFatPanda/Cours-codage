//les differents selecteurs
// document.querySelector("h4").style.background = "yellow";

// cet exemple montre qu'on peut tout faire en javascript, on peut sélectionner tout ce qu'on a déclaré dans le html ou le css

// const baliseHTML = document.querySelector("h4");
// cette ligne permet de nommer la sélection en une constante pour qu'on puise l'invoquer plus facilement plus tard

// Click event
// Astuce : quand on crée une variable il faut essayer de la log dans la console pour voir si elle peut la retrouver avec console.log(le nom de la variable)

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
// la seconde ligne est préférable car un peu plus optimisé, grace à l'id js sait exactement ou aller
const response = document.querySelector("p");
console.log(btn1, btn2);
// permet de voir dans la console si les variables sont bien nommées

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});
// ici on a pas besoin de mettre le point car on a déjà dit grace à classList, qu'on parlait d'une classe. Ici toggle ajoute la classe si elle n'est pas présente et la supprime si elle est déjà là.

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// les priorités en js :

// <div>  >  #id > .class > balise

// c'est à dire qu'on va avoir des erreurs à vouloir injecter une classe à partir d'un id, et que les div ont plus d'importance

//Mouse events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
});
// ici on est obligé de pointer à partir de la fenêtre (window car notre effet mousemove ayant un z index de -1, il ne clique pas sur le body mais sur la fenêtre).
// On doit aussi rappeller qu'il y a un translate car sinon notre ligne de css sur transform est remplacée
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "2px solid teal";
});
// Mousedown signifie quand le bouton de la souris est appuyé et mouseup quand il est relaché

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
// Mouseenter est quand on survole une zone, mais il est different du hover car il garde le meme style après avoir survolé la zone alors que hover est actif seulement quand la zone est survolée
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});
//-------------------------------------
//Keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Support/cours/Enter.mp3";
  // on pourrai aussi mettre
  // audio.src = key + ".mp3"
  // il va chercher la lettre qui a été tapée et rajouter le suffixe mp3, donc si on a plusieurs fichiers audio ça peut être un raccourci
  audio.play();
};

document.addEventListener("keypress", (e) => {
  // console.log(e.key);
  // on utilise e.key quand dans l'évenement e de la console on veut la valeur key, on peut retourver les valeurs disponibles avec console.log(e)
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }

  ring();
});

//-------------------------------
//Scroll event

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//---------------------------------
//Form event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});
// c'est toujouirs comme ça qu'on récupère ce qui est tapé dans les input

select.addEventListener("input", (e) => {
  language = e.target.value;
});
// ici c'est un select mais l'evenement input marche quand même

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // avec cette dernière ligne, on se prémuni du changement de page quand on valide un formulaire

  if (cgv.checked) {
    document.querySelector("form> div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Language préféré : ${language}</h4>`;
    // permet d'injecter du texte/balises comme si on était sur du html mais sur js. La pratique selectionner la div sans nommer de variable est pas top mais on peut la retrouver. Il faut forcement injecter dans quelque chose, là on avait une div vide
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//----------------------------------------------------------------------------------------
//Load event
// permet d'avoir des evenement qui survienne une fois seulement quand la page est entierement chargée, cela permet à l'utilisateur d'avoir un meilleur rendu et une navigation qui semble plus rapide
window.addEventListener("load", () => {
  console.log("Document Chargé !");
});

//---------------------------------------------------
//ForEach
// const boxes = document.getElementsByClassName("box");
// cette ligne permet de creer une variable comprennant tous les elements qui ont la classe box. Il faut au moins deux éléments pour que ça marche
//On ne peut pas utiliser un eventListener sur la constante boxes par contre, c'est pouquoi on va utiliser le ForEach
const boxes = document.querySelectorAll(".box");
// cette deuxième ligne est une meilleure pratique car elle bug moins

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
    // permet de mettre un addEventListener sur tous les éléments box et on récupère l'évenement click pour que quand on clique sur une boite, elle change de taille
  });
});

//-------------------------------------------
//addEventListener vs onclick
// le version onclick est valable mais non recommandée. Avec onclick on ne peut pas mettre plusieurs evenements sur le même élément (par exemple sur le body), le deuxième evenement écrase le premier
document.body.onclick = function () {};
// ou bien
document.body.onclick = () => {};
//
//
//
//----
//Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)
document.body.addEventListener(
  "click",
  () => {
    console.log("click1 !");
  },
  false
);
// ici on a rajouté un 3e arguement. LE premier est le déclencheur, le 2e la fonction et le 3e false. De base toutes les evenListener ont false car elles sont toutes en bubbling
document.body.addEventListener(
  "click",
  () => {
    console.log("click2 !");
  },
  true
);
// usecapture est utilisé en premier, la fonction est éxécutée plus tot mais je n'ai pas compris pourquoi

//--------------------------
//StopPropagation
// questionContainer.addEventListener("click", (e) => {
//   alert("test !");
//   e.stopPropagation();
// });
// ici e.stopPropagation arrête tous les évènements sur le questionContainer éxécutés après lui, le bobbling est arrêté mais le usecapture s'execute avant
//-----------------
//
//
//removeEventListener permet lui de supprimer tous les eventListener normalement éxécutés après
//
//---------------------
//Le BOM

// window.open("htpp://google.com", "cours js", "height=600, width=800");
// cette ligne permet de faire ouvrir une fenêtre windows
//window.close() permet de fermer la fenêtre, par exemple après avoir validé un formulaire ou validé un bouton

//Evenement adossé à window
//alert("hello") qui est enfait le même que window.alert("hello")
//
//Confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});
// cette commande permet de demander la confirmation pour quelque ChannelSplitterNode, par exemple la suppresion d'un ficher

//
//prompt
// btn1.addEventListener("click", () => {
//   prompt("Entrez votre nom !");
// });
// ça permetde demander un input (c'est à dire un texte ecrit par l'utilisateur) avant de valider, sauf que la donnée écrite est là sauvegardée nulle part, on pourrait donc mettre :
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");
  questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>";
});
//permet d'injecter du html à la place de tout ce qu'il y avait dans le questionContainer, sauf que si on veut juste rajouter du texte au lieu d'écraser on aurait pu utiliser +=à la place du =
//
//
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);
// déclenche une fonction au bout d'un temps prédéterminé, ici 2000ms

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//   <div class='box'>
//   <h2>Nouvelle Boite ! </h2>
//   </div>`;
// }, 4000);

// document.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });
// cette fonction permet de retirer ce qu'on clique
//
//
//Location
// console.log(location.href)
// console.log(location.host)
// console.log(location.pathname)
// console.log(location.search)
// location.replace("http d'un site web")
// cette dernière ligne permet de rediriger vers un autre lien
// window.onload = ()=>{
//   locatrion.href ="url de l'addresse web"
// }
// permet de rediriger aussi ?
//
//
//Navigator
// console.log(navigator.userAgent);
// donne toutes les infos des données de navigation, ça peut aider pour avoir info sur utilisateur
//
//
//History
// console.log(history)
// permet d'avoir tout l'historique
history.go(-2);
// cette ligne permet d'aller 2 pages en arrière
//
//
//
//--------------------------------------------
//Set property
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
// e.layerX est la valeur de la souris sur l'axe x est est préférable à pageX apparement...
// On rajoute le "px" car css veut une valeur en pixels !
