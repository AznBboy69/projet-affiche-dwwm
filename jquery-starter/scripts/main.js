// Tout votre code jQuery doit se trouver à l'intérieur de $(document).ready(function() { }
// Cette fonctionnalité permet de vérifier si la page HTML sur laquelle on travaille est "prête" à être utilisée par jQuery
$( document ).ready( function() {

    console.log("Ce fichier JS fonctionne parfaitement avec jQuery!");
    console.log("Et je vais même changer la couleur de fond de la div principale pour vous le prouver !");
    $("div").css("background-color", "red");
    console.log("Et maintenant, je vais utiliser jQuery UI pour rendre l'élément h1 draggable (effet glissé/déposé) !");
    $(".draggable").draggable();

});
