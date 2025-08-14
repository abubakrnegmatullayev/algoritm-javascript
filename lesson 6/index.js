// // =============================================================
// // If-else misoli
// let a = +prompt('a sonini kiriting:', '');
// switch (a) {
//     case 0:
//         console.log('Natija: 0');
//         break;
//     case 1:
//         console.log('Natija: 1');
//         break;
//     case 2:
//     case 3:
//         console.log('Natija: 2 yoki 3');
//         break;
// }
// // =============================================================
// let browser = 'Chrome'; // Misol uchun, browser nomini o'zgartirishingiz mumkin

// if (browser === 'Edge') {
//     console.log("Sizda Edge brauzeri bor!");
// } else if (
//     browser === 'Chrome' ||
//     browser === 'Firefox' ||
//     browser === 'Safari' ||
//     browser === 'Opera'
// ) {
//     console.log('Bu brauzerlarni ham qo‘llab-quvvatlaymiz');
// } else {
//     console.log('Umid qilamizki, sahifa to‘g‘ri ko‘rinadi!');
// }
// // =============================================================
// let login = 'Employee'; // Misol uchun, login qiymatini o'zgartirishingiz mumkin
// let message =
//     login == 'Employee' ? 'Salom' :
//     login == 'Director' ? 'Xush kelibsiz' :
//     login == '' ? 'Login kiritilmadi' :
//     '';
// console.log(message);

// // =============================================================

// let a2 = 2;
// let b = 1;

// // Ternary operatori yordamida natija
// let result = (a2 + b < 4) ? 'Past' : 'Yuqori';
// console.log("Natija:", result);




let a = 5;
let b = 30;
let summa = 0;
while (a <= b){
    summa += a;
    if(b % 3){
        summa += b;
        console.log(b);
        
    }
}
console.log(summa);
