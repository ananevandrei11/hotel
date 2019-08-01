$(document).ready(function () {
    $(".like-button").one('click', function () {
            $("#favorite").attr('value', parseInt($("#favorite").val()) + 1);
            $("#favorite").attr("readonly");
            $(".like-button > .material-icons").html("favorite");
            $(".like-button > .material-icons").css("color", "#BC9CFF");
            $("#favorite").css("color", "#BC9CFF");
    });
});