// let i = 1;
// while (i <= 100){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// let a = 5;
// let b = 30;
// let summa = 0;
// while (a <= b){
//     summa += a;
//     if(b % 3){
//         summa += b;
//         console.log(b);
        
//     }
// }
// console.log(summa);




let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

let kod;
do {
  kod = prompt("Parolni kiriting:");
} while (kod !== "admin123");

alert("Parol to‘g‘ri! Xush kelibsiz!");

let son;
let yigindi = 0;

do {
  son = Number(prompt("Son kiriting (0 to‘xtatadi):"));
  yigindi += son;
} while (son !== 0);

console.log("Yig‘indi:", yigindi);

let n;
do {
  n = Number(prompt("Iltimos, 100 dan katta son kiriting:"));
} while (n <= 100);

alert("Rahmat!");

let tanlov;
do {
  tanlov = prompt("Quyidagilardan birini tanlang:\n1. Ko‘rish\n2. Tahrirlash\n3. Chiqish");
} while (tanlov !== "1" && tanlov !== "2" && tanlov !== "3");

alert("Siz tanladingiz: " + tanlov);


    console.log("1. 1 dan 5 gacha:");
    let z = 1;
    while (i <= 5) {
      console.log(i);
      z++;
    }

        // 2. 10 dan 1 gacha kamaytirish
    console.log("2. 10 dan 1 gacha:");
    let j = 10;
    while (j >= 1) {
      console.log(j);
      j--;
    }

        // 3. 5 ta juft son chiqarish
    console.log("3. 5 ta juft son:");
    let count = 0;
    let num = 2;
    while (count < 5) {
      console.log(num);
      num += 2;
      count++;
    }

    
    // 4. Foydalanuvchi 0 kiritmaguncha sonlarni yig‘ish
    let input;
    let sum = 0;
    input = prompt("4. Son kiriting (0 to‘xtatadi):");
    while (input !== "0") {
      sum += Number(input);
      input = prompt("Yana son kiriting (0 to‘xtatadi):");
    }
    console.log("Yig‘indi:", sum);

    
    // 5. Parol to‘g‘ri bo‘lmaguncha kiritish
    let password = prompt("5. Parolni kiriting:");
    while (password !== "admin123") {
      password = prompt("Noto‘g‘ri. Qaytadan kiriting:");
    }
    alert("Parol to‘g‘ri! Xush kelibsiz!");