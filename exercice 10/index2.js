let number2 = 100;

//Définir un nombre "number" //


function getRandomNumber() {
    return (Math.round(Math.random() * (999 - 100)) + 100)
}

// Définis ma fonction de nombre aléatoire de 100 à 999 inclus //
let compteur2 = 0;
let currentNumber2;


for (currentNumber2=0; currentNumber2 !== number; compteur2++) {
    currentNumber2 = getRandomNumber(); // Génère un nombre aléatoire//  
}

console.log(`Le chiffre caché ${number2} a été trouvé en ${compteur2} fois`)