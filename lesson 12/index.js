// let person = {
//     name:"eshmat",
//     age: 20,
//     status:"student",
//     address:"namaangan shahar"
// }

// for (let key in person){
//     console.log(key,person [key]);
    
// }



function min(a, b) {
    if (a < b) return a;
    else return b;
}
console.log(min(2, 5) == 2);   // 2 kichik, natija: true
console.log(min(3, -1) == -1); // -1 kichik, natija: true
console.log(min(1, 1) == 1);   // Teng, 1 qaytadi, natija: true

// ===============================================================================

function pow(x, n) {
    let result = 1; 
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result; 
}

// Testlar
console.log(pow(3, 2));   // 3 * 3 = 9
console.log(pow(3, 3));   // 3 * 3 * 3 = 27
console.log(pow(1, 100)); // 1 * 1 * ... * 1 = 1

// ===============================================================================

function ask(question, yes, no) {
    if (question) yes();
    else no();
}
ask(
    "Do you agree?",
    () => {
        console.log(" You agreed."); // Agar foydalanuvchi "OK" bosgan bo‘lsa
        alert("You agreed.");
    },
    () => {
        console.log(" You canceled the execution."); // Agar foydalanuvchi "Cancel" bosgan bo‘lsa
        alert("You canceled the execution.");
    }
);

// =================================================================================

let student = {
  firstName: "Eshmat", // E'tibor: first Name bo'lmasligi kerak, bo'sh joysiz yoziladi
  lastName: "Toshmatov",
  age: 20,
  course: "Frontend"
};

console.log(`${student.firstName} ${student.lastName} ${student.age}`);
// Natija: Eshmat Toshmatov 20

// ===============================================================================

let data = {
  name: "Phone",
  model: "iPhone",
  price: 700,
  quantity: 8
};

let totalPrice = data.price * data.quantity;

console.log(`Umumiy narx: ${totalPrice}`);
// Natija: Umumiy narx: 5600
