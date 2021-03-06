$(document).ready(function () {
    
    $(".search-room-page__body").on("click", ".room-card", function (event) {
        var currentImageIndex = $(".image.visible", this).index();
        var currentImage = $('.image.visible', this);
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.image', this).eq(nextImageIndex);
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.image', this).eq(prevImageIndex);
        var currentCountIndex = $(".count-rect.solidcolor", this).index();
        var currentCount = $('.count-rect.solidcolor', this);
        var nextCountIndex = currentCountIndex + 1;
        var nextCount = $('.count-rect', this).eq(nextCountIndex);
        var prevCountIndex = currentCountIndex - 1;
        var prevCount = $('.count-rect', this).eq(prevCountIndex);
        var imageLast = $('.image:last', this);
        var imageEq = $('.image', this);
        var countLast = $('.count-rect:last', this);
        var countEq = $('.count-rect', this);

        $(".images--next", this).click(function () {
            currentImage.removeClass('visible');

            if (nextImageIndex == (imageLast.index() + 1)) {
                imageEq.eq(0).addClass('visible');
            } else {
                nextImage.addClass('visible');
            }
            currentCount.removeClass('solidcolor');
            if (nextCountIndex == (countLast.index() + 1)) {
                countEq.eq(0).addClass('solidcolor');
            } else {
                nextCount.addClass('solidcolor');
            }
        });

        $('.images--prev', this).click(function () {
            currentImage.removeClass('visible');
            prevImage.addClass('visible');
            currentCount.removeClass('solidcolor');
            prevCount.addClass('solidcolor');

            if (prevImage.addClass('visible')) {
                nextImage.removeClass('visible');
                currentImage.removeClass('visible');
            }
        });

    });

    $(".search-room-page .header .header-buttons .btn--purple, .search-room-page .main-page__body .logindata .btn--border").click(function() {
        $(".search-room-page .search-room-page__body").css("display", "none");
        $(".search-room-page .main-page__body").css("display", "flex");
        $(".search-room-page .main-page__body").css({"background-image":"()", "height":"702px"});
        $(".search-room-page .main-page__body").addClass("main-page__body--entry");
        $(".search-room-page .main-page__body .rooms-found").css("display", "none");
        $(".search-room-page .main-page__body .note--text").css("display", "none");
        $(".search-room-page .main-page__body .logindata").css("display", "none");
        $(".search-room-page .main-page__body .register-card").css("display", "block");
    });

    $(".search-room-page .header .header-buttons .btn--border, .search-room-page .main-page__body .register-card .btn--border").click(function() {
        $(".search-room-page .search-room-page__body").css("display", "none");
        $(".search-room-page .main-page__body").css("display", "flex");
        $(".search-room-page .main-page__body").css({"background-image":"()", "height":"702px"});
        $(".search-room-page .main-page__body").addClass("main-page__body--entry");
        $(".search-room-page .main-page__body .rooms-found").css("display", "none");
        $(".search-room-page .main-page__body .note--text").css("display", "none");
        $(".search-room-page .main-page__body .register-card").css("display", "none");
        $(".search-room-page .main-page__body .logindata").css("display", "block");
    });
});