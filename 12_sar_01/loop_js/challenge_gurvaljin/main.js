let num = 10;
let output = "";

for (i = 1; i <= num; i++) {
  for (k = 1; k <= num - i; k++) {
    output += " ";
  }
  for (let j = 1; j <= i; j++) {
    output += "* ";
  }
  output += "\n";
}

console.log(output);
