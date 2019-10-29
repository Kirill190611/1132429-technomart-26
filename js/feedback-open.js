var fdLink = document.querySelector(".contacts-button");
var fdPopup = document.querySelector(".modal-feedback");
var fdClose = fdPopup.querySelector(".modal-close");

var fdForm = fdPopup.querySelector("form");
var fullName = fdPopup.querySelector("[name=fullname]");
var email = fdPopup.querySelector("[name=email]");
var feedback = fdPopup.querySelector("[name=feedback]");

fdLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    fdPopup.classList.add("modal-show");
    fullName.focus();
});

fdClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    fdPopup.classList.remove("modal-show");
    fdPopup.classList.remove("modal-error");
});

fdForm.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !feedback.value) {
        evt.preventDefault();
        fdPopup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (fdPopup.classList.contains("modal-show")) {
            fdPopup.classList.remove("modal-show");
            fdPopup.classList.remove("modal-error");
        }
    }
});