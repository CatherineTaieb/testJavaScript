let number = 999;

//Définir un nombre "number" //


function getRandomNumber() {
    return (Math.round(Math.random() * (999-100 ))+100);
}

// Définis ma fonction de nombre aléatoire de 100 à 999 inclus //


let compteur=0; // i=nombre occurence //
let currentNumber; //currentNumber = nombre généré aléatoirement : non défini avant la boucle//

while (currentNumber!==number) { //Tant que currentNumber n'est pas égal à mon number : //

    currentNumber=getRandomNumber(); // Génère un nombre aléatoire//
    compteur++; //incrémente compteur de 1 //

    //Recommence la boucle // 
}




    console.log (`Le chiffre caché ${number} a été trouvé en ${compteur} fois`)



