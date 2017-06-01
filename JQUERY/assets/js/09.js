

 $(function(){

    // 1. une requète AJAX Simple
    $.ajax("http://geoip.nekudo.com/api/").done(function(resultat){
        console.log(resultat);
    });

    //2. avec getJSON et JSONP (callback)
    $.getJSON("http://ip-api.com/json/?callback=", function(resultat){
        console.log(resultat);

    // Affichage sur ma page
    $('<p>').text("Votre IP est surveillé : " + resultat.query + " " + resultat.isp).css({'background' : 'yellow', 'color' : 'red'}).appendTo($('form'));
    });
           
 });