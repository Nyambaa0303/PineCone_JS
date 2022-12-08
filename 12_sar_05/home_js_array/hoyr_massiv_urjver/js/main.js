let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];
let arrNiilber = [];
let max ;
if(arr1.length > arr2.length){
    max = arr1.length;
}else{
    max = arr2.length;
}

for(let i = 0; i < max; i++){
    arrNiilber[i] = arr1[i] * arr2[i];
}
console.log(arrNiilber);