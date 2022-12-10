let num = 5;
let n = '';
for (let i = 0 ; i < num; i++) {
  for (let j = 1; j <= i + 1; j++) {
    n += j ;
  }
  n += '\n';
}
console.log(n);

// 2. Давхар давталт 2

console.log(' ')
console.log('--------------2. Давхар давталт 2--------- ')
console.log(' ')

let m = 5;
let k = '';

for(let i = 0 ; i < m; i++){
  for(let j = m ; j > i; j --){
    k += j;
  }
  k += '\n';
}
console.log(k);