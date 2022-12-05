let n = Number(prompt("Toogoo oruulna uu?"));

let reverseNum = 0;
let unit = 0;

console.log('tanii oruulsan too' + ' ' + n);

while(n !== 0){
    unit = n % 10;
    reverseNum = reverseNum * 10 + unit;
    n = Math.floor(n / 10);

} 
    console.log('Urvuu too' + ' ' +  reverseNum);