$(document).ready(function () {
    $("body").on("click", ".rate-button", function (e) {
        // STAR-LABEL
        var labelRatingOne = $(".rate-button__label:nth-of-type(1)", this);
        var labelRatingTwo = $(".rate-button__label:nth-of-type(2)", this);
        var labelRatingThree = $(".rate-button__label:nth-of-type(3)", this);
        var labelRatingFour = $(".rate-button__label:nth-of-type(4)", this);
        var labelRatingFive = $(".rate-button__label:nth-of-type(5)", this);
        // STAR-INPUT
        var ratingOne = $(".rate-button__input:nth-of-type(1)", this);
        var ratingTwo = $(".rate-button__input:nth-of-type(2)", this);
        var ratingThree = $(".rate-button__input:nth-of-type(3)", this);
        var ratingFour = $(".rate-button__input:nth-of-type(4)", this);
        var ratingFive = $(".rate-button__input:nth-of-type(5)", this);

        /*STAR ONE*/
        labelRatingOne.click(function () {
            if (labelRatingOne.hasClass("star-border")) {
                labelRatingOne.html("star");
                ratingOne.attr("checked", "checked");
                labelRatingOne.removeClass("star-border").addClass("star");
            } else {
                labelRatingOne.add(labelRatingTwo).add(labelRatingThree).add(labelRatingFour).add(labelRatingFive).html("star_border");
                labelRatingOne.add(labelRatingTwo).add(labelRatingThree).add(labelRatingFour).add(labelRatingFive).removeClass("star").addClass("star-border");
                ratingOne.add(ratingTwo).add(ratingThree).add(ratingFour).add(ratingFive).removeAttr("checked", "checked");
            }
        });

        /*STAR TWO*/
        labelRatingTwo.click(function () {
            if (labelRatingTwo.hasClass("star-border")) {
                labelRatingOne.add(labelRatingTwo).html("star");
                ratingOne.add(ratingTwo).attr("checked", "checked");
                labelRatingOne.add(labelRatingTwo).removeClass("star-border").addClass("star");
            } else {
                labelRatingTwo.add(labelRatingThree).add(labelRatingFour).add(labelRatingFive).html("star_border");
                labelRatingTwo.add(labelRatingThree).add(labelRatingFour).add(labelRatingFive).removeClass("star").addClass("star-border");
                ratingTwo.add(ratingThree).add(ratingFour).add(ratingFive).removeAttr("checked", "checked");
            }
        });

        /*STAR THREE*/
        labelRatingThree.click(function () {
            if (labelRatingThree.hasClass("star-border")) {
                labelRatingOne.add(labelRatingTwo).add(labelRatingThree).html("star");
                ratingOne.add(ratingTwo).add(ratingThree).attr("checked", "checked");
                labelRatingOne.add(labelRatingTwo).add(labelRatingThree).removeClass("star-border").addClass("star");
            } else {
                labelRatingThree.add(labelRatingFour).add(labelRatingFive).html("star_border");
                labelRatingThree.add(labelRatingFour).add(labelRatingFive).removeClass("star").addClass("star-border");
                ratingThree.add(ratingFour).add(ratingFive).removeAttr("checked", "checked");
            }
        });

        /*STAR FOUR*/
        labelRatingFour.click(function () {
            if (labelRatingFour.hasClass("star-border")) {
                labelRatingOne.add(labelRatingTwo).add(labelRatingThree).add(labelRatingFour).html("star");
                ratingOne.add(ratingTwo).add(ratingThree).add(ratingFour).attr("checked", "checked");
                labelRatingOne.add(labelRatingTwo).add(labelRatingThree).add(labelRatingFour).removeClass("star-border").addClass("star");
            } else {
                labelRatingFour.add(labelRatingFive).html("star_border");
                labelRatingFour.add(labelRatingFive).removeClass("star").addClass("star-border");
                ratingFour.add(ratingFive).removeAttr("checked", "checked");
            }
        });

        /*STAR FIVE*/
        labelRatingFive.click(function () {
            if (labelRatingFive.hasClass("star-border")) {
                labelRatingOne.add(labelRatingTwo).add(labelRatingThree).add(labelRatingFour).add(labelRatingFive).html("star");
                ratingOne.add(ratingTwo).add(ratingThree).add(ratingFour).add(ratingFive).attr("checked", "checked");
                labelRatingOne.add(labelRatingTwo).add(labelRatingThree).add(labelRatingFour).add(labelRatingFive).removeClass("star-border").addClass("star");
            } else {
                labelRatingFive.html("star_border");
                labelRatingFive.removeClass("star").addClass("star-border");
                ratingFive.removeAttr("checked", "checked");
            }
        });
    });
});