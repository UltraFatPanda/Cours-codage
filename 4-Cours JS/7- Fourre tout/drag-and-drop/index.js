let item;

document.addEventListener("dragstart", (e) => {
  // dragstart veut dire quand on commence à déplacer un objet
  item = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
  // permet de lever l'interdiction de ne rien bouger
});

document.addEventListener("drop", (e) => {
  // drop veut dire relacher l'élément
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault(e);
    e.target.appendChild(item);
  }
});

document.addEventListener("dragend", () => (item = null));
// permet de se vider item après
