let button = document.getElementById("btn");
let test = document.getElementById("text");
let r, g, b;
function rand() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  test.style.color = "rgb(" + g + ", " + r + ", " + b + ")";
}
button.addEventListener("click", rand);
