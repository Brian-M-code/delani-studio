$(document).ready(function () {
    $(".clickable").click(function () {
        $("#hide").slideToggle("slow");
        $("#icon").slideToggle("slow");
    })
    $(".clickable1").click(function () {
        $("#hide1").slideToggle("slow");
        $("#icon1").slideToggle("slow");
    })
    $(".clickable2").click(function () {
        $("#hide2").slideToggle("slow");
        $("#icon2").slideToggle("slow");
    })
    $("#col_1").hover(function () {
        $("#work1").fadeTo("slow", 0.6);
        $("#proj1").fadeTo("slow", 1);
    }, function () {
        $("#work1").fadeTo("slow", 1);
        $("#proj1").fadeTo("slow", 0);
    });
    $("#col_2").hover(function () {
        $("#work2").fadeTo("slow", 0.6);
        $("#proj2").fadeTo("slow", 1);
    }, function () {
        $("#work2").fadeTo("slow", 1);
        $("#proj2").fadeTo("slow", 0);
    });
    }, function () {
        $("#img_3").fadeTo("slow", 1);
        $("#proj3").fadeTo("slow", 0);
    });
    $("#col_4").hover(function () {
        $("#work4").fadeTo("slow", 0.6);
        $("#proj4").fadeTo("slow", 1);
    }, function () {
        $("#work4").fadeTo("slow", 1);
        $("#proj4").fadeTo("slow", 0);
    });
   