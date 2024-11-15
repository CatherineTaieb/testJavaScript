function isEven (number) {
    return number % 2 === 0;
}


function getRandomNumber(){
    return Math.round(Math.random()*100)
}



const sequence = [];

while (true) {

    let number1 = getRandomNumber();

    if (isEven(number1)) {

        let number2 = getRandomNumber();
            if(!isEven(number2)) {
                
                let number3 = getRandomNumber();
                if(!isEven(number3)) {
                    
                sequence.push(number1, number2, number3)

                break;
                }
      
        }
    }

}

console.log(sequence);