let n = 1;
let profileEl = document.getElementById("profile");

fetch("https://randomuser.me/api")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((api) => {
    for (let i = 0; i < n; i++) {
      const proEl = document.createElement("div");
      proEl.className = `pro pro${i}`;
      const cards = `<div class = "card card${i}">
        <div class = "call"> 
        <img src="${api.results[i].picture.thumbnail}" alt="pp">
        <h2 class="title">${api.results[i].name.title} : ${api.results[i].name.first}  ${api.results[i].name.last}</h2>
        <p class = "phone">Phone: ${api.results[i].phone}</p>
        <p class = "mail">Email: ${api.results[i].email}</p>
        </div>
        <div class = "bottom">
        <p class = "gender"><span class="span"></span>Gender: ${api.results[i].gender}</p>
        <p class = "age"><span class="span1"></span>Age: ${api.results[i].dob.age}</p>
        <p><span class="span2"></span>Date: ${api.results[i].registered.date}</p>
        
        </div>
        <div class = "spend">Total Amount Spent $ 2,314</div>
        </div>`;
      proEl.innerHTML = proEl.innerHTML + cards;
      profileEl.append(proEl);
    }
  });
