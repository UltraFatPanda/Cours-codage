"use strict";
// CANVAS
//-------

function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  // permet de lui dire qu'il est en 2D ?

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(50, 50, 50, 150);
  // fillrect = le rectangle à remplir, les deux premier séléments c'est ou est ce qu'on le positionne et les deux derniers la taille qu'il fait

  ctx.fillStyle = "rgba(0,100,200,0.5)";
  ctx.fillRect(100, 30, 100, 50);

  ctx.fillStyle = "rgba(100,100,200, 0.5)";
  ctx.fillRect(10, 25, 100, 100);
  ctx.clearRect(35, 25, 40, 40);
  // enleve des partie du fill rect
  ctx.strokeRect(125, 75, 50, 50);
  // fait juste un rectangle non rempli

  ctx.fillStyle = "rgba(200,100,200, 0.8)";
  ctx.beginPath();
  ctx.moveTo(180, 150);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 150);
  // permet de créer des lignes pour faire des formes géométriques, ici un triangle
  ctx.fill();
}

window.addEventListener("load", draw);
// permet d'afficher tous les éléments une fois que la page est chargée

//------------
// TRY / CATCH
//------------

try {
  // Test un block de code
  maFonction();
} catch (err) {
  console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}
console.log(isValidJSON());

// Finally
try {
  // Test un block de code
  // maFonction();
} catch (err) {
  console.log(err);
} finally {
  console.log("on est arrivé au bout !");
  // finally s'affiche quoi qu'il arrive !, peut etre utile si on veut que quelque chose se joue peut importe si on a une erreur ou pas
}

// Throw
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a number !";
  } else {
    console.log("c'est un nombre");
  }
  // PLEIN DE CODE
}

try {
  isNumber("2d");
} catch (err) {
  console.log("Erreur : " + err);
  // throw permet de définir ce qu'on veut avoir lors d'une erreur
}

//------------
// Strict mode
//------------

("use strict");
// permet d'utiliser le strict mode de JS, on doit le déclarer le plus tôt possible, cad en haut du code, permet d'avoir un JS un peu plus cadré, moins permissive avec plus d'erreurs qui remontent

voiture = "Toyota";
console.log(voiture);
