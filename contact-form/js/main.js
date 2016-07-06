$(document).ready(function(){
    $("header nav").find(".btn-search").on("click", function(){
        if($("#main-search").hasClass("visible")){
            $("#main-search").removeClass("visible");
        }
        else{
            $("#main-search").addClass("visible");
        }

    });
    

    

     

});