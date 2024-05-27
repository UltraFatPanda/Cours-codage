//RAPPEL : LA TOUTE PREMIERE CHOSE A FAIRE EST DE TESTER L'API DANS LE NAVIGATEUR !!!!

const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];

// c'est une bonne pratique de mettre le fetch dans une fonction

async function fetchMeals(search) {
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    // permet de concaténer ce que l'utilisateur écrit avec la recherche fetch
    .then((res) => res.json())
    .then((data) => (meals = data.meals));
  // Cette dernière ligne veut dire tout ce que tu as fait avant, tu vas l'appeller data (cad la response sous forme de json ), data est donc un objet. et on met tout dans le tableau meals

  console.log(meals);
}

function mealsDisplay() {
  if (meals === null) {
    result.innerHTML = "<h2>Aucun résultat</h2>";
    // permet de se prémunir si l'utilisateur écrit n'importe quoi, car sinon il y meal.length de quelque chose null et ça donne une erreur
  } else {
    meals.length = 12;
    // cette ligne veut dire que parmis les meals tu me garde que les 12 premiers

    result.innerHTML = meals
      .map((meal) => {
        let ingredients = [];

        for (let i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            // Il interroge si à chaque ingrédient on a true, cad si on a quelque chose dans la valeur ingrédient (quand on fait if sans rien après on demande si c'est true)
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];

            ingredients.push(`<li>${ingredient} - ${measure}</li>`);
          }
        }
        // SI ON METS DES ACOLADES SUR DES MAP ON DOIT METTRE UN RETURN et on met le guillement de la touche 7 juste à cote !!!!!!
        return `
          <li class="card">
            <h2>${meal.strMeal}</h2>
            <p>${meal.strArea}</p>
            <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
            <ul>${ingredients.join("")}</ul>
          </li>
          `;
      })
      .join("");
  }
}

input.addEventListener("input", (e) => {
  fetchMeals(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});
