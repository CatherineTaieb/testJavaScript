const gender = "Masculin";

if (gender.toLowerCase()==="masculin") {
    console.log (`Vous êtes de sexe ${gender.toLowerCase()}.`);
}
    else if (gender.toLowerCase()==="féminin"){
        console.log (`Vous êtes de sexe féminin.`);
    }
else {
    console.log (`Erreur 404 : genre non trouvé`);
}