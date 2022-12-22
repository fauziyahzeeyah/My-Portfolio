const hamburger = document.querySelector('.toggle');
const links = document.querySelector('.mobile-navigation');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  links.classList.toggle('show');
});

document.querySelectorAll('.nav-tool').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('open');
  links.classList.remove('show');
}));