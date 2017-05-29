// -----------------LA CONCATENATION --------------------------

var DebutDePhrase      = "Aujourd'hui ";
var DateDuJour         = new Date(); // il a créé une instance de Date
// classe Date; pour recuperer le jour ou mois; vous utilisez une fonction
var SuiteDePhrase      = ", sont présent : ";
var NombreDeStagiaires = 19;
var FinDePhrase        = " stagiaires.<br>";

// -- Nous souhaitons maintenenat, grâce à la concaténation, afficher tout ce petit monde,
// en un seul morceau !

document.write(DebutDePhrase + DateDuJour.getDate() + "/" +(DateDuJour.getMonth()+1) + 
"/" + DateDuJour.getFullYear() + SuiteDePhrase + NombreDeStagiaires + FinDePhrase);

// Exercice:

var phrase1 = "Je m'appelle ";
var phrase2 = "Thiago et j'ai ";
var age     = 37;
var phrase3 = " ans !"

document.write(phrase1 + phrase2 + age + phrase3);
