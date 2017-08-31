var asklink = document.querySelector(".contacts__btn");
var askPopup = document.querySelector(".modal");
if (askPopup) {
  var askClose = askPopup.querySelector(".modal__close");
  var askName = askPopup.querySelector("#form__name");

  asklink.addEventListener("click", function (evt) {
    evt.preventDefault();
    askPopup.classList.add("modal__content-show");
    askName.focus();
  });
  askClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    askPopup.classList.remove("modal__content-show");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (askPopup.classList.contains("modal__content-show")) {
        askPopup.classList.remove("modal__content-show");
      }
    }
  });
  askPopup.classList.remove("modal--nojs");
}
