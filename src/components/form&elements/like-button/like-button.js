$(document).ready(function () {
    $("#like-button").click(function () {
          if ($("#like-button").hasClass("like-button-border")) {
            $("#favorite").attr('value', parseInt($("#favorite").val()) + 1);
            $("#like-button").removeClass("like-button-border").addClass("like-button-border-checked");
            $("#like-button > .material-icons").html("favorite");
            $("#like-button > .material-icons").css("color", "#BC9CFF");
            $("#favorite").css("color", "#BC9CFF");
          } else {
            $("#favorite").attr('value', parseInt($("#favorite").val()) - 1);
            $("#like-button").removeClass("like-button-border-checked").addClass("like-button-border");
            $("#like-button > .material-icons").html("favorite_border");
            $("#like-button > .material-icons").css("color", "rgba(31, 32, 65, 0.25)");
            $("#favorite").css("color", "rgba(31, 32, 65, 0.25)");
          }
       
    });     
});