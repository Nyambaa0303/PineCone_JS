let minutsEl = document.getElementById("min");
let secondsEl = document.getElementById("sec");
let doilEl = document.getElementById("tens");
const buttonStart = document.getElementById("start");
const stopStart = document.getElementById("stop");
const restartStart = document.getElementById("restart");
let interval;
let minut = 00;
let seconds = 00;
let doils = 00;

function startTimer() {
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
    if (seconds > 9) {
      secondsEl.innerHTML = seconds;
    }
    doils = 0;
  }

  if (seconds >= 59) {
    minut++;
    minutsEl.innerHTML = "0" + minut;
    if (minut > 9) {
      minutsEl.innerHTML = minut;
    }
    seconds = 0;
  }
}

buttonStart.onclick = function () {
  interval = setInterval(startTimer, 10);
};

stopStart.onclick = function () {
  clearInterval(interval);
};
restartStart.onclick = function () {
  clearInterval(interval);
  minut = 00;
  seconds = 00;
  doils = 00;
  minutsEl.innerHTML = minut;
  secondsEl.innerHTML = seconds;
  doilEl.innerHTML = doils;
};
