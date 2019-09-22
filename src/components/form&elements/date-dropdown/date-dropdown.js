$(function () {
  $('#date-start').datepicker({
    dateFormat: "mm.dd.yyyy",
    minDate: new Date(),
    onSelect: function (fd, d, picker) {
      $("#date-start").val(fd.split("-")[0]);
      $("#date-end").val(fd.split("-")[1]);
    }
  });


  $("#btn-start").click(function () {
    if ($("#date-start").attr("disabled")) {
      $("#date-start").removeAttr("disabled");
      $("#date-start").select();
    } else {
      $("#date-start").attr("disabled", "disabled");
    };
  });

  $("#btn-end").click(function () {
    if ($("#date-start").attr("disabled")) {
      $("#date-start").removeAttr("disabled");
      $("#date-start").select();
    } else {
      $("#date-start").attr("disabled", "disabled");
    };
  });
  // var start = $('#date-start').val();
  // var end = $('#date-end').val();
  // var nowStart = new Date(start);
  // nowStart.toLocaleDateString()
  // var nowEnd = new Date(end);
  // nowEnd.toLocaleDateString()
  // console.log(nowStart);
  // console.log(nowEnd);
  // var totlNumber = (nowEnd - nowStart) / (1000 * 60 * 60 * 24);
  // console.log(totlNumber);



});