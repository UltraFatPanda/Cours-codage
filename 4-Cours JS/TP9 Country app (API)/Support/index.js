// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données

// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

inputRange.addEventListener("change", () => {
  rangeValue.textContent = inputRange.value;
});

let countryData = [];
let country = {};
const countriesContainer = document.querySelector(".countries-container");

const fetchCountry = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())

    .then((data) => (countryData = data))
    .then((countryData) => console.log(countryData));
};

const CountryDisplay = async () => {
  await fetchCountry();
  countriesContainer.innerHTML = countryData
    .slice(0, inputRange.value)
    .map(
      (country) =>
        `
            <li class="card">
            <img src=${country.flags.png} alt="photo ${country.flags.alt}">
              <h2>${country.name.common}</h2>
              <p>${country.capital ? country.capital[0] : "N/A"}</p>
              <h3>Population : ${country.population}</h3>
            </li>
            `
    )
    .join("");
};

inputRange.addEventListener("click", (e) => {
  e.preventDefault();

  CountryDisplay();
});

minToMax.addEventListener("click", (e) => {
  e.preventDefault();
  const byValue = (a, b) => a - b;
  const countryData = countryData.sort(byValue);
  CountryDisplay();
});

inputSearch.addEventListener("input", (e) => {
  e.preventDefault();
  const CountryDisplay2 = async () => {
    await fetchCountry();
    let countryData2 = countryData.filter((country) =>
      country.name.common.includes(inputSearch.value)
    );
    countriesContainer.innerHTML = countryData2
      .slice(0, inputRange.value)
      .map(
        (country) =>
          `
              <li class="card">
              <img src=${country.flags.png} alt="photo ${country.flags.alt}">
                <h2>${country.name.common}</h2>
                <p>${country.capital ? country.capital[0] : "N/A"}</p>
                <h3>Population : ${country.population}</h3>
              </li>
              `
      )
      .join("");
  };
  CountryDisplay2();
});
