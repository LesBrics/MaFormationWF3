/*--
Votre mission; que vous devez accepter !
Réaliser une fonction permettant à un internaute de :
- saisir son prénom dans un prompt
-Retourner à l'utilisateur : Bonjour [PRENOM]? Quel age as-tu ?
-Sairir son Age
- retourner à l'utilisatuer : tu est donc né en [ANNEE DE NAISSANCE].
- Afficher ensuite un récaptulatif dans la page.
Bonjour [PRENON]? tu as [AGE] !
--*/


/*--
function exercice(){

        var person = prompt("Ton prénom");
 
        if (person =! null){
            alert("Bonjour " + person + " !");
        }

        var age    = prompt("Quelle est ton age?");
        
        if (age =! null){
            alert("tu es donc né en " + (2017 - age)) ERROR prompt is string
        }   

        document.write("Bonjour " + person + ", tu as " + age + " ans.")
};
exercice();

--*/



// 1-- Initialisation des variables
var AnneeActuelle = new Date();

// 2 -- Création de ma fonction
function Exercice(){

        //2.a -- Je demande à l'utilisation son Prénom
        let prenom = prompt("Hello ! What is your name ?", "<saisir ton prénom>");
        console.log(prenom);
        console.log(typeof prenom);

        //2.b -- Je lui demande son age
        let age = parseInt(prompt ("Hello " + prenom + " ! How old are you ?" , "<saisir ton age"));
        console.log(age);
        console.log(typeof age);

        //2.c -- J'affiche une alert avec son année de naissance !
        alert("Amazing ! So you were born in " + (AnneeActuelle.getFullYear() - age) + " !");

        //2.d -- Affichage dans ma page HTML
        document.write("Hello " + prenom + " ! It's amazing ! You're " + age + " years old !")
}
// 3 -- Executer
Exercice();

