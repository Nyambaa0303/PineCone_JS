const a = 5;
let num = prompt("1-10 dotor too oruulna uu?");
if (a == num) {
  alert("Bayr hurgii ta amjilttai talaa");
} else {
  alert("Buruu bn!!");
}

// asuult

let answer1 = prompt("Mongol ulsiin niislel yu ve?");
let answer2 = prompt("Mongol uls heden aimagtai ve?");
let answer3 = prompt("Bi hen be?");
let answer4 = prompt("Minii baruun gar taliin suragch hen be?");
let answer5 = prompt("Minii zuun gar taliin suragch hen be?");

let question1 = "ulaanbaatar";
let question2 = "horin neg";
let question3 = "nyambaatar";
let question4 = "tsagaan";
let question5 = "amaraa";

let score = 0;

if (answer1.toLowerCase() == question1.toLowerCase()) {
  score++;
}
if (answer2.toLowerCase() == question2.toLowerCase()) {
  score++;
}
if (answer3.toLowerCase() == question3.toLowerCase()) {
  score++;
}
if (answer4.toLowerCase() == question4.toLowerCase()) {
  score++;
}
if (answer5.toLowerCase() == question5.toLowerCase()) {
  score++;
}
if (score == 0) {
  alert("ta" + " " + score + " " + "avlaa. Dahin oroldono uu?");
} else {
  alert("ta" + " " + score + " " + "onoo avlaa bayr hurgii");
}
