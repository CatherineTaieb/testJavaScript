function isEven (i) {
    return i%2===0;
}

let test = isEven(4);
console.log(test)



function getRandomInt (min, max) {

    min = Math.ceil (min); // Arrondit à l'entier supérieur //
    max = Math.floor (max); // Arrondi à l'entier inférieur //

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let number = getRandomInt(0,100)

console.log (number)

    /* Math.floor : va arrondir à l'entier inférieur notre résultat (situé à l'intérieur des parenthèses)

    Math.random : génère un nombre flottant aléatoire entre 0 inclus et 1 exclu. Nombre flottant = nombre décimal

    (max - min + 1) : va déterminer l'intervalle souhaitée

    On multiplie avec * Math.random et (max - min + 1) pour appliquer la génération du nb aléatoire à l'intervalle souhaitée.

    + min : Permet d'ajuster l'intervalle pour que celle ci commence à min (on a demandé Math.floor avant notre résultat ce qui arrondit à l'entier inférieur ce qui pourrait donner un chiffre inférieur au min demandé.)

    */ 








tableau=[]

for (let i=0; i<3; i++) {
    tableau.push(getRandomInt(0,100))
}

console.log (tableau)


// Création d'un tableau avec trois nombres aléatoires)



while(isEven(tableau[0])) {
    console.log (tableau)
}


