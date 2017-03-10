
var menuButtom = document.querySelector('.menu__toggle');
var menu = document.querySelector('.menu__list');

menuButtom.addEventListener('click', function () {
  menu.classList.toggle('open');
})
