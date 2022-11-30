let a = 3000;
let b = 27500;
let c = 100000;

let gonchig_a = a >= 5000 && a <= 30000 ? (a * 15) / 100 : (a * 20) / 100;
let gonchig_b = b >= 5000 && b <= 30000 ? (b * 15) / 100 : (b * 20) / 100;
let gonchig_c = c >= 5000 && c <= 30000 ? (c * 15) / 100 : (c * 20) / 100;

console.log(gonchig_a + a);
console.log(gonchig_b + b);
console.log(gonchig_c + c);
