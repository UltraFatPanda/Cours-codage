const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
  // permet de sélectionner tous les input de type texte et l'input de type password aussi. QuerySelectorAll est un sélecteur de type css alors on met des virgules pour séparer les differents éléments qu'on veut sélectionner
);
const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    //  !valide veut dire, si ce n'est pas valide, donc ne retourne pas true
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    //  !valide veut dire, si ce n'est pas valide
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  progressBar.classList = "";
  // permet de dire qu'il y aura plus rien dans la progress bar au début, permet de reinitailiser la progress bar si jamais on se trompe après avoir donnée un mot de passe qui fonctionnait

  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
  // permet de lancer la fonction confirmChecker à la fin de passwordChecker si confirmPass est true, sinon si on continue à écrire sur me mot de passe de passwordCheker, le confirmChecker peut dire que les deux valeurs sont toujours égales
};

const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        // case veut dire : dans le cas ou le e.target.id = pseudo, lance la fonction pseudochecker pour voir si le pseudo est bon
        pseudoChecker(e.target.value);
        // e.target.value représente ce qui est tapé par l'utilisateur
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        nul;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // cette dernère ligne permet de se prémunir du changement de page quand on valide un formulaire

  if (pseudo && email && password && confirmPass) {
    // à chaque fois qu'on écrit par exemple if(pseudo), ça veut dire if(pseudo===true), s'il n'y a rien d'écrit dessus ou qu'il est null, cad dans la valeur pseudo, il est false
    const data = {
      pseudo,
      email,
      password,
    };
    // pour tout envoyer à un serveur ou une api, on envoit tout sous forme d'objets
    // on aurait pu écrire pseudo= pseudo par exemple mais le fait qu'on ne le mette pas est sous entendu par js
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    // permet de mettre tous les champs à 0 après validation finale
    progressBar.classList = "";
    // permet de dire remove, c'est comme un .remove()
    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    // permet de remettre toustes les data à 0
    alert("Inscription validée !");
  } else {
    alert("veuillez remplir correctement les champs");
  }
});
