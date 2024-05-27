// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
//
//

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");

const circles = document.querySelectorAll(".circle1, .circle2, .circle3");
window.addEventListener("mousemove", (e) => {
  circles.forEach((circle) => {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
  });
});
