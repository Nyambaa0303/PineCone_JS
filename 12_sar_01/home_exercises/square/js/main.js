// let n = Number(prompt("Toogoo oruul"));
let n = 5;
let result = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
      result += "* ";
    }
  }
  result += "\n";
}
console.log(result);
