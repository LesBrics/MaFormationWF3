/*================= LE DOM ========================\
|                                                  |
|   Le DOM, est une interface de développement     |
|   en JS pour HTML. Grâce au DOM; je vais être    |
|   en mesure d'accéder / modifier mon HTML.       |
|                                                  |
|   L'Objet "document" : c'est le point d'entrée   |
|   vers mon contenu HTML !                        |
|                                                  |
|   Chaque page chargée dans mon navigatuer à un   |
|   objet "document".                              |
|--------------------------------------------------*/


// -- Comment puis-je faire pour récuperer les différentes informations de ma page HTML ?

//+++++++ GET ELEMENT BY ID ++++++++++++++++++

var bonjour = document.getElementById("bonjour");
console.log(bonjour);

//+++++++ GET ELEMENT BY CLASS NAME +++++++++++

var contenu = document.getElementsByClassName("contenu");
console.log(contenu);
// -- me renvoi : un tableau JS [] avec mes éléments HTML; ou encore autrement di,
// une collection d'éléments HTML.

//+++++++ GET ELEMENT BY TAG NAME +++++++++++
// c'est une fonction qui va permettre de récupérer un ou plusieurs
// éléments (une liste) HTML à partir de leur * nom de balise *

var span = document.getElementsByTagName("span");
console.log(span);
