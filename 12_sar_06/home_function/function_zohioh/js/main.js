// Ogogdaon hoyr toonii ihiig olno uu?==========
console.log('======= 1. Өгөгдсөн 2 тооны ихийг олох функц бич. =========');

function findMax(a, b){
    let result = '';
    if(a > b){
        result = a + ' ' + 'too ih baina?';
    }else{
        result = b + ' ' + 'too ih baina?';
    }
    return result;
}
console.log(findMax(8, 9));
