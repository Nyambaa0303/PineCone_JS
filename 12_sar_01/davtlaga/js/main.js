let n = 15;
let sum = 0;
let even = 1;

for (i = 1; i <= 15; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }

  if (i % 2 != 0) {
    even = even * i;
  }
}
console.log(sum);
console.log(even);

// heseg 2

let z = 10;
let y = 60;
let counts = 0;

for (i = 10; i <= 60; i++) {
  if (i % 3 == 0 && i % 4 == 0) {
    counts++;
  }
}
console.log(counts);
