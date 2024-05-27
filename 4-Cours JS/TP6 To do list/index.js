const ListContainer = document.getElementById("ListContainer");
const input = document.getElementById("TodoInput");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ListContainer.innerHTML += `<h3>${input.value}</h3>`;
  console.log(input.value);
  input.value = "";
});

// ListContainer.addEventListener("click", (e) => {
//   if (e.target.tagName === "H3") {
//     e.target.classList.add("checked");
//   }
//   if else (e.target.tagName === "H3" && cheked = true) {
//     e.target.remove();
//   }
// });

ListContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "H3") {
    if (e.target.classList.contains("checked")) {
      e.target.remove();
    } else {
      e.target.classList.add("checked");
    }
  }
});
