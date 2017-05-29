

data = { "PremierTrimestre":[

        {"prenom" : "Hugo", 
         "nom"    : "LIEGEARD",
         "notes"  :   {
                        "francais"    :   12,
                        "Math"        :   18.5,
                        "Physique"    :   13.6,
                        "Anglais"     :   16,
                      }
    },

    { "prenom" : "Thiago", "nom" : "ARAUJO",
      "notes"           :   {
                                "francais"    :   10,
                                "Math"        :   18,
                                "Physique"    :   16,
                                "Anglais"     :   19,
                            }
    },

    { "prenom" : "Alex", "nom" : "XU",
      "notes"          :   {
                                "francais"    :   19,
                                "Math"        :   14,
                                "Physique"    :   13,
                                "Anglais"     :    8,
                            }
    },

    { "prenom" : "Rob", "nom" : "WHITE",
      "notes"          :   {
                                "francais"     :   8,
                                "Math"        :   16,
                                "Physique"    :   14,
                                "Anglais"     :   20,
                            }
    },

    { "prenom" : "Ivan", "nom" : "Karamazov",
      "notes"          :   {
                                "francais"    :   6,
                                "Math"        :   19,
                                "Physique"    :   18,
                                "Anglais"     :   6,
                            }
    },
]};

for (var key in data.PremierTrimestre) {
    document.write("<ol>" + data.PremierTrimestre[key].prenom + " " +
    data.PremierTrimestre[key].nom + "<li>" + "Français : " +
    data.PremierTrimestre[key].notes.francais + "</li>" + "<li>" + "Math : " +
    data.PremierTrimestre[key].notes.Math + "</li>" + "<li>" + "Physique : " +
    data.PremierTrimestre[key].notes.Physique + "</li>" + "<li>" + "Anglais : " +
    data.PremierTrimestre[key].notes.Anglais + "</li>" + "<li>" + "<strong>" + "Moyenne Générale : " +

    ((data.PremierTrimestre[key].notes.francais + data.PremierTrimestre[key].notes.Math +
      data.PremierTrimestre[key].notes.Physique + data.PremierTrimestre[key].notes.Anglais)
       / 4) + "</strong>" + "</li>" + "</ol>" + "<br>" + "<br>")
}

//
// var moyenne = ((data.PremierTrimestre[key].notes.francais +
//                 data.PremierTrimestre[key].notes.Math +
//                 data.PremierTrimestre[key].notes.Physique +
//                 data.PremierTrimestre[key].notes.Anglais
//               ) / 4);

//var avg = times.reduce(function(p,c,i){return p+(c-p)/(i+1)},0);
