// Convert today date to input format
// l'l'input demande un format yy//MM//dd, c'est donc tricky
const today = new Date().toISOString().split("T")[0];
// to iso string donne la date en chaine de caractère, on split le T, cad on l'enlève car elle apparait dans la chaine de caractère et l'élément 0 donne juste la date sans le reste
start_date.value = today;
start_date.min = today;
// là on luit dit ta valeur minimum c'est today, donc on peut pas retourner dans le passé pour choisir une date antérieure

// Tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
// ça dit tu prends la date du jour et tu lui faite getDate+1, et on arrive au jour suivant

// Convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
// pareil on le met au bon format de l'input
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  // change veut dire à chaque changement sur l'input on déclenche l'évènement
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", (e) => {
  // permet quand le start date change de ne pas pouvoir revenir en arrière avec le end date
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
    // donne les secondes differences entre les deux jours
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // transforme en secondes > minutes > heures > jours

  totalPerNight.textContent = diffDays * nightPrice.textContent;
};

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
bookingCalc();
