let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 24,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];

// ergtei emegtei suragchidiig todorhoil
console.log(
  "-----Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих -------"
);
function student(n) {
  let male = 0;
  let female = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i].gender == "male") {
      male++;
    } else {
      female++;
    }
  }
  let m = {
    male: 0,
    female: 0,
  };
  m.female = female;
  m.male = male;

  return m;
}

console.log(student(students));
//  Сурагчдын насны дунджийг олох  функц бичих
console.log("\n");
console.log("----- Сурагчдын насны дунджийг олох функц бичих-------");

let ageSum = 0;
for (i = 0; i < students.length; i++) {
  debugger;
  if (i >= 0) {
    ageSum = ageSum + students.age;
  }
}
console.log(ageSum);
