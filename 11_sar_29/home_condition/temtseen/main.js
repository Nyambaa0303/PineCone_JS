let score1 = 123
let score2 = 108;
let score3 = 113;

let score4 = 132;

let score5 = 91;

let score6 = 110;

let teamA = (score1 + score2 + score3) / 3;
let teamB = (score3 + score4 + score5) / 3;

if (teamA > 100 || teamB > 100) {
  if (teamA > teamB) {
    alert("A team win");
  } else {
    alert("B team win");
  }
} else if (teamA == teamB) {
  alert("A team vs B team tentssen");
} else if (teamA < 100 && teamB < 100) {
  alert("Yalagch baihgvi");
}
