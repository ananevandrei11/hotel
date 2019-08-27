$(document).ready(function () {
  /*STAR ONE*/
$("#label_rating_1").click(function () {
      if ($("#label_rating_1").hasClass("star-border")) {
        $("#label_rating_1").html("star");
        $("#rating_1").attr("checked", "checked");
        $("#label_rating_1").removeClass("star-border").addClass("star");
      } else {
        $("#label_rating_1, #label_rating_2, #label_rating_3, #label_rating_4, #label_rating_5").html("star_border");
        $("#label_rating_1, #label_rating_2, #label_rating_3, #label_rating_4, #label_rating_5").removeClass("star").addClass("star-border");
        $("#rating_1, #rating_2, #rating_3, #rating_4, #rating_5").removeAttr("checked", "checked");
      }      
    });
 
    /*STAR TWO*/
$("#label_rating_2").click(function () {
      if ($("#label_rating_2").hasClass("star-border")) {
        $("#label_rating_1, #label_rating_2").html("star");
        $("#rating_1, #rating_2").attr("checked", "checked");
        $("#label_rating_1, #label_rating_2").removeClass("star-border").addClass("star");
      } else {
        $("#label_rating_2, #label_rating_3, #label_rating_4, #label_rating_5").html("star_border");
        $("#label_rating_2, #label_rating_3, #label_rating_4, #label_rating_5").removeClass("star").addClass("star-border");
        $("#rating_2, #rating_3, #rating_4, #rating_5").removeAttr("checked", "checked");
      }      
    });
  
      /*STAR THREE*/
$("#label_rating_3").click(function () {
      if ($("#label_rating_3").hasClass("star-border")) {
        $("#label_rating_1, #label_rating_2, #label_rating_3").html("star");
        $("#rating_1, #rating_2, #rating_3").attr("checked", "checked");
        $("#label_rating_1, #label_rating_2, #label_rating_3").removeClass("star-border").addClass("star");
      } else {
        $("#label_rating_3, #label_rating_4, #label_rating_5").html("star_border");
        $("#label_rating_3, #label_rating_4, #label_rating_5").removeClass("star").addClass("star-border");
        $("#rating_3, #rating_4, #rating_5").removeAttr("checked", "checked");
      }      
    });
  
       /*STAR FOUR*/
$("#label_rating_4").click(function () {
      if ($("#label_rating_4").hasClass("star-border")) {
        $("#label_rating_1, #label_rating_2, #label_rating_3, #label_rating_4").html("star");
        $("#rating_1, #rating_2, #rating_3, #rating_4").attr("checked", "checked");
        $("#label_rating_1, #label_rating_2, #label_rating_3, #label_rating_4").removeClass("star-border").addClass("star");
      } else {
        $("#label_rating_4, #label_rating_5").html("star_border");
        $("#label_rating_4, #label_rating_5").removeClass("star").addClass("star-border");
        $("#rating_4, #rating_5").removeAttr("checked", "checked");
      }      
    });
  
       /*STAR FIVE*/
$("#label_rating_5").click(function () {
      if ($("#label_rating_5").hasClass("star-border")) {
        $("#label_rating_1, #label_rating_2, #label_rating_3, #label_rating_4, #label_rating_5").html("star");
        $("#rating_1, #rating_2, #rating_3, #rating_4, #rating_5").attr("checked", "checked");
        $("#label_rating_1, #label_rating_2, #label_rating_3, #label_rating_4, #label_rating_5").removeClass("star-border").addClass("star");
      } else {
        $("#label_rating_5").html("star_border");
        $("#label_rating_5").removeClass("star").addClass("star-border");
        $("#rating_5").removeAttr("checked", "checked");
      }      
    });  
 });