// La première chose à faire avec une API c'est de prendr ele lienb de l'api et de le tester sur un navigateur

// dans la console, dans Element, on peut faire copy => copy JS path ! mais parès c'est une meilleure pratique de faire getelementbyID

const header = document.getElementById("header");
const content = document.getElementById("content");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);
      const data = res.data.content;
      // cette ligne permet d'avoir un code plus lisible après, en raccourcissant nos lignes de code

      header.textContent = data.text_head;
      content.textContent = data.text !== "" ? data.text : data.text_hidden;
    });
  // dans le second then on ouvre une accolade car on met plus qu'un élément dans then
}

getJoke();

document.body.addEventListener("click", getJoke);
