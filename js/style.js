'use strict';

(function () {
  var btnToBack = document.querySelector('.btn-back');
  var pageHeader = document.querySelector('.page-header');
  var anchorsOfMenu = document.querySelectorAll('a[href*="#"]');
  var topCoordinate = window.utiles.gettingCoordinats(pageHeader);


  //SLIDER
  setInterval(window.nextSlide, 2000);

  //SCROLL TO TOP
  window.scrollToTop(btnToBack, topCoordinate);
  //SCROLL TO ELEMENT
  window.scrollToElement(anchorsOfMenu);
})()
