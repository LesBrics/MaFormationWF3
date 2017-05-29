// ----------------------LES BOUCLES----------------------------------//

// -- La Boucle FOR

// -- Pour i = 1 ; tant que i <= (strictement inférieur ou égale) 10; alors, j'incrémente
for(var i = 1; i <= 10 ; i++) {
    document.write("<p>Instruction executée : <strong>" + i + "</strong></p>");
} 
document.write("<hr>");

//  -- a Boucle WHILE : Tant que

var j = 1;
while(j <= 10) {
    document.write("<p>Instruction executée : <strong>" + j + "</strong></p>")
    j++;
}
// ########################### EXERCICE ##############################

// var Prenoms = new Array;
// Prenoms[0] = "Hugo";
// Prenoms[1] = "Jean";
// Prenoms[2] = "Matthieu";
// Prenoms[3] = "Luc";
// Prenoms[4] = "Pierre";
// Prenoms[5] = "Marc";

var Prenoms = ["Hugo", "Jean", "Matthieu", "Luc", "Pierre", "Marc"];
var NbElements = Prenoms.length;

for (i=0;i<NbElements;i++) //creating a var before avoids to check the length each time it runs the loop
{
document.write(Prenoms[i] + "<br>" + "<br>");
}

Prenoms.forEach(function(banane) { //BOUCLE forEach -- ATTENTION A LA PERFORMANCE
    console.log(banane);
});


// Meme exercice avec while

var j = 0;
while (j < Prenoms.length){
    console.log(Prenoms[j]);
    j++;
}

