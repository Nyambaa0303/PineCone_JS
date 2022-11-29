const date = new Date();
const time = date.getHours();

let username = prompt("What is your name");

if (time < 12) {
  alert("Sain bn uu?" + username + " " + "Ugluunii mend.");
} else if (12 > time && time < 18) {
  alert("Sain bn uu?" + " " + username + " " + "Odriin Mend");
} else {
  alert("Sain bn uu?" + " " + username + " " + "Oroin Mend");
}

//  ternary operator

/*let age = 21;
let message;

if (age >= 18) {
  message = "Ta nasand hursen baina";
} else {
  message = "Ta huuhdeeree baina";
}*/

//       VS

let age = 21;
let message = age >= 18 ? "Ta nasand hursen baina" : "Ta huuhdeeree baina";
console.log(message);
