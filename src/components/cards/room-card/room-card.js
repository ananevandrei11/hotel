$(document).ready(function () {

    $('.images--next').click(function () {
        var currentImageIndex = $(".image.visible").index();
        var currentImage = $('.image.visible');
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.image').eq(nextImageIndex);
        // currentImage.fadeOut(100);
        currentImage.removeClass('visible');
        if (nextImageIndex == ($('.image:last').index() + 1)) {
            // $('.image').eq(0).fadeIn(100);
            $('.image').eq(0).addClass('visible');
        }
        else {
            // nextImage.fadeIn(100);
            nextImage.addClass('visible');
        }

        var currentCountIndex = $(".count-rect.solidcolor").index();
        var currentCount = $('.count-rect.solidcolor');
        var nextCountIndex = currentCountIndex + 1;
        var nextCount = $('.count-rect').eq(nextCountIndex);
        currentCount.removeClass('solidcolor');
        if (nextCountIndex == ($('.count-rect:last').index() + 1)) {
            $('.count-rect').eq(0).addClass('solidcolor');
        }
        else {
            nextCount.addClass('solidcolor');
        }
    });
    
    $('.images--prev').click(function () {
        var currentImage = $('.image.visible');
        var currentImageIndex = $('.image.visible').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.image').eq(prevImageIndex);
        // currentImage.fadeOut(100);
        currentImage.removeClass('visible');
        // prevImage.fadeIn(100);
        prevImage.addClass('visible');

        var currentCount = $('.count-rect.solidcolor');
            var currentCountIndex = $('.count-rect.solidcolor').index();
            var prevCountIndex = currentCountIndex - 1;
            var prevCount = $('.count-rect').eq(prevCountIndex);
            currentCount.removeClass('solidcolor');
            prevCount.addClass('solidcolor');
    });
});