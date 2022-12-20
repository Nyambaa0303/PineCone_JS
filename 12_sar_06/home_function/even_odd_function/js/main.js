// 1. 2 тоон утга авдаг 2 function үүсгэ.
let a;
function numberONe(){
    a = Number(prompt('toogoo oruulna uu?'));
    console.log(a + ' ' + 'min too')
};
numberONe();
let b;
function numberTwo(){
     b = Number(prompt('Toogoo oruulana uu?'));
     console.log(b + ' ' + 'max too')
};
numberTwo();

// 2. 2 авсан тоон утгын хоорондох тэгш тоонуудын array буцаадаг 1 function.
console.log('====Tegsh toog olog===')

function even(){
    let arr=[];
    for(i = a; i <= b; i++){
        if(i % 2 == 0){
            arr.push(i);
            
        }
    }
    console.log(arr);
    return arr;
}
even();

// 3. 2 авсан тоон утгын хоорондох сондгой тоонуудын array буцаадаг 1 function.

console.log('==== Sondgoi toog oloh====')

function odd(){
    let arr = [];
    for(i = a; i <= b; i++){
        if(i % 2 !== 0){
            arr.push(i);
        }
    }
    console.log(arr);
    return arr;
}
odd();