$(document).ready(function () {
    $(".like-button").one('click', function () {
        if ($("#favorite").attr('value') == "0") {
            $("#favorite").attr('value', '0');
        } else {
            $("#favorite").attr('value', parseInt($("#favorite").val()) + 1);
            $(".like-button").css("border-color", "#BC9CFF");
            $(".like-button > .material-icons").html("favorite");
            $(".like-button > .material-icons").css("color", "#BC9CFF");
            $("#favorite").css("color", "#BC9CFF");
        }
    });
});