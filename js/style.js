'use strict';
(function () {
  var sliderElements = document.querySelectorAll('.slider__item');
  var currentSlide = 0;

  var nextSlide = function () {
    sliderElements[currentSlide].className = 'slider__item';
    currentSlide = (currentSlide+1)%sliderElements.length;
    sliderElements[currentSlide].className = 'slider__item slider_show';
  };

  setInterval(nextSlide, 2000);
})();
