let n = prompt('Toogoo oruulna uu?');
let count = [];

for(let i = 0; i < 10; i++){
    for(let j = 0; j < n.length; j++){
        if(i === n[j]){
            count[i] = count[i] + 1;
        } else{
            count[i] = 0;
        }
    }  
}
for(let i = 0; i < count.length; i++){
    console.log( "[" + i + "] :" + count[i]);
}