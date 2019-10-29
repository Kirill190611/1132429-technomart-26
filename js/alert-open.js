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
