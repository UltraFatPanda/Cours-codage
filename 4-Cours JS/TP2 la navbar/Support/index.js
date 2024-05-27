// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

let scroll1 = 0;
let scroll2 = 0;

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  scroll2 = window.scrollY;

  if (scroll2 > scroll1) {
    nav.style.top = "-60px";
  } else {
    nav.style.top = "0px";
  }

  scroll1 = scroll2; // Mettez à jour scroll1 pour la prochaine comparaison
});
