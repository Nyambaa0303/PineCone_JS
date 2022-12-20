
    let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20, 12, 45, 100, -1 ];
function arrSorter(arr){
  for(let i = (arr.length - 1); i >= 0; i--){
    for(let j = 1; j <= i; j++){
        if(arr[j - 1] > arr[j]){
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr)
}
arrSorter(arr);