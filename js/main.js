
var menuButtom = document.querySelector('.menu__toggle');
var menu = document.querySelectorAll('.menu__item--mobile');


menuButtom.addEventListener('click', function () {
  for (var i = 0; i < menu.length; i++) {
    menu[i].classList.toggle('open');
  }
})


// MODAL

var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal__overlay");
var closeModal = document.querySelector(".close-modal");
var openModal = document.querySelector(".open-modal");

// closeModal.addEventListener("click", function() {
//   modal.classList.toggle("closed");
//   modalOverlay.classList.toggle("closed");
// });

openModal.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});
