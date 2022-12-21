// Buttonuudaa zarlasan baidal

const buttonBlack = document.getElementById('btn1');
const buttonBrown = document.getElementById('btn2');
const buttonRed = document.getElementById('btn3');
const buttonBlue = document.getElementById('btn4');
const buttonAqua = document.getElementById('btn5');
const buttonGray = document.getElementById('btn6');

// ongo n soligdah backgroundaa zarlasan baidal

const backGround = document.getElementById('img');

// black 
buttonBlack.onclick = function(){
    document.getElementById('img').style.backgroundColor = "#000000";
}

// orange
buttonBrown.onclick = function(){
    document.getElementById('img').style.backgroundColor = "#D2691E";
}

// red 
buttonRed.onclick = function(){
    document.getElementById('img').style.backgroundColor = "#A52A2A";
}

// blue 
buttonBlue.onclick = function(){
    document.getElementById('img').style.backgroundColor = "#483D8B";
}

// aqua 
buttonAqua.onclick = function(){
    document.getElementById('img').style.backgroundColor = "#5F9EA0";
}

// gray 
buttonGray.onclick = function(){
    document.getElementById('img').style.backgroundColor = "gray";
}


