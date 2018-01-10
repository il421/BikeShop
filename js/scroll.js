'use strict';
(function () {
  window.scrollToTop = function (element, coordinateY) {
    element.addEventListener('click', function () {
      window.scrollTo(0, coordinateY);
    });
  };



  // menuLinks.addEventListener('click', function() {
  //   var coordinateY = gettingCoordinats(sectionShop);
  //
  //   var start = Date.now(); // сохранить время начала
  //
  //   var timer = setInterval(function() {
  //     // вычислить сколько времени прошло из opts.duration
  //     var timePassed = (Date.now() - start) / 3;
  //     console.log(timePassed);
  //
  //     window.scrollTo(0, timePassed);
  //
  //     if (timePassed > coordinateY.top) clearInterval(timer);
  //
  //   }, 50);
  //
  //
  // });
})();
