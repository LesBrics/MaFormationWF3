// ---------------LES OPERATEURS ARITHMETIQUES---------------------

//  ################ L'ADDITION ################################

// -- Déclaration de plusieurs variable à la suite
var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;

// --Addition de nb1 + nb2 avec l'opérateur "+"
resultat = nb1 + nb2;

// -- Affichage du résultat dans la console.
console.log("L'addition de nb1 et nb2 est égale à : " + resultat);

// ################## LA SOUSTRACTION #############################
// -- La soustraction de nb1 et nb2 avec l'opérateur "-" 
resultat = nb1 - nb2;

// -- L'Affichage du résultat dans la console.
console.log("L'soustraction de nb1 et nb2 est égale à : " + resultat);

// ################## LA MULTIPLICATION #############################
// -- La multiplication de nb1 et nb2 avec l'opérateur "*" 
resultat = nb1 * nb2;

// -- L'Affichage du résultat dans la console.
console.log("La multiplication de nb1 et nb2 est égale à : " + resultat);

// ################## LA DIVISION #############################
// -- La division de nb1 et nb2 avec l'opérateur "/" 
resultat = nb1 / nb2;

// -- L'Affichage du résultat dans la console.
console.log("La division de nb1 et nb2 est égale à : " + resultat);

// ################## MODULO #############################
// -- Le résultat du modulo est le reste de la division.
// -- Le modulo de nb1 et nb2 avec l'opérateur "%" 
resultat = nb1 % nb2;

// -- L'Affichage du résultat dans la console.
console.log("Le reste de la division de 'nb1' " + nb1 + " et 'nb2' " + nb2 + " est égale à : " + resultat);


// --------------- LES ECRITURES SIMPLIFIEES ---------------------

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 += 5; // -- Ce qui équivaut à écrire nb1 = nb1 + 5;
// Ici, j'ai incréménté et réaffecté
console.log(nb1);
// -- je peux procéder de la même manière pour tous les autres opérateurs arithmétiques :
// -- : "+", "-", "/", "*", "%"