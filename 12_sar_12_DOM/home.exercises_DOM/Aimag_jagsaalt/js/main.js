let aimags = document.querySelectorAll("ul li");
console.log(aimags[0].textContent);
console.log(aimags[aimags.length - 1].textContent);
console.log(document.getElementById("aimag-315").textContent);

for (let i = 0; i < aimags.length; i++) {
  aimags[i].style.cssText =
    "border: 2px solid ; border-radius: 5px; list-style: none; text-align: center; width: 50%; margin: 10px auto 10px auto; font-size:30px; text-size:50px; padding:10px 0 10px 0 ;";
}
for (let j = 0; j < aimags.length; j++) {
  if (aimags[j].id[6] == 1) {
    aimags[j].style.borderColor = "yellow";
    aimags[j].style.color = "yellow";
  }
  if (aimags[j].id[6] == 2) {
    aimags[j].style.borderColor = "teal";
    aimags[j].style.color = "teal";
  }
  if (aimags[j].id[6] == 3) {
    aimags[j].style.borderColor = "orange";
    aimags[j].style.color = "orange";
  }
  if (aimags[j].id[6] == 4) {
    aimags[j].style.borderColor = "brown";
    aimags[j].style.color = "brown";
  }
  if (aimags[j].id[6] == 5) {
    aimags[j].style.borderColor = "red";
    aimags[j].style.color = "red";
  }
}
