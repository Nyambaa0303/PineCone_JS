// 4 n toonii hamgiin baga toog ol

let a = prompt("a toog oruulna uu")
let b = prompt("b toog oruulna uu")
let c = prompt("c toog oruulna uu")   
let d = prompt("d toogoo oruulna uu")


if(a < b && a < c && a < d){
    console.log('A too n hamgiin baga baina:',a)
}else if(b < a && b < c && b < d){
    console.log('B too n hamgiin baga baina:',b)
}else if(c < a && c < b && c < d){
    console.log('C too n hamgiin baga baina:', c)
}else{
    console.log('D too n hamgiin baga baina:', d )
}


