// kehampaan

let message1 = null;
 
console.log(message1); // output: null

let message2;
 
console.log(message2); // output: undefined

// deklarasi eksplisit
let message = undefined;
 
console.log(message); // output: undefined

/* 
jika ingin membuat nilai kosong lebih baik gunakan null 
Properti yang diberi nilai undefined tidak akan tampak ketika diubah ke JSON
karena JSON tidak mendukung tipe data undefined.
Oleh karena itu, null lebih standar untuk menunjukkan nilai kosong.
*/