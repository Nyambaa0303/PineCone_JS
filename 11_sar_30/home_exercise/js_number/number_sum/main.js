let n = Number(prompt("toogoo oruuna uu?"));

let a = n % 10;
let b = Math.floor((n % 100) / 10);
let c = Math.floor(n / 100);
let d = +a + +b + +c;

console.log(d);
