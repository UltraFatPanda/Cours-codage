const colorbox = document.getElementById(colorTextContainer);

document.body.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = "rgb" + "(" + red + "," + green + "," + blue + ")";

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
});
