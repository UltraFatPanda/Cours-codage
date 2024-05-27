const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  // une fois que tout marche on déclare la fonction après !
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  // permet de créer la classe bubble à la constante bubble
  document.body.appendChild(bubble);
  // permet d'injecter le span au body en tant qu'enfant
  const size = Math.random() * 200 + 100 + "px";
  // la methode random est issue de l'objet math. Permet d'avoir un nombre compris entre 0 et 1. Sauf qu'on veut une bulle qui fasse minimum 100px donc on mutiplie par 200 mais le nombre peut être 0 donc on ajoute 100px.On a donc un nombre entre 100 et 300 ici
  bubble.style.height = size;
  bubble.style.width = size;
  console.log(size);

  bubble.style.top = Math.random() * 100 + 50 + "%";
  // on veut que l'apparition de la bulle soit aléatoire mais qu'elle vienne plutot d'en bas, alors on ajoute +50 au top pour qu'elle soit toujours dans la moitiée inférieure
  bubble.style.left = Math.random() * 100 + "%";
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  //   c'est enfait une fonction if else, si le nombre est supérieur à 0.5 tu renvois 1 sinon tu renvois -1
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    // permet de remplacer le h3 par la valeur du texte de counter
    // permet de dire counter= counter+1
    bubble.remove();
    // permet de faire diqparaitre la bulle au click
  });
};

setTimeout(() => {
  bubble.remove();
}, 8000);
// cette ligne veut dire dans 8s tu disparais
setInterval(bubbleMaker, 3000);
// permet d'appeller la fonction à chaque intervalle de 300ms
