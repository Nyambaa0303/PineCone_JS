// let n = Number(prompt("Toogoo oruul"));
let n = 5;
let result = "";

for (i = 0; i <= n; i++) {
  if (i == 0 || i == n) {
    for (j = 0; j < n; j++) {
      result += "* ";
    }
  }
  result += "\n";
}
console.log(result);
