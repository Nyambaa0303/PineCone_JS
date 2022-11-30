let a = prompt('a toog oruulna uu?')
let b = prompt('b toog oruulna uu?')
let c = prompt('c toog oruulna uu?')

if(a == b && a == c){
    console.log('Buh too tentsvv ba hamgiin baga bas hamgiin ih too n', a , 'baina')
}else if(a > b && a > c){
    console.log('A too n hamgiin ih baina:', a)
}else if(b > a && b > c){
    console.log('B too n hamgiin ih baina:', b)
}else if(c > a && c > b){
    console.log('C too n hamgiin ih baina:', c)
}

if(a < b && a < c){
    console.log('A too n hamgiin baga baina:', a)
}else if(b < a && b < c){
    console.log('B too n hamgiin baga baina:', b)
}else if(c < a && c < b){
    console.log('C too n hamgiin baga baina:', c)
}