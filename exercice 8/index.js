let i = 0; //déclaration de la variable i = 0//

while (i<=20){ 
    // tant que i n'est pas égal à 20//

    if(i===10){ //1ère condition : si i = 10, alors l'écrire en bleu//
        console.log("%c" + i, "color:blue ; font-size : 2rem");
    }

    else if(i===20){ //2ème condition : si i = 20 alors fin du game (mis en vert, sinon string mis en noir//
        console.log ("%c" + "20, fin du game", "color:green")
    }

    else{ //sinon écrire juste i
    console.log(i); // si ce "console.log() est écrit avant le if : écris deux fois le nombre 10. Une fois écrit en vert, une autre en bleu. //
    }

    i+=2; //incrémenter number de +2
   
}


