$(document).ready(function () {
    $(".checkbox-list__btn").click(function () {
        $(".checkbox-list__btn i").toggleClass("checkbox-list__btn--opened");
        $(".checkbox-list__form").toggleClass("checkbox-list__form--opened");
    });

});