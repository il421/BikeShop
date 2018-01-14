'use strict';
(function () {
  window.scrollToTop = function (element, coordinateY) {
    document.addEventListener('scroll', function() {
      if (window.pageYOffset > 0) {
        element.classList.remove('invisible');
      } else {
        element.classList.add('invisible');
      }
    });

    element.addEventListener('click', function () {
      window.scrollTo(0, coordinateY);
    });
  };

  window.scrollToElement = function (anchors) {
    var animationTime = 300;
    var framesCount = 25;

    anchors.forEach(function(item) {
      item.addEventListener('click', function(evt) {
        // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
        var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
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
      });
    });
  };
})();
