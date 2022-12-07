let randomNumber = Number(Math.floor(Math.random() * 100 + 1));
let number;
for(i = 1; i <= randomNumber; i++){
    number = Number(prompt('Toogoo oruulna uu?'))
    if(randomNumber > number){
        alert('Tanii oruulsan too baga');
    }
    else if (randomNumber < number){
        
        alert('Tanii oruulsan too ih baina');
    }
    else if (randomNumber == number){
        alert(randomNumber + '=' + number + 'Bayr hvrgii')
        break
    }
}
