

/*--------------------- DISPONIBILITE DU DOM-------------------------*\
A partir du moment ou mon DOM; c'est à dire l'ensemble de l'arborescence
de ma page est completement chargé, je peux commencer à utiliser JQuery.

Je vais mettre l'ensemble de mon code dans une fonction, cette fonction
sera appelée AUTOMATIQUEMENT par JQuery lorsque le DOM sera entièrement
défini.

"3 façon de faire": */

jQuery(document).ready(function(){
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon
    // code JS/
});

//-- 2ème possibilité
$(document).ready(function(){

});

//-- 3ème possibilité, sans le (document).ready().
$(function(){
        // ici le DOM est entierement chargé.
        alert('J\'ai 37 ans');

        //-- En JS :
        document.getElementById('TexteEnJQuery').innerHTML = "<strong>Mon texte en JS</strong>";

        //-- En JQuery - "SYNTAX COMME CSS" 
        $("#TexteEnJQuery").html("Mon texte en JQ !");

});