$(document).ready(function () {
    $(".clickable").click(function () {
        $(".clickable").click(function () {
            $("#hide, #icon").slideToggle("slow");
        })
        $(".clickable1").click(function () {
            $("#hide1, #icon1").slideToggle("slow");
        })
        $(".clickable2").click(function () {
            $("#hide2, #icon2").slideToggle("slow");

        })
        $("#col_1").hover(function () {
            $("#work1, #proj1").fadeTo("slow", 0.5);  //fade on
        }, function () {
            $("#work1, #proj1").fadeTo("slow", 0.5);  //fade off
        });
        $("#col_2").hover(function () {
            $("#work2, #proj2").fadeTo("slow", 0.6);
        }, function () {
            $("#work2, #proj2").fadeTo("slow", 0.5);
        });
        $("#col_3").hover(function () {
            $("#work3, #proj3").fadeTo("slow", 0.6);
        }, function () {
            $("#img_3, #proj3").fadeTo("slow", 0.5);
        });
        $("#col_4").hover(function () {
            $("#work4, #proj4").fadeTo("slow", 0.5);
        }, function () {
            $("#work4, #proj4").fadeTo("slow", 0.5);
        });
        $("#col_5").hover(function () {
            $("#work5, #proj5").fadeTo("slow", 0.5);
        }, function () {
            $("#work5, proj5").fadeTo("slow", 0.7);
        });
        $("#col_6").hover(function () {
            $("#work6, #proj6").fadeTo("slow", 0.5);
        }, function () {
            $("#work6, #proj6").fadeTo("slow", 0.5);
        });
        $("#col_7").hover(function () {
            $("#work7, #proj7").fadeTo("slow", 0.8);
        }, function () {
            $("#work7, #proj7").fadeTo("slow", 1);
        });
        $("#col_8").hover(function () {
            $("#work8, #proj8").fadeTo("slow", 0.9);
        }, function () {
            $("#work8, #proj8").fadeTo("slow", 1);
        });
        function check_name() {
            var pattern = /^[a-zA-Z]*$/;
            var name = $("#name").val();
            if (pattern.test(name) && name !== '') {
                $("#name-error").hide();
                $("#name").css("border-bottom", "2px solid #34F458");
            } else {
                $("#name-error").html("Incorrect name format");
                $("#name-eror").show();
                $("#name").css("border-bottom", "2px solid #F90A0A");
                error_name = true;
            }
            $("#contacts").submit(function (event) {
                event.preventDefault();
                var blanks = ["name", "mail", "message"];
                var input = [];
                blanks.forEach(function (blank) {
                    input.push($("#" + blank).val());
                });
                alert("Thank You " + input[0] + " for reaching out to us. We have received your message");
                $("#contacts")[0].reset();
            })
        })
