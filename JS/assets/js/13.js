//----------------- LA MANIPULATION DES CONTENUS------------------------

function l(e){
    console.log(e);
}

// -- Je souhaite récupérer mon lien ; comment procéder ?
var google = document.getElementById("google");
l(google);

//-- A: Le lien vers lequel pointe la balise
l("le lien vers lequel pointe la balise :")
l(google.href);

// -- B: L'ID de la balise
l("L'ID de la balise : ")
l(google.id);

//-- C: La classe de la balise
l("La classe de la balise :")
l(google.className);

//-- D: Le teste de la balise (l'élément)
l('Le texte de la balise');
l(google.textContent);

//-- Maintenant, je souhaite modifier le contenu de mon lien
// -- Comme une variable classique, je vais simplement affecter une nouvelle valeur,
google.textContent = "my link to GOOGLE";

//----------------- AJOUTER UN ELEMENT DANS MA PAGE ------------------------

// -- Nous allons utiliser 2 méthodes :
// 1- La fonction document.createElement() va permettre de générer un nouvel élément dans
// le DOM; que je pourrais par la suite modifier avec les méthodes que nous venons de voir.

//PS : Ce nouvel élément est placé en mémoire

// -- Définiton de mon élément
var span = document.createElement("span");

//-- si je souhaite lui donner un ID
span.id = "MonSpan";

//-- Si je souhaite lui attribuer du contenu.../
span.textContent = " - Mon Texte JS"

// 2- La fonction appendChild() va me permettre de rajouter un enfant à un élément du DOM
google.appendChild(span);

//-------------EXERCICE---------------

var h1 = document.createElement("h1");
var a = document.createElement ("a");
a.textContent = "My bloody content";
a.href = 'http://www.boredpanda.com';

h1.appendChild(a);
document.body.appendChild(h1); //parenthood

a.style.color = "red"; // style -- gerer CSS a partir de JS
a.style.textDecoration = "none";


