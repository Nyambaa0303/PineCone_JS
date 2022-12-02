// // let n = Number(prompt("Toogoo oruulna uu?"));
// // let m = 2;
// // for (let i = 3; i <= 100; i++) {
// //   while (m < i) {
// //     if (i % m != 0) {
// //       m++;
// //     }
// //   }
// // }



// // let ok = true;
// // for (let j = n; j < 100; j++) {
// //   for (let i = 1; i <= n; i++) {
// //     if (n % i == 0) {
// //       ok = false;
// //       break;
// //     } else {
// //       ok = true;
// //     }
// //   }

// //   if ((ok = true)) {
// //     console.log("anhnii too mon");
// //   } else {
// //     console.log("anhnii too bish");
// //   }
// // }


// let n = Number(prompt("Toogoo oruulna uu?"));
// let m = n
// let ok = true


//   for(i = 4; i < 100; i++ ){
//       if(n % i === 0){     
//           ok = false
//           console.log('Anhnii too bish');
//           break
//     }else{
//       ok = true
//       console.log('Anhnii too mon');
//     }
// }



let n = Number(prompt("Toogoo oruulna uu?"));

let ok = true

if(n === 2){
  console.log('Anhnii too mon')

}else{
  let i = 2
  while(i < n){
    if(n % i === 0){
      ok = false
      break
    }
    i++
  }
}if(ok){
           console.log('Anhnii too mon')
        }else{
              console.log('Anhnii too bish')
            }



