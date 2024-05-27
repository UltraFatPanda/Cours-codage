// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

const sidebarEffect = document.getElementById("sidebarEffect");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebarEffect");
});

content.addEventListener("click", () => {
  // Vérifier si la sidebar est visible
  if (sidebar.classList.contains("sidebarEffect")) {
    sidebar.classList.toggle("sidebarEffect");
  }
});
