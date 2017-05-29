// -------------------------LES FONCTIONS--------------------------//

// -- Déclarer une fonction
// -- Cette fonction en retourne aucune valeur
function DitBonjour() {
    // Lors de l'appel de la fonction, les instructions ci-dessous seront exécutées
    alert("Bonjour !");
}

// -- Je vais appeler ma fonction "DitBonjour" et déclencher ses instructions.
// DitBonjour();

// Les fonctions vont recuperer des paramètre, des variables lesquelles seront
// utilisées à l'interieur de la fonction

// -- Déclarer une fonction qui prend une variable en paramètre
// -- function Bonjour (variableA, variableB) 
// Déclarer une fonction aui prend une variable en paramètre
function Bonjour(Prenom, Nom){
    document.write("<p>Hello <strong> " + Prenom + " " + Nom + "</strong> !</p>");
}

// -- Appeler / utiliser une Fonction avec un Paramètre
Bonjour("Thiago", "ARAUJO");

// ou

var Prenom = "Thiago"
var Nom    = "ARAUJO"

Bonjour(Prenom, Nom);


// --------------------------------------EXERCICE-------------------------------------//
// Créer une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre

/*
function Soma(number1, number2){
     document.write("result = " + (number1 + number2));
}
Soma(6,8);
*/

function addition(nb1, nb2){
    let resultat = nb1 + nb2;
    return resultat;
}

console.log(addition(3,4));

function plus(nb1, nb2){
     return nb1+nb2; // let resultat = nb1 + nb2
}
 document.write("result = " + plus(1,2));

