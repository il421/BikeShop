'use strict';
(function () {
  window.scrolling = {
    showButtonToScrollUp: function (callback) {
      document.addEventListener('scroll', callback)
    },

    scrollToTop: function (element, callback) {
      element.addEventListener('click', callback);
      element.addEventListener('keydown', function(evt) {
        if (window.utils.isActiavateEvent(evt)) {
          callback();
        }
      });
    },

    scrollToElement: function (anchors, callback) {
      anchors.forEach(function(item) {
        item.addEventListener('click', callback);
        item.addEventListener('keydown', function(evt) {
          if (window.utils.isActiavateEvent(evt)) {
            callback();
          }
        });
      });
    }
  }
})();
