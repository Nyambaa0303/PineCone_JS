let n = Math.floor(Math.random() * 20) + 1;
const inputEl = document.getElementsByTagName("input")[0];
const messageEl = document.getElementsByClassName("message")[0];
const scoreEl = document.getElementsByClassName("score")[0];
const buttons = document.getElementsByTagName("button");
const highEl = document.getElementsByClassName("highscore")[0];

function checkNumber() {
  const inputValue = Number(inputEl.value);
  const scoreNumber = Number(scoreEl.innerHTML);
  const highNumber = Number(highEl.innerHTML);

  if (isNaN(inputValue)) {
    messageEl.innerHTML = "Toogoo oruulna uu?";
  } else {
    if (inputValue > n) {
      if (scoreNumber - 1 === 0) {
        afterLose();
      } else {
        messageEl.innerHTML = "Ih baina";
      }
      scoreEl.innerHTML = scoreNumber - 1;
    } else if (inputValue < n) {
      if (scoreNumber - 1 === 0) {
        afterLose();
      } else {
        messageEl.innerHTML = "Baga baina";
      }
      scoreEl.innerHTML = scoreNumber - 1;
    } else {
      messageEl.innerHTML = "Zov taalaa";
      buttons[1].style.display = "none";
      document.body.style.backgroundColor = "#60b347";
      if (scoreNumber > highNumber) {
        highEl.innerHTML = scoreNumber;
      }
    }
  }
}
