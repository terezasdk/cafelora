import './style.css';

console.log('funguju!');

document.querySelector('#nav-btn').addEventListener('click', (event) => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

document.querySelectorAll('nav').forEach((navlink) => {
  navlink.addEventListener('click', () => {
    navlink.classList.toggle('nav-closed');
  });
});

// připojte posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.
