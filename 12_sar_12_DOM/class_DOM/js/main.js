let myJsDom = document.getElementById("helloText");
myJsDom.innerHTML = "Hello World!";
myJsDom.style.color = "red";
myJsDom.style.textAlign = "center";

let test = document.getElementById("text");
test.innerHTML = "JS DOM :  DOCUMENT OBJECT MODEL";
test.style.backgroundColor = "aqua";
test.style.textAlign = "center";

let student = document.getElementsByClassName("name");

let n = 3;
for (i = 0; i < 3; i++) {
  student[i].style.backgroundColor = "aqua";
  student[i].style.textAlign = "center";
  student[i].style.listStyle = "none";
}
