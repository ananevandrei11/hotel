$(document).ready(function () {
  $("#like-button-1").click(function () {
    if ($("#like-button-1").hasClass("like-button-border")) {
      $("#favorite-1").attr('value', parseInt($("#favorite-1").val()) + 1);
      $("#like-button-1").removeClass("like-button-border").addClass("like-button-border-checked");
      $("#like-button-1 > .material-icons").html("favorite");
      $("#like-button-1 > .material-icons").css("color", "#BC9CFF");
      $("#favorite-1").css("color", "#BC9CFF");
    } else {
      $("#favorite-1").attr('value', parseInt($("#favorite-1").val()) - 1);
      $("#like-button-1").removeClass("like-button-border-checked").addClass("like-button-border");
      $("#like-button-1 > .material-icons").html("favorite_border");
      $("#like-button-1 > .material-icons").css("color", "rgba(31, 32, 65, 0.25)");
      $("#favorite-1").css("color", "rgba(31, 32, 65, 0.25)");
    }

  });
});