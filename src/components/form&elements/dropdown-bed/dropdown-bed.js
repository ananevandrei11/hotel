$(document).ready(function () {
    $(".dropdown-btn-bed").click(function () {
        $(".dropdown-title-bed").toggleClass("opened");
        $(".dropdown-list-bed").slideToggle(500);
    });

    $(".bedroom-minus").click(function () {
        if ($("#bedroom").attr('value') == "0") {
            $("#bedroom").attr('value', '0');
            $(".dropdown-text-bed").text(parseFloat($("#bedroom").attr('value')) + " спален, " + parseFloat($("#bed").attr('value')) + " кроватей, " + parseFloat($("#bathroom").attr('value')) + " ванных комнат");
        } else {
            $("#bedroom").attr('value', parseInt($("#bedroom").val()) - 1);
            $(".dropdown-text-bed").text(parseFloat($("#bedroom").attr('value')) + " спален, " + parseFloat($("#bed").attr('value')) + " кроватей, " + parseFloat($("#bathroom").attr('value')) + " ванных комнат");
        }
    });
    
    $(".bedroom-plus").click(function () {
        $("#bedroom").attr('value', parseInt($("#bedroom").val()) + 1);
        $(".dropdown-text-bed").text(parseFloat($("#bedroom").attr('value')) + " спален, " + parseFloat($("#bed").attr('value')) + " кроватей, " + parseFloat($("#bathroom").attr('value')) + " ванных комнат");
    });

    $(".bed-minus").click(function () {
        if ($("#bed").attr('value') == "0") {
            $("#bed").attr('value', '0');
            $(".dropdown-text-bed").text(parseFloat($("#bedroom").attr('value')) + " спален, " + parseFloat($("#bed").attr('value')) + " кроватей, " + parseFloat($("#bathroom").attr('value')) + " ванных комнат");
        } else {
            $("#bed").attr('value', parseInt($("#bed").val()) - 1);
            $(".dropdown-text-bed").text(parseFloat($("#bedroom").attr('value')) + " спален, " + parseFloat($("#bed").attr('value')) + " кроватей, " + parseFloat($("#bathroom").attr('value')) + " ванных комнат");
        }
    });

    $(".bed-plus").click(function () {
        $("#bed").attr('value', parseInt($("#bed").val()) + 1);
        $(".dropdown-text-bed").text(parseFloat($("#bedroom").attr('value')) + " спален, " + parseFloat($("#bed").attr('value')) + " кроватей, " + parseFloat($("#bathroom").attr('value')) + " ванных комнат");
    });

    $(".bathroom-minus").click(function () {
        if ($("#bathroom").attr('value') == "0") {
            $("#bathroom").attr('value', '0');
            $(".dropdown-text-bed").text(parseFloat($("#bedroom").attr('value')) + " спален, " + parseFloat($("#bed").attr('value')) + " кроватей, " + parseFloat($("#bathroom").attr('value')) + " ванных комнат");
        } else {
            $("#bathroom").attr('value', parseInt($("#bathroom").val()) - 1);
            $(".dropdown-text-bed").text(parseFloat($("#bedroom").attr('value')) + " спален, " + parseFloat($("#bed").attr('value')) + " кроватей, " + parseFloat($("#bathroom").attr('value')) + " ванных комнат");
        }
    });

    $(".bathroom-plus").click(function () {
        $("#bathroom").attr('value', parseInt($("#bathroom").val()) + 1);
        $(".dropdown-text-bed").text(parseFloat($("#bedroom").attr('value')) + " спален, " + parseFloat($("#bed").attr('value')) + " кроватей, " + parseFloat($("#bathroom").attr('value')) + " ванных комнат");
    });

});