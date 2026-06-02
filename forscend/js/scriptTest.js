const hamMenu = document.querySelector('.ham-menu');

const Menu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  Menu.classList.toggle('active');
})