



    // -- Initialisation de jQuery (DOM READY)
    $(function() {

        // -- Déclaration de Variables
        var BDContacts = [];
        

        /* --------------------------------------------------------------
                            DECLARATION DES FONCTIONS
        -------------------------------------------------------------- */

    
        // +++++ FONCTION ++++ Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
        function ajouterContact(UnContact) {

            // ajout de "UnContact" dans le tableau "CollectionDeContacts" == PUSH
            BDContacts.push(UnContact);
            console.log(BDContacts);

            // hide "aucun contact" 
            $('.aucuncontact').hide();

            // Mise à jour du HTML
            $('#LesContacts').find('tbody').append('<tr><td>' + UnContact.nom + 
            '</td><td>' + UnContact.prenom + '</td><td>' + UnContact.email + 
            '</td><td>' + UnContact.tel + '</td></tr>');
            
            // reinitialisation du formulaire
            reinitialisationDuFormulaire();

        }

                            //=====================================//

        // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
        function reinitialisationDuFormulaire() {

                // En JS
                //document.getElementById('contact').reset();
                
                //En JQ
                //$('#contact')[0].reset();
                $('#contact').get(0).reset();

        }

    
                            //=====================================//

        // -- Affichage d'une Notification
        function afficheUneNotification() {
            $('.alert-contact').fadeIn('slow').delay(3000).fadeOut('slow');
            };

        
                            //=====================================//

        // +++++ FONCTION ++++ Vérification de la présence d'un Contact dans Contacts
        function estCeQunContactEstPresent(UnContact) {
                
                // BOOLEEN qui indiaue la présence ou pas d'un contact
                var estPresent = false; // FALSE

                // on parcourt le tableau BDContacts à la recherche d'une correspondance
                for(var i = 0; i < BDContacts.length ; i++) {

                        //vérification pour chaque contact du tableau, s'il y a une correspondance avec mon OBJET Contact
                        if(UnContact.email === BDContacts[i].email){
                            
                            //si une correspondance est trouvé "estPresent" passe à VRAI (ture)
                            estPresent = true; // TRUE

                            //on, arrete la boucle, plus besoin de poursuivre
                            break; //or "return false""
                        }
                }

                return estPresent;
            }

                            //=====================================//

            // +++++ FONCTION ++++ Vérification de la validité d'un Email
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
                            //=====================================//





            /* --------------------------------------------------------------
                                TRAITEMENT DE MON FORMULAIRE
            -------------------------------------------------------------- */

            // -- Détection de la soumission de mon Formulaire ==== LISTENER
            $('#contact').on('submit', function(e){

                //voir le contenu de l'événement
                console.log(e);

                // stopper la redirection de la page
                e.preventDefault();

                // Récupération de champs à vérifier == sans la declaration de l'objet on ne peut pas les recuperer
                var nom, prenom, email, tel;
                nom     = $('#nom');
                prenom  = $('#prenom');
                email   = $('#email');
                tel     = $('#tel');

                // Vérification des informations opt 2
                var mesInformationsSontValides = true;

                // vérification du nom
                if(nom.val().length == 0){
                    mesInformationsSontValides = false;            
                }

                // vérification du prenom
                if(prenom.val().length == 0){
                    mesInformationsSontValides = false;            
                }

                // vérification du tel
                if(tel.val().length == 0){
                    mesInformationsSontValides = false;            
                }

                // vérification du mail
                if(!validateEmail(email.val())) {
                    mesInformationsSontValides = false;
                }

            

            if(mesInformationsSontValides) {
                
                    // tous est correct; préparation du contact
                    var Contact = {
                        'nom'    :   nom.val(),
                        'prenom' :   prenom.val(),
                        'email'  :   email.val(),
                        'tel'    :   tel.val(),
                    };

                    //observons dans la console
                    console.log(Contact);

                    // vérification avec EstCeQunContactEstPreset
                    console.log(estCeQunContactEstPresent(Contact));
                   
                    if(!estCeQunContactEstPresent(Contact)){
                        
                            //ajout du contact
                            ajouterContact(Contact);
                            afficheUneNotification
                            ();
                            
                    
                    } else {

                        // le contact est deja present
                        alert('ATTENTION\nCe contact est déjà présent.');
                        reinitialisationDuFormulaire();
                    }
        
            } else {

                // les infos ne sont pas valides
                alert('ATTENTION\nVeuillez bien remplir tous les champs.');

            };
        


        });

}); 

// -- Fin de jQuery READY 