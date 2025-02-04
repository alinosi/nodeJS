// Konversi Eksplisit
/*
Konversi eksplisit adalah cara yang paling dapat diandalkan untuk mengubah tipe data
karena dilakukan dengan instruksi yang jelas, alias eksplisit dari programmer. 
Berikut adalah beberapa metode umum yang digunakan untuk konversi tipe data secara eksplisit.
*/

// Mengubah ke String
/* 
Untuk mengubah suatu tipe data ke bentuk string umumnya dapat dilakukan dengan dua cara,
yaitu menggunakan fungsi String() dan method .toString().
Berikut adalah contoh dari penggunaan kedua cara tersebut.
*/

const number = 123;
const boolean = true;

const strNumber = String(number); // cara 1
const strBoolean = boolean.toString(); // cara 2

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"


// Konversi ke number
const strNumbers = '123';
const strFloat = '3.14';
const booleans = true;

const numFromString = Number(strNumbers); // tidak ada fungsi .toNumber()
const floatFromString = Number(strFloat);
const numFromBoolean = Number(booleans);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1


// Memisahkan Number dengan string
const cm = '20cm';
const px = '64.1px';

const intFromCM = parseInt(cm);
const intFromPX = parseFloat(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64


// boolean juga sama, gunakan functions Boolean('ygdiubah')


// konversi implisit

let numerial = 11;
let word = '1';

console.log(numerial + word); // output 111, karena + termasuk concatenation

numerial = 11;
word = '1';

console.log(numerial - word); // output 10, karena - hanya untuk operasi matematika

const bool = true;
const result = bool + 1;

console.log(result); // output: 2

// hierarki konversi : 
//        string
//      --Number--
//   ----Boolean----