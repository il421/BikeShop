'use strict';

(function () {
  var btnToBack = document.querySelector('.btn-back');
  var pageHeader = document.querySelector('.page-header');
  var anchorsOfMenu = document.querySelectorAll('a[href*="#"]');


  var hideAndShowScrollBtn = function () {
    if (window.pageYOffset > 0) {
      btnToBack.classList.remove('invisible');
    } else {
      btnToBack.classList.add('invisible');
    }
  };

  var scrollToMenu = function (evt) {
    var animationTime = 300;
    var framesCount = 25;
    var coordY = document.querySelector(evt.target.hash).getBoundingClientRect().top;

    evt.preventDefault();

    var scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      var scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемент и дно страницы не достигнуто
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  };

  var scrollUp = function () {
    var topCoordinate = pageHeader.getBoundingClientRect().top;
    window.scrollTo(0, topCoordinate);
  };

  //SLIDER
  setInterval(window.nextSlide, 2000);

  //SCROLL SHOW-HIDE
  window.scrolling.showButtonToScrollUp(hideAndShowScrollBtn);
  //SCROLL TO ELEMENT
  window.scrolling.scrollToElement(anchorsOfMenu, scrollToMenu);
  //SCROLL TO TOP
  window.scrolling.scrollToTop(btnToBack, scrollUp);

})()
