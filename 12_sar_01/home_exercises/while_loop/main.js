//  10 hurtelh natural too

let count = 1;

while (count <= 10) {
  console.log(count);
  count++;
}

//  10 hurtelh natural toonii sondgoi toog ol

let num = 1;

while (num < 10) {
  console.log(num);
  num += 2;
}

// 10 hvrtelh natural toonii tegshiig ol

let j = 2;

while (j < 10) {
  console.log(j);
  j += 2;
}
// 100 hurtelh natural toonii niilberiig oloh programm bich

const l = 100;
let n = 0;

let m = 0;

while (n < l) {
  n++;
  m = m + n;
}
console.log(m);

//N hurtelh natural toog hevleh bolon tedgeer toonii niilberiig ol

let x = Number(prompt("N toog oruulna uu?"));

y = 0;
z = 0;

while (y < x) {
  console.log(y);
  y++;

  z = z + y;
}
console.log(z);

// Ogogdson toog anhnii mon esehiig oloh kod bich

let s = Number(prompt("Toogoo oruulna uu?"));

let ok = true;

if (s === 2) {
  console.log("Anhnii too mon");
} else {
  let i = 2;
  while (i < s) {
    if (s % i === 0) {
      ok = false;
      break;
    }
    i++;
  }
}
if (ok) {
  console.log("Anhnii too mon");
} else {
  console.log("Anhnii too bish");
}

// N toonii factorial oloh programm bich

let facNum = Number(prompt("Toogoo oruulna uu?"));
let i = 1;
let multiple = 1;

while (i <= facNum) {
  multiple = multiple * i;
  i++;
}

console.log(multiple);

// N hurtelh toonii sondgoi toog hevleh bolon tuunii niilberiiig ol
