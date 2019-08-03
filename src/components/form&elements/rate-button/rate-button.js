$(document).ready(function () {
  $("#one-star").click(function () {
    if ($("#one-star").hasClass("star-border")) {
      $("#one-star").html("star");
      $("#one-star").removeClass("star-border").addClass("star");
    } else {
      $("#one-star, #two-star, #three-star, #four-star, #five-star").html("star_border");
      $("#one-star, #two-star, #three-star, #four-star, #five-star").removeClass("star").addClass("star-border");
    }
  });
  $("#two-star").click(function () {
    if ($("#two-star").hasClass("star-border")) {
      $("#one-star, #two-star").html("star");
      $("#one-star, #two-star").removeClass("star-border").addClass("star");
    } else {
      $("#two-star, #three-star, #four-star, #five-star").html("star_border");
      $("#two-star, #three-star, #four-star, #five-star").removeClass("star").addClass("star-border");
    }
  });
  $("#three-star").click(function () {
    if ($("#three-star").hasClass("star-border")) {
      $("#one-star, #two-star, #three-star").html("star");
      $("#one-star, #two-star, #three-star").removeClass("star-border").addClass("star");
    } else {
      $("#three-star, #four-star, #five-star").html("star_border");
      $("#three-star, #four-star, #five-star").removeClass("star").addClass("star-border");
    }
  });
  $("#four-star").click(function () {
    if ($("#four-star").hasClass("star-border")) {
      $("#one-star, #two-star, #three-star, #four-star").html("star");
      $("#one-star, #two-star, #three-star, #four-star").removeClass("star-border").addClass("star");
    } else {
      $("#four-star, #five-star").html("star_border");
      $("#four-star, #five-star").removeClass("star").addClass("star-border");
    }
  });
  $("#five-star").click(function () {
    if ($("#five-star").hasClass("star-border")) {
      $("#one-star, #two-star, #three-star, #four-star, #five-star").html("star");
      $("#one-star, #two-star, #three-star, #four-star, #five-star").removeClass("star-border").addClass("star");
    } else {
      $("#five-star").html("star_border");
      $("#five-star").removeClass("star").addClass("star-border");
    }
  });
});