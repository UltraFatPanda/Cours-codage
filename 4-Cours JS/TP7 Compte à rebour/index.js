// Créer la logique de compte à rebours

// choice.value = 5 minutes

// let totalSeconds = document.getElementById("choice").value * 60;

// Créer un événement à la validation du form pour lancer le compte à rebours

const form = document.getElementById("form");
const countdownDisplay = document.getElementById("countdownDisplay");

// const Timer = () => {
// seconds--;
// if (seconds === 0) {
//   minutes--;
// }
// // };

const Timer = setInterval(
  (Timer = () => {
    seconds--;
    if (seconds === 0) {
      minutes--;
    }
  }),
  1000
);

console.log(Timer);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let totalSeconds = document.getElementById("choice").value * 60;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  countdownDisplay.innerHTML = `<h3>${minutes}</h3><h3>${seconds}</h3>`;
});
