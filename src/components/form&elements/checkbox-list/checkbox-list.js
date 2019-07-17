$(document).ready(function () {
    $(".checkbox-list-btn").click(function () {
        $(".checkbox-list-btn i").toggleClass("checkbox-list-btn-open");
        $(".checkbox-list-inputs").toggleClass("checkbox-list-inputs-opened");
        // $(".checkbox-list-inputs").slideToggle(500);
    });

});
