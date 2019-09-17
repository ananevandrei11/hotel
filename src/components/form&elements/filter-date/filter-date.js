$(document).ready(function () {
    $(".filter-date__button").click(function () {
        if ($("#filter-datepicker").attr("disabled")) {
            $("#filter-datepicker").removeAttr("disabled");
            $("#filter-datepicker").select();


        } else {
            $("#filter-datepicker").attr("disabled", "disabled");
        }

    });
});
