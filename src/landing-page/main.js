$(document).ready(function () {
    $(".main-page .header .header-buttons .btn--purple, .main-page .main-page__body .logindata .btn--border").click(function() {
        $(".main-page .main-page__body").css({"background-image":"()", "height":"702px"});
        $(".main-page .main-page__body").addClass("main-page__body--entry");
        $(".main-page .main-page__body .rooms-found").css("display", "none");
        $(".main-page .main-page__body .note--text").css("display", "none");
        $(".main-page .main-page__body .logindata").css("display", "none");
        $(".main-page .main-page__body .register-card").css("display", "block");
    });

    $(".main-page .header .header-buttons .btn--border, .main-page .main-page__body .register-card .btn--border").click(function() {
        $(".main-page .main-page__body").css({"background-image":"()", "height":"702px"});
        $(".main-page .main-page__body").addClass("main-page__body--entry");
        $(".main-page .main-page__body .rooms-found").css("display", "none");
        $(".main-page .main-page__body .note--text").css("display", "none");
        $(".main-page .main-page__body .register-card").css("display", "none");
        $(".main-page .main-page__body .logindata").css("display", "block");
    });

    $(".main-page .header .header-logo").click(function() {
        $(".main-page .main-page__body").css({"background-image":"('main-background.png')", "height":"830px"});
        $(".main-page .main-page__body").removeClass("main-page__body--entry");
        $(".main-page .main-page__body .rooms-found").css("display", "block");
        $(".main-page .main-page__body .note--text").css("display", "block");
        $(".main-page .main-page__body .logindata").css("display", "none");
        $(".main-page .main-page__body .register-card").css("display", "none");
    });
});