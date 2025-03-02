// const test = NaN;
// console.log(test);
// console.log(Boolean(""));

// && - logical AND

// ! - logical NOT

// const num = 200;   //true   //false
// const result = num > 10 && num < 30;
// console.log(result);

// || - logical OR

// const num = 12;  //false  //false
// const result = num < 10 || num > 30;
// console.log(result);

// console.log(!true);
// console.log(!false);
// console.log(!1);
// console.log(!0);

/*
* Логічне І (оператор &&)
* - Запинається на брехні
* - Повертає те на чому запнулось або останній операнд
*/


//  console.log(1 && 4 && 7 && 'mango');


/*
 * Логічне АБО (оператор ||)
 * - Запинається на правді
 * - Повертає те на чому запнулось або останній операнд
 */


// console.log("name in wonderland"|| "" || null || 0 || undefined);

/*
 * Логічне НІ (оператор !)
 * Робить інверсію правда > брехня та брехня > правда
 */


// console.log(!" ");



// let cost = 100;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   cost = 100;
//   console.log(cost + "you are pro!");
// } 

// let cost = 0;
// const subscription = 'free';

// if (subscription === 'pro') {
//   cost = 100;
// }

// let cost;
// const subscription = prompt('Please enter your product type');

// if (subscription === 'Apple') {
//   cost = 0.3;
// } else if (subscription === 'Banana') {
//   cost = 0.2;
// } else if (subscription === 'kiwi') {
//   cost = 0.2;
// } else if (subscription === 'orange') {
//     cost = 0.4;
// } else {
//   console.log('Invalid product type');
//   alert('Invalid product type!');
// }

// confirm(`Do you want to buy ${subscription}?`);
// alert(`${cost} $ is your product cost`);
// // alert(`Your product cost is ${cost} $`);

// console.log(cost);

// let type;
// const card = prompt('Please enter your card');

// const card = prompt('Please enter your card');
// const type = card >= 1 ? 'Welcome to our website ' : 'You are not allowed to visit this website';
// console.log(type);
// if (card >= 1) {
//   type = 'ok';
//     document.write('Welcome to our website');
// } else {
//   type = 'no';
//   document.write('You are not allowed to visit this website');
// }

// let type;
// const realName = prompt('Please enter real name of JavaScript');

// if (realName === 'ECMAScript') {
//     type = 'ok';
//     alert('You are right!');
//     document.write('You are right!');
    
// } else {
//     type = 'no';
//     alert('You are wrong! ECMAScript!');
//     document.write('You are wrong! ECMAScript!');
// }

let balance = 1000;
let withdrawal = parseFloat(prompt("Введіть суму для зняття: ")) || 0;

alert(`Ви хочете зняти ${withdrawal} гривень. Перевіряємо доступні кошти...`);

if (withdrawal > 0 && withdrawal <= balance) {
    balance -= withdrawal;
    alert(`Операція успішна! Ви зняли ${withdrawal} гривень. Залишок на рахунку: ${balance} гривень.`);
} else if (withdrawal > balance) {
    alert(`Недостатньо коштів на рахунку! Ваш баланс: ${balance} гривень.`);
} else {
    alert(`${withdrawal} Це некоректна сума зняття!`);
}

alert("Дякуємо, що скористалися банкоматом!");

// console.log(cost);
// © 2025 Winex All rights reserved 
