let display = document.getElementById("text");
display.innerHTML = "JS DOM stopwatch";
display.style.backgroundColor = "aqua";
display.style.textAlign = "center";
display.style.color = "red";
display.style.border = "solid gray 5px";
console.log(display);

let time = document.getElementById("clock");

setInterval(interval, 1000);
function interval() {
  time.innerHTML = new Date().getMinutes;
}
interval();
