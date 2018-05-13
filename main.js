"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var slide = document.getElementsByClassName("slide");
    var sliderNav = document.getElementsByTagName("label");
    function showFirstSlide(event) {
        var num1 = 0;
        slide[num1 + 1].style.display = "none";
        slide[num1 + 2].style.display = "none";
        slide[num1 + 3].style.display = "none";
        slide[num1].style.display = "inline-block";
    }
    function showLastSlide(event) {
        var num2 = 3;
        slide[num2 - 1].style.display = "none";
        slide[num2 - 2].style.display = "none";
        slide[num2 - 3].style.display = "none";
        slide[num2].style.display = "inline-block";
    }
    function showSecondSlide(event) {
        var num3 = 1;
        slide[num3 - 1].style.display = "none";
        slide[num3 + 1].style.display = "none";
        slide[num3 + 2].style.display = "none";
        slide[num3].style.display = "inline-block";
    }
    function showThirdSlide(event) {
        var num3 = 2;
        slide[num3 - 1].style.display = "none";
        slide[num3 + 1].style.display = "none";
        slide[num3 - 2].style.display = "none";
        slide[num3].style.display = "inline-block";
    }
    showFirstSlide();
    sliderNav[0].addEventListener("click", showFirstSlide, false);
    sliderNav[1].addEventListener("click", showSecondSlide, false);
    sliderNav[2].addEventListener("click", showThirdSlide, false);
    sliderNav[3].addEventListener("click", showLastSlide, false);
    //Second slider
    var slidePosition = 0;
    var slidesCount = document
        .getElementsByClassName("slider2-wrapper")[0]
        .getElementsByClassName("slides").length;
    var maxScroll = 25 * slidesCount;
    function showPrevSlide(e) {
        slidePosition += 25;
        if (slidePosition == 25) {
            slidePosition = 0;
        }
        document.getElementsByClassName("slider2-wrapper")[0].style.transform =
            "translateX(" + slidePosition + "%)";
    }
    function showNextSlide(e) {
        slidePosition -= 25;
        if (-slidePosition == maxScroll) {
            slidePosition = -maxScroll + 25;
        }
        document.getElementsByClassName("slider2-wrapper")[0].style.transform =
            "translateX(" + slidePosition + "%)";
    }
    document
        .getElementsByClassName("prev")[0]
        .addEventListener("click", showPrevSlide, false);
    document
        .getElementsByClassName("next")[0]
        .addEventListener("click", showNextSlide, false);
});
