// let ism = 'abubakr'
// let famila = 'negmatullayev'


// function salomber (ism , famila){
//     console.log(ism + famila);
    
// }

// salomber(ism,famila)


// let a = +prompt('1ci son ')
// let b = +prompt('2ci son ')
// function qoshish(1chi son,2chi son){
    
// }
// qoshish(a,b)

// let ism = prompt("isim kiriting ")
// function salomber (salomlar){
//     console.log(ism)
// }
// salomber(ism)



// funktion bu codlar toplamibolib uni qayta chaqrib ishlatsak boladi  bu qayta code yozishni va code kopayishini oldini oladi 
// parametr bu funksiya yaratilganda yoziladigan ozgaruvchi 

// argument bu funksiya chiqirilganda uzatiladigan qiymat

// let a  = +prompt("1chi kiriting")
// let b = +prompt("2chi kiriting")
// function qoshish(birinchison , ikkinchison){
//         if (birinchison > ikkinchison ){
//             console.log('birinchi son katta');
//         } else {
//             console.log('ikkinchi son katta')
//         }
// }

// qoshish(a,b)

// 1-funktion declaration 
let myname = 'abubak'
function salomberfun (ism){
    console.log("salom"+ ism);
    }
    salomberfun(myname)
    
    // 2-funktion expression
let myfiriendfun = 'abubakr'

const friendfun = function(ism1,ism2){
    console.log(ism1,ism2 + "we are friend");
}
myfiriend(myname,myfiriendfun)


// 3-arrow function
let teachersname = 'fizilhon'
const teacherfun = (teacher) => {
    console.log('my teacher ' + teacher);
    
}



// 1. Ikki sonni qo‘shish
function add(a, b) {
    console.log(a + b);
}
add(2, 3); // 5

// 2. Kvadratini chiqarish
function square(num) {
    console.log(num * num);
}
square(4); // 16

// 3. Juft yoki toq ekanini chiqarish
function isEven(number) {
    console.log(number % 2 === 0);
}
isEven(6); // true
isEven(7); // false

// 4. Ism bilan salom berish
function greet(name) {
    console.log("Salom, " + name + "!");
}
greet("Abubakr"); // Salom, Abubakr!

// 5. Yoshidan tug‘ilgan yilini chiqarish
function birthYear(age) {
    let yil = new Date().getFullYear();
    console.log(yil - age);
}
birthYear(25); // Masalan: 2000




// 1. Ikki sonni qo‘shish
const add = function(a, b) {
    console.log(a + b);
};
add(2, 3); // 5

// 2. Kvadratini chiqarish
const square = function(num) {
    console.log(num * num);
};
square(4); // 16

// 3. Juft yoki toq ekanini chiqarish
const isEven = function(number) {
    console.log(number % 2 === 0);
};
isEven(6); // true
isEven(7); // false

// 4. Ism bilan salom berish
const greet = function(name) {
    console.log("Salom, " + name + "!");
};
greet("Abubakr"); // Salom, Abubakr!

// 5. Haroratni °C dan °F ga o‘tkazish
const celsiusToFahrenheit = function(celsius) {
    console.log((celsius * 9/5) + 32);
};
celsiusToFahrenheit(25); // 77





// 1. Ikki sonni qo‘shish
const add = (a, b) => console.log(a + b);
add(2, 3); // 5

// 2. Kvadratini chiqarish
const square = num => console.log(num * num);
square(4); // 16

// 3. Juft yoki toq ekanini chiqarish
const isEven = number => console.log(number % 2 === 0);
isEven(6); // true
isEven(7); // false

// 4. Ism bilan salom berish
const greet = name => console.log(`Salom, ${name}!`);
greet("Abubakr"); // Salom, Abubakr!

// 5. Haroratni °C dan °F ga o‘tkazish
const celsi = celsius => console.log((celsius * 9/5) + 32);
celsi(25); // 77
