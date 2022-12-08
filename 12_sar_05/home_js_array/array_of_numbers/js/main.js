let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

console.log(arrayOfNumbers)

console.log("\n");
// '==========================================================================
console.log("==========Array dotorhi toonuudiin niilberiig ol=======");
let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum = sum + arrayOfNumbers[i];
}
console.log(sum);

console.log("\n");
// '==========================================================================
console.log("==========Array dotorhi hamgiin ih toog ol=======");
let max = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > max) {
    max = arrayOfNumbers[i];
  }
}
console.log(max);

console.log("\n");
// '==========================================================================
console.log("==========Array dotorhi hamgiin baga toog ol=======");
let min;


for(let i = 0; i < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i] > min){
    }else{
        min = arrayOfNumbers[i];
    }
}
console.log(min);

console.log("\n");
// '==========================================================================
console.log("========== Array ehend duriin neg toog nem =======");

console.log(arrayOfNumbers.unshift(12));
console.log(arrayOfNumbers.push(45));
console.log(arrayOfNumbers)