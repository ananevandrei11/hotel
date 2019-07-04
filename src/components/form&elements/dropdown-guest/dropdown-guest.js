$(document).ready(function () {
  $(".dropdown-btn-guest").click(function () {
    $(".dropdown-title-guest").toggleClass("opened");
    $(".dropdown-list-guest").slideToggle(500);
  });

  $(".adults-minus").click(function () {
    if ($("#adults").attr('value') == "0") {
      $("#adults").attr('value', '0');
      if (($("#children").attr('value') > "0") || ($("#babies").attr('value') > "0")) {
        $("#clear").text("очистить");
      } else {
        $("#clear").text("");
      }
    } else {
      $("#adults").attr('value', parseInt($("#adults").val()) - 1);
    }
  });
  $(".adults-plus").click(function () {
    $("#adults").attr('value', parseInt($("#adults").val()) + 1);
    $("#clear").text("очистить");
    $("#clear").css("cursor", "pointer");
  });


  $(".children-minus").click(function () {
    if ($("#children").attr('value') == "0") {
      $("#children").attr('value', '0');
      if (($("#adults").attr('value') > "0") || ($("#babies").attr('value') > "0")) {
        $("#clear").text("очистить");
      } else {
        $("#clear").text("");
      }
    } else {
      $("#children").attr('value', parseInt($("#children").val()) - 1);
    }
  });
  $(".children-plus").click(function () {
    $("#children").attr('value', parseInt($("#children").val()) + 1);
    $("#clear").text("очистить");
    $("#clear").css("cursor", "pointer");
  });

  $(".babies-minus").click(function () {
    if ($("#babies").attr('value') == "0") {
      $("#babies").attr('value', '0');
      if (($("#children").attr('value') > "0") || ($("#adults").attr('value') > "0")) {
        $("#clear").text("очистить");
      } else {
        $("#clear").text("");
      }
    } else {
      $("#babies").attr('value', parseInt($("#babies").val()) - 1);
    }
  });
  $(".babies-plus").click(function () {
    $("#babies").attr('value', parseInt($("#babies").val()) + 1);
    $("#clear").text("очистить");
    $("#clear").css("cursor", "pointer");
  });

  $("#clear").click(function () {
    $("#adults").attr('value', '0');
    $("#children").attr('value', '0');
    $("#babies").attr('value', '0');
    $(".dropdown-text-guest").text("Сколько гостей");
    $("#clear").text("");
    $("#clear").css("cursor", "default");
  });

  $("#apply").click(function () {
    var adultsNumber = parseFloat($("#adults").attr('value'));
    var childrenNumber = parseFloat($("#children").attr('value'));
    var babiesNumber = parseFloat($("#babies").attr('value'));
    if ((adultsNumber + childrenNumber + babiesNumber) === 1) {
      $(".dropdown-text-guest").text(adultsNumber + childrenNumber + babiesNumber + " гость");
    } else if (((adultsNumber + childrenNumber + babiesNumber) > 1) && ((adultsNumber + childrenNumber + babiesNumber) <= 4)) {
      $(".dropdown-text-guest").text(adultsNumber + childrenNumber + babiesNumber + " гостя");
    } else if (((adultsNumber + childrenNumber + babiesNumber) > 4) && ((adultsNumber + childrenNumber + babiesNumber) <= 100)) {
      $(".dropdown-text-guest").text(adultsNumber + childrenNumber + babiesNumber + " гостей");
    } else {
      $(".dropdown-text-guest").text("Сколько гостей");
    }
  });
});
