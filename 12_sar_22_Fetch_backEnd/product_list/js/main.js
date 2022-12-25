const squaretEl = document.getElementById("square");
const inputEl = document.getElementById('input');
const button = document.getElementById('btn');

let n = 10;
fetch("https://dummyjson.com/products")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((products) => {
    for (let i = 0; i < n; i++) {
      const div2El = document.createElement("a");
      div2El.id = `div${i}`;
      const cards = `<div class = "card card${i}">
        <img src = "${products.products[i].thumbnail}" alt = ""/>
        <h3 class = "title">${products.products[i].title}</h3>
        <p>${products.products[i].description}</p>
        <p>${products.products[i].brand}</p>
        <p class = "price">${products.products[i].price}<b>$<b/></p>
        </div>`;
      cards.id = `div${i}`;
      div2El.innerHTML = div2El.innerHTML + cards;
      squaretEl.append(div2El);
    }
  });
