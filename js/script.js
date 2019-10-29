var Link = document.querySelectorAll(".buy");
var Popup = document.querySelector(".modal-alert");
var Close = Popup.querySelector(".modal-close");

for (i = 0; i < Link.length; ++i) {
    Link[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        Popup.classList.add("modal-show");
    });
}

Close.addEventListener("click", function (evt) {
    evt.preventDefault();
    Popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (Popup.classList.contains("modal-show")) {
            Popup.classList.remove("modal-show");
        }
    }
});

// script for modal-alert

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

// script for modal-feedback

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault ();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});

// script for modal-map