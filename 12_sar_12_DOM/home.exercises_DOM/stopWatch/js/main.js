//let k = new Date();
let tsag = (document.getElementById("clock").innerHTML =
  " " +
  new Date().getMinutes() +
  ":" +
  new Date().getSeconds() +
  ":" +
  new Date().getMilliseconds());
clock.style.backgroundColor = "aqua";
clock.style.textAlign = "center";
clock.style.border = "dashed black 3px";

let display = document.getElementById("text");
display.innerHTML = "JS DOM stopwatch";
display.style.backgroundColor = "aqua";
display.style.textAlign = "center";
display.style.color = "red";
display.style.border = "solid black 5px";
console.log(display);
