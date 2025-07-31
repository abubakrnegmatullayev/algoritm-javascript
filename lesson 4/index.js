// //functiong decloration
// // funktion expression
// // arrow function

// // + 5 ta misol console golda qilish 
// console.log(20 + 5); // 25
// console.log(15 + 5); // 20
// console.log(10 + 5); // 15
// console.log(5 + 5); // 10
// console.log(0 + 5); // 5

// console.log(20 - 5); // 15
// console.log(15 - 5); // 10
// console.log(10 - 5); // 5
// console.log(5 - 5); // 0
// console.log(20 * 5); // 100

// console.log(20 * 5); // 100
// console.log(15 * 5); // 75
// console.log(10 * 5); // 50
// console.log(5 * 5); // 25
// console.log(20 * 5); // 4

// console.log(20 / 5); // 4
// console.log(15 / 5); // 3
// console.log(10 / 5); // 2
// console.log(5 / 5); // 1
// console.log(0 / 5); // 0

// console.log(20 % 5); // 0
// console.log(15 % 5); // 0
// console.log(10 % 5); // 0
// console.log(5 % 5); // 0
// console.log(0 % 5); // 0

// console.log(20 * 2 + (15-10)); // 400
// console.log(15 * 2 + (10-5)); // 225
// console.log(10 * 2 + (5-0)); // 100
// console.log(5 * 2 + (0-0)); // 25
// console.log(0 * 2 + (0-0)); // 0

// let a = 10;
// console.log(a + 5); // 15
// console.log(a - 5); // 5
// console.log(a * 5); // 50
// console.log(a / 5); // 2
// console.log(a % 5); // 0

// let b = 20;
// b++;
// b++;
// b++;
// b++;
// b++;
// console.log(b); // 25

// let c = 30;
// c--;
// c--;
// c--;
// c--;
// c--;
// console.log(c); // 25

// console.log(5 ** 2); // 25
// console.log(5 ** 3); // 125
// console.log(5 ** 4); // 625
// console.log(5 ** 5); // 3125
// console.log(5 ** 6); // 15625


// let a = 1, b = 1;

// let c = ++a; 
// let d = b++; 

// let m = 2; 
// let x = 1 + (m *= 2);

// console.log("" + 1 + 0);          //  "10"
// // "" string, 1 ham stringga aylanadi → "1" + "0" → "10"

// console.log("" - 1 + 0);          //  -1
// // "" - 1 → 0 - 1 → -1

// console.log(true + false);       //  1
// // true → 1, false → 0, 1 + 0 = 1

// console.log(6 / "3");            //  2
// // "3" numberga aylanadi → 6 / 3 = 2

// console.log("2" * "3");          //  6
// // Ikkalasi ham numberga aylanadi → 2 * 3 = 6

// console.log(4 + 5 + "px");       //  "9px"
// // 4 + 5 = 9, keyin 9 + "px" → "9px"

// console.log("$" + 4 + 5);        //  "$45"
// // "$" + 4 → "$4", "$4" + 5 → "$45"

// console.log("4" - 2);            //  2
// // "4" numberga aylanadi → 4 - 2 = 2

// console.log("4px" - 2);          //  NaN
// // "4px" → not a number, NaN - 2 = NaN

// console.log("  -9  " + 5);       //  "  -9  5"
// // String + number → string: "  -9  " + "5"

// console.log("  -9  " - 5);       //  -14
// // "  -9  " → number -9, -9 - 5 = -14

// console.log(null + 1);          //  1
// // null → 0, 0 + 1 = 1

// console.log(undefined + 1);     //  NaN
// // undefined → NaN, NaN + 1 = NaN

// console.log(" \t \n" - 2);      //  -2
// // White space string → 0, 0 - 2 = -2

// // Expressions from the image:
// console.log(5 > 4); // true
// // 5 is greater than 4

// console.log("apple" > "pineapple"); // false
// // Lexicographical comparison: 'a' < 'p'

// console.log("2" > "12"); // true
// // Lexicographical comparison: '2' > '1'

// console.log(undefined == null); // true
// // Only true for ==, not ===

// console.log(undefined === null); // false
// // Different types

// console.log(null == "\n0\n"); // false
// // null only loosely equals undefined

// console.log(null === +"\n0\n"); // false
// // +"\n0\n" is 0, null is not strictly equal to 0


// // Equivalent to: alert(null || 2 || undefined);
// console.log(null || 2 || undefined); // 2
// // The first truthy value is 2

// console.log(null || 2 || undefined); // 2
// // The first truthy value is 2

// // Equivalent to: alert(alert(1) || 2 || alert(3));
// function show(x) {
//   console.log(x);
//   return undefined;
// }
// console.log(show(1) || 2 || show(3)); // 1, 2
// // show(1) prints 1 and returns undefined (falsy), so 2 is printed as the result











console.log(1 && null && 2); // Natija: null

console.log( console.log(1) && console.log(2) ); 

console.log(null || 2 && 3 || 4);// natija 3

// Yoshga qarab qayerda o'qishizni aniqlash
let yosh = 16;
if (yosh < 7) {
    console.log("Bog'chada o'qiysiz");
} else if (yosh < 17) {
    console.log("Maktabda o'qiysiz");
} else if (yosh < 23) {
    console.log("Kollej yoki litseyda o'qiysiz");
} else {
    console.log("Universitet yoki ishlaysiz");
}

// Markasiga qarab mashinalarni ro'yxatini chiqarish~`
let marka = "Chevrolet";
if (marka === "Chevrolet") {
    console.log("Malibu, Cobalt, Nexia, Spark");
} else if (marka === "Kia") {
    console.log("K5, Sportage, Seltos");
} else if (marka === "Hyundai") {
    console.log("Sonata, Elantra, Tucson");
} else {
    console.log("Bunday marka mavjud emas");
}

// Turiga qarab mevalarni ro'yxatini chiqarish
let turi = "tropik";
if (turi === "tropik") {
    console.log("Banan, Ananas, Mango");
} else if (turi === "daraxt") {
    console.log("Olma, Nok, Gilos");
} else if (turi === "poliz") {
    console.log("Tarvuz, Qovun, Bodring");
} else {
    console.log("Bunday turdagi mevalar yo'q");
}

// 1. Bahoga qarab natija chiqarish
let baho = 4;
if (baho === 5) {
    console.log("A'lo");
} else if (baho === 4) {
    console.log("Yaxshi");
} else if (baho === 3) {
    console.log("Qoniqarli");
} else {
    console.log("Qoniqarsiz");
}

// 2. Kun nomiga qarab hafta kuni yoki dam olish kuni aniqlash
let kun = "shanba";
if (kun === "shanba" || kun === "yakshanba") {
    console.log("Dam olish kuni");
} else {
    console.log("Hafta kuni");
}

// 3. Haroratga qarab tavsiya berish
let harorat = 35;
if (harorat > 40) {
    console.log("Juda issiq, ehtiyot bo'ling!");
} else if (harorat > 25) {
    console.log("Ob-havo iliq");
} else if (harorat > 10) {
    console.log("Salqin");
} else {
    console.log("Sovuq");
}

// 4. Balga qarab stipendiya aniqlash
let bal = 85;
if (bal >= 90) {
    console.log("To'liq stipendiya");
} else if (bal >= 70) {
    console.log("Yarim stipendiya");
} else {
    console.log("Stipendiya yo'q");
}

// 5. Yoshga qarab chipta narxi
let age = 15;
if (age < 7) {
    console.log("Bepul");
} else if (age < 18) {
    console.log("Bolalar uchun chegirma");
} else {
    console.log("To'liq narx");
}

// 6. Rangga qarab meva aniqlash
let rang = "qizil";
if (rang === "qizil") {
    console.log("Olma, Gilos");
} else if (rang === "sariq") {
    console.log("Banan, Nok");
} else {
    console.log("Bunday rangdagi meva yo'q");
}

// 7. Haftaning tartib raqamiga qarab kun nomi
let tartib = 3;
if (tartib === 1) {
    console.log("Dushanba");
} else if (tartib === 2) {
    console.log("Seshanba");
} else if (tartib === 3) {
    console.log("Chorshanba");
} else if (tartib === 4) {
    console.log("Payshanba");
} else if (tartib === 5) {
    console.log("Juma");
} else if (tartib === 6) {
    console.log("Shanba");
} else if (tartib === 7) {
    console.log("Yakshanba");
} else {
    console.log("Bunday kun yo'q");
}

// 8. Telefon modeliga qarab ishlab chiqaruvchi
let model = "iPhone";
if (model === "iPhone") {
    console.log("Apple");
} else if (model === "Galaxy") {
    console.log("Samsung");
} else if (model === "Redmi") {
    console.log("Xiaomi");
} else {
    console.log("Boshqa kompaniya");
}

// 9. Toifadagi sport turlarini chiqarish
let toifa = "jamoaviy";
if (toifa === "jamoaviy") {
    console.log("Futbol, Basketbol, Voleybol");
} else if (toifa === "yakkalik") {
    console.log("Tennis, Shaxmat, Boks");
} else {
    console.log("Bunday toifa yo'q");
}

// 10. Yil fasliga qarab tavsiya
let fasl = "qish";
if (fasl === "bahor") {
    console.log("Tabiat uyg'onadi");
} else if (fasl === "yoz") {
    console.log("Ta'til va dam olish");
} else if (fasl === "kuz") {
    console.log("Barglar to'kiladi");
} else if (fasl === "qish") {
    console.log("Qor yog'adi, sovuq");
} else {
    console.log("Bund~ay fasl yo'q");
}