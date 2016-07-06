$(document).ready(function() {


    $("#menu").mmenu({
        "slidingSubmenus": false,
        "extensions": [
            "pagedim-black"
        ],
        "offCanvas": {
            "position": "right"
        },
        "navbars": [
            {
                "position": "top",
                "content": [
                    "searchfield"
                ]
            },
            {
                "position": "bottom",
                "content": [
                    "<a class='fa fa-envelope' href='#/'></a>",
                    "<a class='fa fa-twitter' href='#/'></a>",
                    "<a class='fa fa-facebook' href='#/'></a>"
                ]
            }
        ]
    });


    var API = $("#menu").data("mmenu");

    $(".mini-nav").click(function() {

        API.open();

    });
    



});
