let a1 = 4 > 3 // true
let a2 = 4 < 3 // false
let a3 = 4 >= 3 // true
let a4 = 4 <= 3 // false
let a5 = 4 == 4 // true
let a6 = 4 === 4 // true
let a8 = 4 != 4 // false
let a9 = 4 !== 4 // false
let a10 = 4 != "4" // false
let a11= 4 == "4" // true
let a12 = 4 === "4" //false


console.log(a1)

console.log(a2)

console.log(a3)

console.log(a4)

console.log(a5)

console.log(a6)

console.log(a8)

console.log(a9)

console.log(a10)

console.log(a11)

console.log(a12)

console.log(" ")

console.log('number2')


console.log(" ")    
// number 2

let one = 4 > 3 && 10 < 12;   //true
let two = 4 > 3 && 10 > 12;   // false
let three = 4 > 3 || 10 < 12;  // true
let four = 4 > 3 || 10 > 12;  // true
let five = !(4 > 3);  // false
let six = !(4 < 3);  // true
let eight = !(4 > 3 && 10 < 12);  // false
let nine = !(4 > 3 && 10 > 12);  // true
let ten = !(4 === "4");  // true

console.log(one)
console.log(two)
console.log(three)
console.log(four)
console.log(five)
console.log(six)
console.log(eight)
console.log(nine)
console.log(ten)


// number3


console.log(" ")

console.log('number3')


console.log(" ")


let yourAge = prompt('Nasaa oruulna uu?')
let myAge = 31

if(yourAge > myAge){
    console.log("Ta nadaas ah ym baina.")
}else{
    console.log('Ta nadaas duu ym baina.')
}



console.log(" ")

console.log('number4')


console.log(" ")

//number4
//Ajiliin odor amraltiin osor esehiig olooroi

let day = Number(prompt('odoroo oruulna uu?'))
let dayName;
switch(day){    
    case 1: 
        dayName = 'Monday ajliin Odor'
    break;
    case 2: 
        dayName = 'Tuesday ajliin Odor'
    break;
    case 3: 
        dayName = 'Wednesday ajliin Odor';
    break;
    case 4: 
        dayName = 'Thursday ajliin Odor';
    break;
    case 5: 
        dayName = 'Friday ajliin Odor';
    break;
    case 6: 
        dayName = 'Saturday ajliin Odor';
    case 7: 
        dayName = 'Sunday ajliin Odor';
    break;      
}
alert(dayName)


console.log(" ")

console.log('number5')


console.log(" ")



/*
Number 5

Hereglegchees tsag oruulah, tsag tutamd unelgee ogoh skript bicheerei.
Tuhain huniii tsaling tootsootoi
*/


let hours = (prompt)('Ajillasan tsagaa oruulna uu?');
let ratePetHour = 28 
if((hours <= 20) && (bodolt = hours * ratePetHour)){
    alert(" muu ajilasan bn " +  "Ta" + " " + (hours) + " " + "tsag ajilsan baina \n" + bodolt + '$')
} else if((hours <= 30) && (bodolt = hours * ratePetHour)){
    alert(" dund zergiin ajilasan bn " +  "Ta" + " " + (hours) + " " + "tsag ajilsan baina \n" + bodolt + '$')
}else if((hours <= 40) && (bodolt = hours * ratePetHour)){
    alert(" mash sain ajilasan bn " +  "Ta" + " " + (hours) + " " + "tsag ajilsan baina \n" + bodolt + '$')
}else{
    alert('tanii oruulsan tsag buruu bn')
}