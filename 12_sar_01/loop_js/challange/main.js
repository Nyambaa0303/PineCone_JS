let a = 9;

let output = "";

for (let i = 1; i <= a; i++) {
  for (let j = 1; j <= a; j++) {
    if (i == 1 || i == a || j == 1 || j == a || j == i || j - 1 == a - i) {
      output += "* ";
    } else {
      output += "  ";
    }
  }

  output += "\n";
}

console.log(output);
