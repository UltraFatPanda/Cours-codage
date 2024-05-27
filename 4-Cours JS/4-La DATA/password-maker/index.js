const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";
// l'anti / permet de dire que le guillement n'est pas fermant
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
    // return veut dire arrête tout, ne lis pas ce qui est en dessous
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
// on peut écrire une fonction déjà définie dans le deuxième paramètre d'un eventListener !

// Attention, dans le projet du Générateur de mot de passe le code suivant est déprécié (remplacé par clipboard.writeText)

//   passwordOutput.value = password;
//   passwordOutput.select();

//   navigator.clipboard.writeText(passwordOutput.value);
//   // document.execCommand("copy");
