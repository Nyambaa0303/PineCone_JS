const button = document.getElementById("input");
const selectEl = document.getElementById("colorSelect");

alert("No. of items : " + selectEl.length + "\n" + selectEl.innerText);

button.addEventListener("click", () => {
  selectEl.remove(selectEl.selectedIndex);
  alert("No. of items : " + selectEl.length + "\n" + selectEl.innerText);
});
