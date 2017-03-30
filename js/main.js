
var menuButtom = document.querySelector(".menu__toggle");
var menu = document.querySelectorAll(".menu__item--mobile");

document.addEventListener("DOMContentLoaded", function () {

});


menuButtom.addEventListener("click", function () {

  for (var i = 0; i < menu.length; i++) {
    menu[i].classList.toggle("open");
  }
  menuButtom.classList.toggle("menu__toggle--close")
})


// MODAL

var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal__overlay");
var closeModal = document.querySelector(".close-modal");
var openModal = document.querySelector(".open-modal");


openModal.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

closeModal.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});
