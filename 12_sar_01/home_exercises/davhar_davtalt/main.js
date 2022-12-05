let num = 5;
let output = "";

for (i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    output += "1 ";
  }
  for (k = 1; k < num; k++) {
    output += " ";
  }
  output += "\n";
}

console.log(output);
