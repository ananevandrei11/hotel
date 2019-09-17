$(function () {
  var firstDatepicker = $('#date-start').datepicker({
      autoClose: true,
      minDate: new Date(),
      onSelect: function(formattedDate, date, inst) {
        // update secondDatepicker option, based on currently selected date
        secondDatepicker.update({
          minDate: new Date(date)
        });
        // clear secondDatepicker, because we have new minDate option
        secondDatepicker.clear();
      }
    }).data('datepicker');
    
    var secondDatepicker = $('#date-end').datepicker({
      autoClose: true,
      minDate: new Date()
    }).data('datepicker');
    
    $("#btn-start").click(function () {
      if ($("#date-start").attr("disabled")) {
        $("#date-start").removeAttr("disabled");
        $("#date-start").select();
      } else {
        $("#date-start").attr("disabled", "disabled");
      };
    });
  
    $("#btn-end").click(function () {
      if ($("#date-end").attr("disabled")) {
        $("#date-end").removeAttr("disabled");
        $("#date-end").select();
      } else {
        $("#date-end").attr("disabled", "disabled");
      };
    });
  });