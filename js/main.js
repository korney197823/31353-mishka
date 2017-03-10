
var menuButtom = document.querySelector('.menu__toggle');
var menu = document.querySelectorAll('.menu__item--mobile');


menuButtom.addEventListener('click', function () {
  for (var i = 0; i < menu.length; i++) {
    menu[i].classList.toggle('open');
  }
})
