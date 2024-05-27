let userData = [];
// On déclare une boite/tableau dans lequles on va stocker nos data de nos utilisateurs

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    // on demande 24 car c'est un multiple de beaucoup de nombre et donc c'est plus facile à organiser en cards
    .then((res) => res.json())
    // on convertit les données reçues en fichier json
    .then((data) => (userData = data.results));
  // permet de mettre les data.results dans le tableau précédement déclaré

  console.log(userData);
  // .then(() => console.log(userData));
  // si on veut avoir un console log qui affiche les données une fois que les fonctions précédentes sont terminées, on peut la mettre avec un .then devant console.log sans le await, mais ici ont mis await donc console.log attends que les deux première fonctions soit exécutées entierement
};

const userDisplay = async () => {
  await fetchUser();

  console.log(userData[0]);

  // voir doc => la méthode toLocaleDateString, permet de changer le format de la date dans le style qu'on veut !
  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  const dateCalc = (date) => {
    let today = new Date();
    let todayTimestamp = Date.parse(today);
    let timestamp = Date.parse(date);

    return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
  };

  document.body.innerHTML = userData
    .map(
      // La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant. Cad on lui dit pour chaque user, tu vas me le présenter avec une classe card, présenté avec le nom etc. Ne pas oublier que le map doit être asynchrone et donc être éxécuté après qu'il est eu toutes les données !
      (user) =>
        `
          <div class="card">
            <img src=${user.picture.large} >
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em>Membre depuis : ${dateCalc(user.registered.date)} jours</em>
    // em veut dire mets en italique 
          </div>
        `
    )
    .join("");
  // permet de ne pas avoir de virgules entre les prénoms et noms
};

userDisplay();
