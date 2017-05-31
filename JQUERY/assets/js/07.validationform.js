

// initialisation de JQuery
$(function(){


            //Ecouter a quel moment est soumis notre formulaires
            // A la soumission de mon formulaire; je vais executer une fonction anonyme
            // En JS: document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);

            $('#contact').on('submit', function(e){ // dans la fonction il faut mettre un paramètre
                                                    // pour permettre d'arreter la fonction

            // e : correspond ici à notre événement "submit"

            // arreter la redirection HTML5
            e.preventDefault();

            //Suppression de différentes erreurs !!!
            $('#contact .has-error').removeClass('has-error');
            $('#contact .text-danger').remove();
            $('#contact .alert-danger').remove();

            // Déclaration de variables (Champs à vérifier)
            var nom        =  $('#nom');
            var prenom     =  $('#prenom');
            var email      =  $('#email');
            var tel        =  $('#tel');

            // je passe à la vérification de chaque champ...
            //https://paulund.co.uk/regular-expression-to-validate-email-address

            //1- vérification du Nom
            // if(nom.val() == "") {
            if(nom.val().length == 0) {
                    nom.parent().addClass('has-error'); //has-error est une classe bootstrap

                    // je rajoute une indication texte
                    $("<p class='text-danger' > N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
            };

            //2- vérification du Prénom
            
            if(prenom.val().length == 0) {
                    prenom.parent().addClass('has-error'); //has-error est une classe bootstrap

                    // je rajoute une indication texte
                    $("<p class='text-danger' > N'oubliez pas de saisir votre prénom</p>").appendTo(prenom.parent());
            };

            //3- vérification du Email
            // le input type dans le HTML est email. Il vérifie a@a.
            if(!validateEmail(email.val())){
                    email.parent().addClass('has-error'); //has-error est une classe bootstrap
                    $("<p class='text-danger'>Vérifiez votre adresse email</p>").appendTo(email.parent());
            };

            //4- vérification du Téléphone
            if(tel.val().length == 0 || $.isNumeric(tel.val()) == false) {
                    tel.parent().addClass('has-error'); //has-error est une classe bootstrap

                    // je rajoute une indication texte
                    $("<p class='text-danger' > Vérifiez votre numéro de téléphone</p>").appendTo(tel.parent());
            };

            // Alert after submit
        if($(this).find('.has-error').length == 0){

            $(this).replaceWith('<div class="alert alert-success">Votre demanda a bien été envoyée ! Nous vous répondrons dans les meilleurs délais.</di>')

        } else {
             $(this).prepend('<div class="alert alert-danger">Nous n\'avons pas été en mesure de valider votre demande. Vérifier vos information.</di>')
        }

            });
});

