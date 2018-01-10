'use strict';

(function () {
  window.utiles = {
    gettingCoordinats: function (elem) {
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset
      }
    }
  }
})();
