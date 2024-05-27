// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let lastScroll = 0;
const img = document.getElementById("imgImprovise");
const popup = document.getElementById("popup");
console.log(popup);

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScroll) {
    navbar.style.height = "40px";
  } else {
    navbar.style.height = "90px";
  }
  if (window.scrollY > 75) {
    img.style.opacity = "1";
  } else {
    img.style.opacity = "0";
  }
  if (window.scrollY > 700) {
    popup.style.opacity = "1";
    popup.style.left = "5%";
  }

  lastScroll = window.scrollY;
});

console.log(button);
closeBtn.addEventListener("click", () => {
  popup.style.opacity = "0";

  setTimeout(() => {
    popup.style.display = "none";
  }, 1000);
});
