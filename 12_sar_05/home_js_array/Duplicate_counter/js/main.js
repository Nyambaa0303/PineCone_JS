let number = prompt("Toogoo oruulna uu?");
let array = [];
let k = 0;
let tooluur = 0;
// debugger;
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < number.length; j++) {
    if (i == number[j]) {
      tooluur++;
    }
  }
  k++;
  console.log( i + ':' + tooluur);
  tooluur = 0;
}

