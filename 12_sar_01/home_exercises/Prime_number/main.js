let n = Number(prompt("Toogoo oruulna uu?"));
let m = 2;
for (let i = 3; i <= 100; i++) {
  while (m < i) {
    if (i % m != 0) {
      m++;
    }
  }
}

// let too = 7;
// let ok = true;
// for (let j = 7; j < 100; j++) {
//   for (let i = 2; i < 7; i++) {
//     if (too % i == 0) {
//       ok = false;
//       break;
//     } else {
//       ok = true;
//     }
//   }

//   if ((ok = true)) {
//     console.log("anhnii too mon");
//   } else {
//     console.log("anhnii too bish");
//   }
// }
