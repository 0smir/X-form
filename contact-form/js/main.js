$(document).ready(function(){
    $("header nav").find(".btn-search").on("click", function(){
        if($("#main-search").hasClass("visible")){
            $("#main-search").removeClass("visible");
        }
        else{
            $("#main-search").addClass("visible");
        }

    });

    $(".mini-nav").on("click", function(){
        $(this).find(".item2").fadeOut("slow");
        $(this).find(".item1").css({
            "top": "22px",
            "transform": "rotate(45deg)"});
        $(this).find(".item3").css({
            "bottom": "22px",
            "transform": "rotate(-45deg)"});
    });


});