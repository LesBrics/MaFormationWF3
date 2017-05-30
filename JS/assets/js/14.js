
/*---------------LES EVENEMENTS------------------------*\


    Les évévements, bont me permettre de déclancher
    une fonction; c'est à dire : une série d'instruction
    suite à une action de mon utilisateur.

    OBJECTIF : Etre en mesure de capturer ces événements,
    afin d'executer une fonction.

    Les Evenements: MOUSE
    Click       : au click sur un élément,
    mouseenter  : la souris passe au dessus de la zone
                  qu'occupe un élément
    mouseleave  : la souris sort de cette zone

    Les Evenements: KEYBOARD
    keydown : une touche du clavier est enfoncée
    keyup   : une touche a été relachée

    Les Evenements : WINDOW
    scroll : defilement de la fenetre
    resize : redimensionnement de la fenetre

    Les evenements: FORM  --examen--
    change : pour les éléments <input>; <select> et
            <textarea>
    submit : à l'envoi (soumisison) d'un formulaire

    Les evenement : DOCUMENT

    DOMContentLoaded : Executé lorsque le document HTML
    est complètement chargé; sans attendre le CSS et 
    les images.


\------------------------------------------------------*/


/*---------------LES ECOUTEURS D4EVENEMENTS ------------*\
    Pour attacher un événement à un élément, ou autrement
    dit, pour déclarer un écouteur d'événement qui se 
    chargera de lancer un action, c'est à dire une 
    fonction pour  un événement donné je vais utiliser
    la syntax suivante:

\------------------------------------------------------*/

var p = document.getElementById("MonParagraphe");
console.log(p);

// -- Je souhaite que mon paragraphe soit rouge au clic
// -- de la souris.

    // 1: Je défini une foncton chargée d'executer cette
    // action.
    function changeCoulorToRed () {
        p.style.color = "red";        
    };

    // 2: Je déclare un écouteur qui se chargera d'appeler*
    // la fonction au déclanchement de l'événement.
    p.addEventListener ("click", changeCoulorToRed);


//========================================


// > Créez un champ "input"
var input = document.createElement("input"); // var creer input

// Attricution d'un attibut
input.setAttribute('type', 'text'); // il faut atrribuer Attribute pour le HTML
// input.setAttribute('placeholder', 'Saisissez un contenu...'); // un attribute à la fois
input.placeholder = 'Saisissez un contenu...';
// Attribution d'un ID
input.id = "MonInput";

// Ajout de l'élément dans la page
document.body.appendChild(input);

// > Affichez la saisie de l'utilisateur > création d'un écouteur
input.addEventListener("change", GetValuePrompt);

function GetValuePrompt(){
    alert(input.value);
};


