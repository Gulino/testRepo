$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
        $("#p").css("background-color", "yellow");

    });


    $("#button").click(function(){
                   $("#replace").html("<p>Add some parmesan to your pasta!</p>");
               });



       $("h1").mouseenter(function(){
         $("h1").css("color", "#ccccff");
         $("h1").mouseleave(function(){
        $("h1").css("color", "white");
    });
});

$("button").click(function(){
        $(".container").toggle(1000);
    });



});
