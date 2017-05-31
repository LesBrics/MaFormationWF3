

// validation e-mail
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

// Initialisation de JQuery (DOM READY)


$(function(){

    // Declaration des variables
    var Contacts = [];
    
        //============DECLARARION DES FONCTION==================

        // fonction ajouterContact(Contact): Ajouter un contact
        //dans les tableau de Contacts, mettre à jour le tableau 
        //HTML; réinitialiser le formulaire et afficher une notification
        function ajouterContact(Contact) {
            Contacts.push(Contact);
        }

        

        //RéinitialisationsDuFomulaire() : Après d'un contact, on remet le
        // formulaire à 0
        function reinitialisationDuFormulaire(Contact){
                $('#contact')[0].reset();
        }

        //Affichage d'une notification(){}
        function afficheUneNotification() {

        }

    
        //============TRAITEMENT FORMULAIRE=======================

        $('#contact').on('submit', function(e){ 
                e.preventDefault();

        var nom        =  $('#nom');
        var prenom     =  $('#prenom');
        var email      =  $('#email');
        var tel        =  $('#tel');
    

        //Suppression de différentes erreurs !!!
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert-danger').remove();
    


        //============VERIFICATION===============

        //1- vérification du Nom
        if(nom.val().length == 0) {
                nom.parent().addClass('has-error'); 
                $("<p class='text-danger' > N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
        };

        //2- vérification du Prénom
        if(prenom.val().length == 0) {
                prenom.parent().addClass('has-error'); 
                $("<p class='text-danger' > N'oubliez pas de saisir votre prénom</p>").appendTo(prenom.parent());
        };

        //3- vérification du Email
        if(!validateEmail(email.val())){
                email.parent().addClass('has-error'); 
                $("<p class='text-danger'>Vérifiez votre adresse email</p>").appendTo(email.parent());
        };

        //4- vérification du Téléphone
        if(tel.val().length == 0 || $.isNumeric(tel.val()) == false) {
                tel.parent().addClass('has-error');
                $("<p class='text-danger' > Vérifiez votre numéro de téléphone</p>").appendTo(tel.parent());
        };

        //==============RECUPERER LA VALEUR DES INPUTS===========
        
        let Contact = [
            nom.val(),
            prenom.val(),
            email.val(),
            tel.val(),
        ];


        ajouterContact(Contact);
        reinitialisationDuFormulaire(Contact);
        console.log(Contact)
        
        //==============ADD TO HTML=================
        
        for(i = 0; i < Contact.length; i++) {
            $('<tr><td>'nom.val'</td>' + '<td>'prenom.val'</td>' + '<td>'email.val'</tr>' + '<td>'tel.val'</tr>').appendTo($('#lesContacts');
            $('.alert-contact').remove();
            $('.aucuncontact').remove();


            }
        });

    });





