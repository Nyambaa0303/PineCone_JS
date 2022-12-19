let minutsEl = document.getElementById("min");
let secondsEl = document.getElementById("sec");
let doilEl = document.getElementById("tens");

let minut = 00;
let seconds = 00;
let doils = 00;

function staartTimer() {
  doils++;
  if (doils < 9) {
    doilEl.innerHTML = "0" + doils;
  }

  if (doils > 9) {
    doilEl.innerHTML = doils;
  }
  if (doils >= 99) {
    seconds++;

    secondsEl.innerHTML = "0" + seconds;
    doils = 0;
  }

  if (seconds >= 59) {
    minut++;
    minutsEl.innerHTML = "0" + minut;
    seconds = 0;
  }
}
setInterval(staartTimer, 10);
