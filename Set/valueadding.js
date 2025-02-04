// menambah nila di set menggunakan methid add(nilai yang ingin dimasukkan)
const set = new Set();
set.add(1);
set.add(2);

// add hanya menerima 1 argumen

/*
Jika kita memberikan nilai yang sama, set hanya akan menyimpan sekali saja.
Oleh karena itu, data yang ada di dalam set tidak akan terduplikat.
*/
const set1 = new Set();
set1.add(1);
set1.add('Apple');
set1.add(1);
set1.add('Apple');

console.log(set1); // Output: Set { 1, 'Apple' }