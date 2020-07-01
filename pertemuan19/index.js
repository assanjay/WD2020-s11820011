/* console.log ("javascript conditonal");
let firstName = 'John';
let isMarried = true;

if(isMarried === true){
    console.log (firstName + "is married")
}
else{
    console.log (firstName + "Will Marry soon")
}

let nilaiAndi = 55;

if (nilaiAndi > 80) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("JANGAN MENYERAH, COBA LAGI!");
}
*/
/*let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "selasa":
    seragamSekolah = "kemeja hijau bawahan hitam";
    break;
  case "rabu":
    seragamSekolah = "kemeja putih bawahan putih";
    break;
  case "kamis":
    seragamSekolah = "kemeja batik merah bawahan hitam";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}
*/
/* let name= 'john';
 function calculateAge (birthYear){
    let age = 2020 - birthYear;
    console.log (name + " age is " + age);

}

let age = calculateAge(1991);
*/

const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  console.log(olahraga); // Output: basketball
  if (olahraga === 'basketball') {
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(olahraga); // Output: basketball
  }
  return atlet;
}
console.log(namaAtlet()); // Output: Kobe Bryant