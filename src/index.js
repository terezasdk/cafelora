import './style.css';
import { Layer } from './Layer/index'; // z úkolu 5
import { Drink } from './Drink/index'; // z úkolu 7

console.log('funguju!');

// 3 Zprovoznění navigace
document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

document.querySelectorAll('nav').forEach((navlink) => {
  navlink.addEventListener('click', () => {
    navlink.classList.toggle('nav-closed');
  });
});

// 4 Objednávání
// const orderBtnElm = document.querySelector('.order-btn');
// const drinkCupElm = document.querySelector('.drink__cup');
// let ordered = false;

// orderBtnElm.addEventListener('click', () => {
//   if (ordered === false) {
//     drinkCupElm.classList.add('drink__cup--selected');
//     orderBtnElm.textContent = 'Zrušit';
//     ordered = true;
//   } else {
//     drinkCupElm.classList.remove('drink__cup--selected');
//     orderBtnElm.textContent = 'Objednat';
//     ordered = false;
//   }
// });

// // 5 Ingredience jako komponenty
// const item1 = {
//   color: '#feeeca',
//   label: 'mléčná pěna',
// };

// const item2 = {
//   color: '#fed7b0',
//   label: 'teplé mléko',
// };

// const item3 = {
//   color: '#613916',
//   label: 'espresso',
// };

// const drinkInfoElm = document.querySelector('.drink__info');
// //drinkInfoElm.innerHTML += Layer(item1);
// //drinkInfoElm.innerHTML += Layer(item2);
// //drinkInfoElm.innerHTML += Layer(item3);

// // 6 Seznam ingrediencí (dělá to to samé jako 5, jen je to jiný kód)
// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

// layers.forEach((item) => {
//   drinkInfoElm.innerHTML += Layer(item); // const drinkInfoElm definuju na řádku 50
// });

// 7 Nápoj jako komponenta
const drinksList = document.querySelector('.drinks-list');
drinksList.append(
  Drink({
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  }),
);
