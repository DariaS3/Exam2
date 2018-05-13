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
});
