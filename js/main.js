
var menuButtom = document.querySelector(".menu__toggle");
var menu = document.querySelector(".menu");
var menuItem = document.querySelectorAll(".menu__item--mobile");

document.addEventListener("DOMContentLoaded", function () {
  menu.classList.remove("menu--nojs");
  menuButtom.classList.remove("menu__toggle--nojs");
  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.remove("menu__item--mobile-nojs");
  }
});


menuButtom.addEventListener("click", function () {

  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.toggle("open");
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
