
/*-----------------LE CHAINAGE DE METHODE JQUERY------------------------*/

$(function() {

        //  -- Je souhait
        $('div').hide('slow', function(){

                //une fois que la méthode hide() est terminée,
                //mon alerte peux s'executer.
        alert('fin du Hide');

        // NOTA BENE : la fonction s'executera pour l'ensemble 
        //des éléments du sélecteur.

        // CSS
        $('div').css("color", "red");
        $('div').css("background", "yellow");

        // Je fais réapparaitre mes DIVs
        $('div').show('slow');
        
        }); // Fin Fonction Anonyme

        // -- En utilisant le chainage de méthode; vous pouvez faire
        // s'enchainer plusiers fonction les unes après les autres...

        //$('p').hide(1000).css('color', 'blue').css('font-size', '20px').delay(2000).show(500);
        
        // encore trop long

        $('p').hide(1000).css({'color' : 'blue', 'font-size' : '20px'}).delay(2000).show(500);
        // object dans le CSS

});