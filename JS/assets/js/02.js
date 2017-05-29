// -- Déclarer un tableau numérique
var monTableau = []
var myArray    = new Array;

// -- Affecter des Valeur à un tableau Numérique
// -- alt + shift + ver le bas = control D -- alt+click multi-cursor
monTableau[0] = "Hugo";
monTableau[1] = "Tanguy";
monTableau[2] = "Géraldine";

// -- pour afficher le contenu de mon tableau numérique dans la console
console.log(monTableau[0]);
console.log(monTableau[2]);
console.log(monTableau);

// -- Déclarer et affecter des valeurs à un tableau numérique
var nosPrenoms = ["Yimin", "Alex", "Cristian", "Tristan"];
console.log(nosPrenoms);
console.log(typeof NosPrenoms);

// -- Déclarer et affecter des Valeurs à un objet.(pas de tableau associatif en JS)
var Coordonnee = {
    "prenom"    :   "Hugo" ,
    "nom"       :   "LIEGEARD" ,
    "age"       :   27 ,
}

console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Comment créer et affecter des valeurs à un tableau à 2 dimensions.

// -- Je vais créer 2 tableaux numériques
var listeDePrenoms = ["hugo", "Rodrigue", "Kristie"];
var listeDeNoms    = ["LIEGEARD", "NOUEL", "SOUKAI"];

// -- Je vais créer un tableau un tableau à deux dimensions à partir de mes 2 tableaux précédents
var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);

// -- Afficher un Nom et un Prénom sur ma page html !
document.write(Annuaire [0] [1]);
document.write("");
document.write(Annuaire [1] [1]);

// -- Exercice
/*NOPE!!!!
var LesNoms = [ "M. a", "Mme b", "M c", "Mme d", "Mme e"];
var LesPrenoms = ["Stag1", "Stag 2", "Stag3", "Stag4", "Stag5"];
var ageStage =[ 22, 21, 23, 19, 20];
var AnnuaireDesStagiaires = [LesNoms, LesPrenoms, ageStage];
console.log(AnnuaireDesStagiaires);

var stagiaires = ["NomA PrenomsA", "NomB PrenomB", "NomC PrenomC", "NomD PrenomD", "NomE PrenomE"];
var phones     = [ 00000000 , 11111111 , 22222222 , 33333333 , 44444444];
var AnnuaireDesStagiaires = [stagiaires, phones];
console.log(AnnuaireDesStagiaires);
console.log(typeof AnnuaireDesStagiaires);

document.write(AnnuaireDesStagiaires [0] [2]);
document.write("");
document.write(AnnuaireDesStagiaires [1] [2]);
document.write("");
document.write(AnnuaireDesStagiaires [2] [2]);
*/

// JSON
var AnnuaireDesStagiaires = [
    {"prenom" : "Hugo", "nom" : "LIEGEARD", "tel" : "07 83 97 15 15" },
    {"prenom" : "Jules", "nom" : "LOL", "tel" : "07 83 97 00 10"},
    {"prenom" : "Lana", "nom" : "SUKOTO", "tel" : "06 00 90 33 44"},
];
console.log(AnnuaireDesStagiaires);
console.log(typeof AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[1].nom);   // --LOL

// -- Exemple pour la 3D

// -- ajouter un element

var Couleurs = ["Rouge", "Jaune", "Vert"];

// si je souhaite ajouter un élément dans mon tableau je fait appel à la fonction push()
// qui pe renvoi le nombre d'éléments de mon tableau

var nombreElementsDeMonTableau = Couleurs.push("orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

// -- NB : La Fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.

//  ---------------------------RECUPERER ET SORTIR LE DERNIER ELEMENT

// -- La fonction pop() me permet de supprimer le dernier élément de mon tableau et d'en récupérer
// -- cette valeur dans une variable

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

// la meme chose est possible avec le premier élément en utilisant la fonction shift();
// NB: La fonction splice() vous permet de faire sortir un ou plusieurs éléments de votre tableau.

