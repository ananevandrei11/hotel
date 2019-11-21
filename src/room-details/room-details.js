$(document).ready(function () {

    $(".room-details .header .header-buttons .btn--purple, .room-details .main-page__body .logindata .btn--border").click(function() {
        $(".room-details .room-details__body").css("display", "none");
        $(".room-details .room-details__image").css("display", "none");
        $(".room-details .main-page__body").css("display", "flex");
        $(".room-details .main-page__body").css({"background-image":"()", "height":"702px"});
        $(".room-details .main-page__body").addClass("main-page__body--entry");
        $(".room-details .main-page__body .rooms-found").css("display", "none");
        $(".room-details .main-page__body .note--text").css("display", "none");
        $(".room-details .main-page__body .logindata").css("display", "none");
        $(".room-details .main-page__body .register-card").css("display", "block");
    });

    $(".room-details .header .header-buttons .btn--border, .room-details .main-page__body .register-card .btn--border").click(function() {
        $(".room-details .room-details__body").css("display", "none");
        $(".room-details .room-details__image").css("display", "none");
        $(".room-details .main-page__body").css("display", "flex");
        $(".room-details .main-page__body").css({"background-image":"()", "height":"702px"});
        $(".room-details .main-page__body").addClass("main-page__body--entry");
        $(".room-details .main-page__body .rooms-found").css("display", "none");
        $(".room-details .main-page__body .note--text").css("display", "none");
        $(".room-details .main-page__body .register-card").css("display", "none");
        $(".room-details .main-page__body .logindata").css("display", "block");
    });
});