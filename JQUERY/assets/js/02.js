/*-------------------LES SELECTEURS JQUERY-----------------*/

//-- Format : $('selecteur')
//-- En JQuery tous les sélecteurs CSS sont disponibles...

//-- DOM READY
$(function(){

        //lesFlemards.js
        function l(e){console.log(e);}

        // -- Sélectioner les balises SPAN:

            // version en JS
            l('SPAN en JS :');
            l(document.getElementsByTagName('span'));
            
            //-- version JQ
            l('Span en JQ :');
            l($("span"));

            // -- Sélectioner les balises MENU:

             // version en JS
            l('id via JS :');
            l(document.getElementById('menu'));
            
            //-- version JQ
            l('ID en JQ :');
            l($("#menu"));

            // Sélectionner par Attribut

            l('Par Attribut :');
            l($("[href='http://www.google.fr']"));
});