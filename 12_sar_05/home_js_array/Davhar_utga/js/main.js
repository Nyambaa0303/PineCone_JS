let array = [4, 2, 34, 4, 1, 12, 1, 4];
let davhar = [];
let d_i = 0;
for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] == array[j]) {
      davhar[davhar.length] = array[i];
    }
  }
  for (let k = davhar.length - 2; k >= 0; k--) {
    if (davhar[davhar.length - 1] == davhar[k]) {
      davhar.length--;
    }
  }
}
console.log(davhar);
