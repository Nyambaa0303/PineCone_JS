
let profileEl = document.getElementById("profile");

fetch("https://randomuser.me/api")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((api) => {
    for (let i = 0; i < 1; i++) {
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

  // ariin huudasnii js code

  let leftEl = document.getElementById("left");

fetch("https://randomuser.me/api")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    for (let i = 0; i < 1; i++) {
      const pro1El = document.createElement("div");
      pro1El.className = `pro1 pro1${i}`;
      const cards = `<div class = "card card${i}">
        <div class = "call"> 
        <img src="${data.results[i].picture.thumbnail}" alt="pp">
        <h2 class="title">${data.results[i].name.title} : ${data.results[i].name.first}  ${data.results[i].name.last}</h2>
        <p class = "phone">Phone: ${data.results[i].phone}</p>
        <p class = "mail">Email: ${data.results[i].email}</p>
        </div>
        <div class = "bottom">
        <p class = "gender"><span class="span"></span>Gender: ${data.results[i].gender}</p>
        <p class = "age"><span class="span1"></span>Age: ${data.results[i].dob.age}</p>
        <p><span class="span2"></span>Date: ${data.results[i].registered.date}</p>
        
        </div>
        <div class = "spend">Total Amount Spent $ 2,314</div>
        </div>`;
      pro1El.innerHTML = pro1El.innerHTML + cards;
      leftEl.append(pro1El);
    }
  });

  // 3 dahi card 

  let rigthEl = document.getElementById("right");

fetch("https://randomuser.me/api")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((rigth) => {
    for (let i = 0; i < 1; i++) {
      const pro2El = document.createElement("div");
      pro2El.className = `pro2 pro2${i}`;
      const cards = `<div class = "card card${i}">
        <div class = "call"> 
        <img src="${rigth.results[i].picture.thumbnail}" alt="pp">
        <h2 class="title">${rigth.results[i].name.title} : ${rigth.results[i].name.first}  ${rigth.results[i].name.last}</h2>
        <p class = "phone">Phone: ${rigth.results[i].phone}</p>
        <p class = "mail">Email: ${rigth.results[i].email}</p>
        </div>
        <div class = "bottom">
        <p class = "gender"><span class="span"></span>Gender: ${rigth.results[i].gender}</p>
        <p class = "age"><span class="span1"></span>Age: ${rigth.results[i].dob.age}</p>
        <p><span class="span2"></span>Date: ${rigth.results[i].registered.date}</p>
        
        </div>
        <div class = "spend">Total Amount Spent $ 2,314</div>
        </div>`;
      pro2El.innerHTML = pro2El.innerHTML + cards;
      rigthEl.append(pro2El);
    }
  });
