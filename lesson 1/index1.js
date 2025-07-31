let yil = prompt("Tugilgan yilingizni kiriting:");
let hozirgiYil = new Date().getFullYear();
if (yil === null || yil === "" || isNaN(yil) || yil > hozirgiYil || yil < 1900) {
  alert("Iltimos, togri yil kiriting!");
} else {
  let yosh = hozirgiYil - parseInt(yil);
  alert("Sizning yoshingiz: " + yosh + " yosh");
}