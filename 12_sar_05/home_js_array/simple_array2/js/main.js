let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log("\n");
// '=====================array dahi companii Length hevle======================
console.log("==========Array s ehnii 3-n companiig haichilj av=======");

for (i = 0; i < 3; i++) {
  console.log(itCompanies[i]);
}

console.log("\n");
// '===================array dahi companii Length hevle======================
console.log("====Array s suuliin 3-n companiig haichilj=====");

for (i = 4; i < 7; i++) {
  console.log(itCompanies[i]);
}

console.log("\n");
// '===================array dahi companii Length hevle======================
console.log("====Array s dundah companiig haichilj av=====");

for (i = 0; i < itCompanies.length; i++) {
  if (i == Math.floor(itCompanies.length / 2)) {
    console.log(itCompanies[i]);
  }
}

console.log("\n");
// '===================array dahi companii Length hevle======================
console.log("====Array s dundah companiig haichilj av=====");

console.log(itCompanies.slice(1));

console.log(itCompanies.slice(0, -1));
