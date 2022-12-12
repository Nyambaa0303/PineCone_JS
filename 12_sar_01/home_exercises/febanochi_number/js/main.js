let n = Number(prompt("Toogoo oruulna uu"));
let a = 0;
let b = 1;
let sum;
for(i = 0; i < n; i++){
    sum = a;
    sum = a + b;
    a = b;
    b = sum;
    console.log(sum)
}
