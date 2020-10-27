$(document).ready(function(){
    // Partie ajouter
    $('#liste_fruits').click(function(){
        if($('#liste_fruits option:selected').text()){
            $("#ajouter").removeAttr("disabled")
            $("#ajouter").click(function(){
                console.log('on va dire que ajouter marche')
                $('#liste_fruits option:selected').appendTo('#panier')  
            })
        }
    });

    // Partie supprimer
    $('#panier').click(function(){
        if($('#panier option:selected').text()){
            $("#supprimer").removeAttr("disabled")
            $("#supprimer").click(function(){
                console.log('on va dire ça supprimer marche')
                $('#panier option:selected').appendTo('#liste_fruits')  
            })
        }
    });
});