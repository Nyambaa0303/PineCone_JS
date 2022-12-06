// //  10 hurtelh natural too

// let count = 1;

// while (count <= 10) {
//   console.log(count);
//   count++;
// }

// //  10 hurtelh natural toonii sondgoi toog ol

// let num = 1;

// while (num < 10) {
//   console.log(num);
//   num += 2;
// }

// // 10 hvrtelh natural toonii tegshiig ol

// let j = 2;

// while (j < 10) {
//   console.log(j);
//   j += 2;
// }
// // 100 hurtelh natural toonii niilberiig oloh programm bich

// const l = 100;
// let n = 0;

// let m = 0;

// while (n < l) {
//   n++;
//   m = m + n;
// }
// console.log(m);

// //N hurtelh natural toog hevleh bolon tedgeer toonii niilberiig ol

// let x = Number(prompt("N toog oruulna uu?"));

// y = 0;
// z = 0;

// while (y < x) {
//   console.log(y);
//   y++;

//   z = z + y;
// }
// console.log(z);

// // Ogogdson toog anhnii mon esehiig oloh kod bich

// let s = Number(prompt("Toogoo oruulna uu?"));

// let ok = true;

// if (s === 2) {
//   console.log("Anhnii too mon");
// } else {
//   let i = 2;
//   while (i < s) {
//     if (s % i === 0) {
//       ok = false;
//       break;
//     }
//     i++;
//   }
// }
// if (ok) {
//   console.log("Anhnii too mon");
// } else {
//   console.log("Anhnii too bish");

// }

// // Ogogdson interval dahi anhnii toog oloh programm bichne uu

let pNum1 = Number(prompt('Toogoo oruulna uu'))
let pNum2 = Number(prompt('Toogoo oruulna uu'))
let primeNumber = 0;
for(let i = pNum1; i <= pNum2; i++ ){
  //  console.log(i)
   for(let j = 2; j < i; j++){
    //  console.log(j)
    if(i % j == 0){
      primeNumber = i % j == 0;
      // console.log(primeNumber)
    }if(i[j] == 2){
      console.log(i + ' ' + 'Anhnii too mun')
    }else{
      console.log('Anhnii too bish')
    }
  }
}





// // N toonii factorial oloh programm bich

// let facNum = Number(prompt("Toogoo oruulna uu?"));
// let i = 1;
// let multiple = 1;

// while (i <= facNum) {
//   multiple = multiple * i;
//   i++;
// }

// console.log(multiple);

// // N too oruulahad tsipruudiin niilberiig ol


// let numb = Number(prompt('Toogoo oruulna uu?'));
// let sum = 0;

// for(let i = 0; i < numb.length; i++){
  
//   sum = sum + numb[i];

  
// }
// console.log(sum)


// // N toonii sondgoi too hevleh bolon sondgoi toonii niilberiig ol

// let Numb = Number(prompt('Toogoo oruulna uu'))

// let oddSum = 0;

// for (i = 1; i <= Numb; i++){
//     if(i % 2 != 0){
//       console.log(i)
//       oddSum = oddSum + i;
//     }
// }
// console.log(oddSum)

// //  N toonii tegsh tooog olj hevleh tedgeeriin niilberiig oloh programm bich

// let even = Number(prompt('toogoo oruulna uu'));
// let evenSum = 0;

// for(i = 1; i <= even; i++){
//   if(i % 2 == 0){
//     console.log(i);
//     evenSum = evenSum + i;
//   }
// }
// console.log(evenSum)

