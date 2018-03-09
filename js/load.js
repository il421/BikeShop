'use strict';
(function () {
  var myForm = document.querySelector('.contact__form');
  var urlServer = '../build/register.php';
  var resultSuccessful = document.querySelector('.contact__result');

  myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(myForm);
    var xhr = new XMLHttpRequest();

    xhr.open('POST', urlServer);
    xhr.send(formData);
    myForm.reset();
    resultSuccessful.style.opacity = 1;
    setInterval(function() {
      resultSuccessful.style.opacity = 0;
    }, 3000);
  });
})()
