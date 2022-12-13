let text = document.getElementById("bom");
bom.style.cssText = "background-color: aqua; text-align: center";
let button = document.getElementById("btn");
function myButton() {
  window.open(
    "https://www.youtube.com/watch?v=_5p4WrsvqKo&list=RD_5p4WrsvqKo&start_radio=1",
    "Nyambaatar",
    "width=300,height=200"
  );
  button.style.cssText = "background-color:green";
}
button.addEventListener("click", myButton);

// let message = "";
function remove() {
  let result = confirm("Та устгахдаа итгэлтэй байна уу ?");
  if (result) {
    alert = "Та OK товчийг дарлаа";
  } else {
    alert = "Та Cancel товчийг дарсан";
  }
  //   alert(result);
}
