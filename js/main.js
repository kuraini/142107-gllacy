var contactsLink = document.querySelector(".contacts__button");
var popup = document.querySelector(".popup");
var popupClose = popup.querySelector(".popup__button");
var overlay = document.querySelector(".overlay");
var form = popup.querySelector(".message");
var name = form.querySelector("[name=name]");
var mail = form.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay--show");
  popup.classList.add("popup--show");
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup--show");
  popup.classList.remove("popup--error");
  overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup--show")) {
      evt.preventDefault();
      popup.classList.remove("popup--show");
      popup.classList.remove("popup--error");
      overlay.classList.remove("overlay--show");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !mail.value || !mesage.value) {
    evt.preventDefault();
    popup.classList.remove("popup--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup--error");
  }
})
