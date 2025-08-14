// for ( let i = 0; i < 10 ; i++){
//     if (i % 2  === 1){}
//         // console.log(i);
//     else{
//         console.log(i);
//     }
        
// }

// uyga vazifalar ==========================================================================================
// for (let i = 0; i < 5; ++i) {
//   // Bu yerda ++i ishlatilgan bo‘lsa ham, for siklining uchinchi qismida
//   // bo‘lgani uchun natija i++ bilan bir xil bo‘ladi.
//   // Ya'ni, avval i konsolga chiqadi, keyin oshiriladi.
//   console.log("Prefix:", i);
// }

// let a = 1;
// console.log(a++); // 1 (avval chiqaradi, keyin oshiradi)
// console.log(a);   // 2

// let b = 1;
// console.log(++b); // 2 (avval oshiradi, keyin chiqaradi)
// console.log(b);   // 2

// let number;

// while (true) {
//   number = prompt("Iltimos, 100 dan katta son kiriting:", "");

//   // Agar foydalanuvchi bekor qilsa (null) yoki bo‘sh qator kiritsa — sikl to‘xtaydi
//   if (number === null || number === "") {
//     console.log("Foydalanuvchi hech narsa yozmadi yoki bekor qildi.");
//     break;
//   }

//   // Sonni butun qiymatga aylantirib olamiz
//   number = Number(number);

//   // Agar son 100 dan katta bo‘lsa — sikl to‘xtaydi
//   if (number > 100) {
//     console.log("Rahmat! Siz 100 dan katta son kiritdingiz:", number);
//     break;
//   }
// }


let n = 10; // bu yerga istalgan n qiymatini yozish mumkin

for (let i = 2; i <= n; i++) {
  let isPrime = true;

  // Har bir i uchun, 2 dan boshlab i-1 gacha bo‘luvchilarni tekshiramiz
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false; // agar i soni j ga bo‘linsa, bu tub son emas
      break;
    }
  }

  if (isPrime) {
    console.log(i); // agar tub bo‘lsa, konsolga chiqaramiz
  }
}
