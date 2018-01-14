'use strict';
(function () {
  window.scrolling = {
    showButtonToScrollUp: function (callback) {
      document.addEventListener('scroll', callback)
    },

    scrollToTop: function (element, callback) {
      element.addEventListener('click', callback)
    },

    scrollToElement: function (anchors, callback) {
      anchors.forEach(function(item) {
        item.addEventListener('click', callback);
      });
    }
  }
})();
