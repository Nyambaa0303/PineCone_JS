let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');


function button1(){
    btn1.style.cssText = "width: 450px; transition:1s";
    btn2.style.cssText = "width: 120px; transition:1s";
    btn3.style.cssText = "width: 120px; transition:1s";
    btn4.style.cssText = "width: 120px; transition:1s";
    btn5.style.cssText = "width: 120px; transition:1s";
};

function button2(){
    btn1.style.cssText = "width: 120px; transition:1s";
    btn2.style.cssText = "width: 450px; transition:1s";
    btn3.style.cssText = "width: 120px; transition:1s";
    btn4.style.cssText = "width: 120px; transition:1s";
    btn5.style.cssText = "width: 120px; transition:1s";
};

function button3(){
    btn1.style.cssText = "width: 120px; transition:1s";
    btn2.style.cssText = "width: 120px; transition:1s";
    btn3.style.cssText = "width: 450px; transition:1s";
    btn4.style.cssText = "width: 120px; transition:1s";
    btn5.style.cssText = "width: 120px; transition:1s";
};

function button4(){
    btn1.style.cssText = "width: 120px; transition:1s";
    btn2.style.cssText = "width: 120px; transition:1s";
    btn3.style.cssText = "width: 120px; transition:1s";
    btn4.style.cssText = "width: 450px; transition:1s";
    btn5.style.cssText = "width: 120px; transition:1s";
};

function button5(){
    btn1.style.cssText = "width: 120px; transition:1s";
    btn2.style.cssText = "width: 120px; transition:1s";
    btn3.style.cssText = "width: 120px; transition:1s";
    btn4.style.cssText = "width: 120px; transition:1s";
    btn5.style.cssText = "width: 450px; transition:1s; transition-delay: 0.5s";
};




btn1.addEventListener("mouseover", button1);
btn2.addEventListener("mouseover", button2);
btn3.addEventListener("mouseover", button3);
btn4.addEventListener("mouseover", button4);
btn5.addEventListener("mouseover", button5);
