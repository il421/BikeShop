'use strict';

var btnToBack = document.querySelector('.btn-back');
var pageHeader = document.querySelector('.page-header');
var topCoordinate = window.utiles.gettingCoordinats(pageHeader);

//SLIDER
setInterval(window.nextSlide, 2000);

//SCROLL TO TOP
document.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    btnToBack.classList.remove('invisible');
  } else {
    btnToBack.classList.add('invisible');
  }
});

window.scrollToTop(btnToBack, topCoordinate);
