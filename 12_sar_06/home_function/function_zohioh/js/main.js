// Ogogdaon hoyr toonii ihiig olno uu?==========
console.log("======= 1. Өгөгдсөн 2 тооны ихийг олох функц бич. =========");

function findMax(a, b) {
  let result = "";
  if (a > b) {
    result = a + " " + "too ih baina?";
  } else {
    result = b + " " + "too ih baina?";
  }
  return result;
}
console.log(findMax(8, 9));

// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич.
//  Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаа

console.log('\n');
console.log('========2. =============')
let arr = parseInt(prompt('Massiv n toogoo oruulna uu?'));
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let count = 0;
function myFunction(array){
    for(let i = 0; i < array.length; i++){
        if(arr == array[i]){
            return i;
        }
    }
    return -1;
}
console.log(myFunction(array));

/*. 3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич.
 Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
*/

console.log('\n');
console.log('========3. =============')

let text = prompt('Text ee oruulna uu?');
let array1 = "Ta mashinaa bairluulahdaa zoriulaltiin zogsoold bairluulsan uu?";

function text1(array1){
    for(i = 0; i < array1.length; i++){
        if(text == array1[i]){
            return i;
        }
    }
    return -1;
}
console.log(text1(array1));

/* 4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.
 */

console.log('\n');
console.log('====4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.=====')

let max = 20;
let min = 10;
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  console.log(randomRange(min, max));

//   5. Өгөгдсөн array - ийн дундажыг олох функц бич.

console.log('\n');
console.log('====5. Өгөгдсөн array - ийн дундажыг олох функц бич.=====')

let arr1 = [4, 3, 5, 1, 6, 9];
let dundaj = 0;
let niilber = 0;
function func(arr1){
    for(let i = 0; i < arr1.length; i++){
        niilber = niilber + arr1[i];
        dundaj = Math.floor(niilber / arr1.length)
    }

    return dundaj;
}
console.log(func(arr1));

//   6. Өгөгдсөн array - ийн дундажыг олох функц бич.

console.log("\n");
console.log("====6. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.=====");

let arr2 = [4, 23, 5, 12, 0, 6];
let niilber2 = 0;
function arrNiilber(arr2) {
  for (i = 0; i < arr2.length; i++) {
    niilber2 = niilber2 + arr2[i];
  }
  return niilber2;
}
console.log(arrNiilber(arr2));

//7. Өгөгдсөн тоо анхны эсэхийг олох функц бич.

console.log("\n");
console.log("====7. Өгөгдсөн тоо анхны эсэхийг олох функц бич.=====");

let primeNum = Number(prompt("Toogoo oruulna uu?"));

function prime(primeNum) {
  for (i = 2; i < primeNum; i++) {
    if (primeNum % 2 == 0) {
      return "Anhnii too bish";
    }
  }
  return "Anhnii too mun";
}
console.log(prime(primeNum));


