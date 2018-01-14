'use strict';

(function () {
  var btnToBack = document.querySelector('.btn-back');
  var pageHeader = document.querySelector('.page-header');
  var anchorsOfMenu = document.querySelectorAll('a[href*="#"]');


  var scrollUp = function () {
    var topCoordinate = pageHeader.getBoundingClientRect().top;
    window.scrollTo(0, topCoordinate);
  };

  var hideAndShowBtn = function () {
    if (window.pageYOffset > 0) {
      btnToBack.classList.remove('invisible');
    } else {
      btnToBack.classList.add('invisible');
    }
  };

  //SLIDER
  setInterval(window.nextSlide, 2000);

  //SCROLL TO TOP
  window.scrolling.scrollToTop(btnToBack, scrollUp);
  //SCROLL TO SHOW
  window.scrolling.showButtonToScrollUp(hideAndShowBtn);
  //SCROLL TO ELEMENT
  window.scrolling.scrollToElement(anchorsOfMenu);

})()
