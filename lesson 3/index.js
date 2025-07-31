// {}

// new Object();

// let obj = new Object();

// console.log(obj);

// let obj = {
//     name: "My Object",
//     type: "Custom"
// };

// console.log(obj);
// console.log(obj.name);
// console.log(obj.type);
// console.log(obj["name"]);
// console.log(obj["type"]);
// console.log(obj.name, obj.type);
// console.log(obj["name"], obj["type"]);




// let arr = new Array(1, 2, 3, 4, 5);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);



// let arr  = ["olma", "anor", "uzum", "tarvuz", "anjir", "banan", "apelsin", "limon", "mandarin", "kivi"];
// let l = arr.length - 1;
// console.log(arr);
// console.log(arr[0]);

// let btn = document.querySelector("button");
// btn.onclick = getdata;

// function getdata() {
//     console.log(arr);
// }
// getdata();

// 5ta funksiya yaratish 
// 1 yoshini aniqlasun 
// 2 qoshish
// 3 ayirish
// 4 ko'paytirish
// 5 bo'lish


// function getAge(birthYear) {
//     const currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
// }
// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function divide(a, b) {
//     if (b === 0) {
//         return "Nolga bo'lib bo'lmaydi!";
//     }
//     return a / b;
// }
// console.log("Yosh:", getAge(2000));
// console.log("Qo'shish:", add(5, 3));
// console.log("Ayirish:", subtract(5, 3));
// console.log("Ko'paytirish:", multiply(5, 3));
// console.log("Bo'lish:", divide(5, 3));


// let getAge = () => {
//      let age =  prompt("Enter age:"); 
//      age = 2025 - Number(age);
//      console.log(age); 
// };

// getAge();

function add() {
    let a = prompt("Birinchi sonni kiriting:");
    let b = prompt("Ikkinchi sonni kiriting:");
    alert("Natija: " + (Number(a) + Number(b)));
}
add();
function subtract() {
    let a = prompt("Birinchi sonni kiriting:");
    let b = prompt("Ikkinchi sonni kiriting:");
    alert("Natija: " + (Number(a) - Number(b)));
}
subtract();
function multiply() {
    let a = prompt("Birinchi sonni kiriting:");
    let b = prompt("Ikkinchi sonni kiriting:");
    alert("Natija: " + (Number(a) * Number(b)));
}
multiply();
function divide() {
    let a = prompt("Birinchi sonni kiriting:");
    let b = prompt("Ikkinchi sonni kiriting:");
    if (Number(b) === 0) {
        alert("Nolga bo'lib bo'lmaydi!");
    } else {
        alert("Natija: " + (Number(a) / Number(b)));
    }
}
divide();