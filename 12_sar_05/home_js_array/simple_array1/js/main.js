let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

console.log("\n");
// '=====================array dahi companii Length hevle======================
console.log(
  "=====================array dahi companii Ld hevle======================"
);
console.log("\n");
let count = 0;
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i], i);
}

console.log("\n");
// '=====================ehnii compani, dund boon suulchiin companiig hevle======================
console.log(
  "=====================array dahi companii Legth hevle======================"
);
console.log("\n");

for (let i = 0; i <= itCompanies.length; i++) {
  if (i == 0) {
    console.log(itCompanies[i]);
  } else if (i == Math.floor(itCompanies.length / 2)) {
    console.log(itCompanies[i]);
  } else if (i == itCompanies.length - 1) {
    console.log(itCompanies[i]);
  }
}

console.log("\n");
// '=====================Companii ner tus buriig neg negeer n tom usgeer solij bich======================
console.log(
  "=====================Companii ner tus buriig neg negeer n tom usgeer solij bich======================"
);

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

console.log("\n");
// '=====================Companii ner tus buriig neg negeer n tom usgeer solij bich======================
console.log(
  "=====================Arrayiig oguulber bolgon hevle======================"
);
console.log(itCompanies);

let k = "";
for (i = 1; i < itCompanies.length; i++) {
  k += itCompanies[i];
  k += ", ";
}
console.log(k + " " + "zereg medeelliin tehnologiin tomoohon companiud.");
