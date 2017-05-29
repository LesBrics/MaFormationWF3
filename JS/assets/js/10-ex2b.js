

// DIFERENCE DE INDICE NUMERIQUE ET CHAINE DE CARACTERE

function w(t) {
    document.write(t);
}

function l(e){
    console.log(e);
}

var PremierTrimestre = [ 
// chaque objet sera associé à une position numerique
        {
         "prenom"  : "Hugo", 
         "nom"     : "LIEGEARD",
         "moyenne" :   {
                        "francais"    :   12,
                        "Math"        :   18.5,
                        "Physique"    :   13.6,
                        "Anglais"     :   16,
                      }
    },
        
        {
         "prenom"  : "Thiago", 
         "nom"     : "ARAUJO",
         "moyenne" :   {
                        "francais"    :   10,
                        "Math"        :   18,
                        "Physique"    :   16,
                        "Anglais"     :   19,
                       }
    },

        {"prenom" : "Alex", 
        "nom"     : "XU",
        "moyenne" :    {
                        "francais"    :   19,
                        "Math"        :   14,
                        "Physique"    :   13,
                       }
    },

        {
         "prenom"  : "Rob", 
         "nom"     : "WHITE",
         "moyenne" :   {
                        "francais"    :   8,
                        "Math"        :   16,
                        "Physique"    :   14,
                        "Anglais"     :   20,
                      }
    },

        {
         "prenom" : "Ivan", 
         "nom"     : "Karamazov",
         "moyenne" :   {
                        "francais"    :   6,
                        "Math"        :   19,
                        "Physique"    :   18,
                      }
    },
];

w('<ol>');

// Je souhaite afficher la liste de mes étudiants.


// LOOP 1 //
for(i = 0 ; i < PremierTrimestre.length ; i++) {

    // on récupère l'objet Etudiant de l'itération
    let Etudiant = PremierTrimestre[i];

    // Aperçu dans la console
    l(Etudiant);

/////////////////////////////////////////////////////


// MOYENNE (1) declarer dans la boucle NombreDeMatiere et SommeDesNotes = 0
var NombreDeMatier = 0, SommeDesNotes = 0 // IMPORTANT on le place ici pour que a chaque fois que la boucle tourne, les var vont à zero



    w('<li>'); 
        // Afficher le Prénom et le Nom d'un Etudiant
        w(Etudiant.prenom + " " +  PremierTrimestre[i].nom); //ou "Etudiant"" =  PremierTrimestre[i]

        // Afficher la moyenne de l'Etudiant aux différentes matières.
        w('<ul>');
        

        // LOOP 2 ///
        for(let matiere in Etudiant.moyenne) {

            NombreDeMatier++;
            SommeDesNotes += Etudiant.moyenne[matiere];

           w('<li>');  
            w(matiere + " : " +  PremierTrimestre[i].moyenne[matiere]);
// SUPER !!!!!!!! Etudiant.moyenne[matiere], le [] va aller cherche la valeur des indices
           
// l(matiere);
// l(Etudiant.moyenne[matiere])
           w('</li>'); 

           }; // fin de LOOP2
        

// MOYENNE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
            w('<li>'); 
                w("<strong>MOYENNE GENERALE</strong> :" + (Math.round(SommeDesNotes / NombreDeMatier)) + "<br>" + "<br>");
             
            w('</li>');



        w('</ul>');

    w('</li>');

        };


w('</ol>');

