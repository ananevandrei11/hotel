$(function() {
  $('#date-start').datepicker({
    range: true,
    toggleSelected: false,
    dateFormat: "dd.mm.yyyy",
    clearButton: true
  });

$("#btn-start, #btn-end").click(function () {
  if ($("#date-start").attr("disabled")) {
      $("#date-start").removeAttr("disabled");
      $("#date-start").select();
  } else {
      $("#date-start").attr("disabled", "disabled");
  }

});
});

