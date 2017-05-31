

//----------------LES SELECTEURS D'ENFANTS------------------\\


// -- Inisialisation de JQuery
$(function() {
    // ici commence mon code JQuery
    //short flemards.js
    function l(e) {
        console.log(e);
    }

    // je souhaite selectionner toutes mes 'div'
    l($('div'))

    //je souhaite selectionner mon header
    l($('header'))

    // je souhaite tous les éléments (descendants direct (enfants)) qui sont dans "header"
    l($('header').children())

    // je souhaite parmi mes descendants directs, uniquements les éléments "ul"
    l($('header').children('ul'))
    
    // je souhaite récupérer tous les éléments "li" de mon "ul"
    l($('header').children('ul').find('li'))

    // je souhaite récupérer uniquement le 2ème des mes "li"
    l($('header').find('li').eq(1))

    // je souhaite connaitre le voisin immediat de mon header
    l($('header').next())
    l($('header').next().next()) //le voisin du voisin

    // parent
    l($('header').parent())



});





// $( "ul.topnav > li" ).css( "border", "3px double red" );
// </script