'use strict';
(function () {
  var sliderElements = document.querySelectorAll('.slider__item');
  var currentSlide = 0;
  window.nextSlide = function () {
    sliderElements[currentSlide].className = 'slider__item';
    currentSlide = (currentSlide+1)%sliderElements.length;
    sliderElements[currentSlide].className = 'slider__item slider_show';
  };
})();
