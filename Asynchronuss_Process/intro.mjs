/*
  Asinkronus dalam KBBi berarti tidak dalam waktu yang sama alias tidak serentak(tidak saling menunggu).
  Dalam konteks pemrograman, proses asinkronus berarti 
  proses dijalankan tanpa harus menunggu proses lain selesai terlebih dahulu.
*/

// contoh asynchronuss process

const estimationTime = 10_000; // 10_000 di sini artinya 10000 milidetik/ 10 detik, 
                               // Pengunaan underscore '_' untuk meningkatkan keterbacaan kode

setTimeout(() => {
  console.log('Hello, world!');
}, estimationTime);

/* Output:
Hello, world!
*/


// function setTimeout menerima 2 parameter yaitu 1 callback function dan waktu pemrosesan(estimation time)
// karena estimation time bernilai 10000 milidetik alias 10 detik,
// maka console.log akan dieksekusi setelah 10 detik


// Contoh lain

import { makeCoffee } from './exportForintro.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee();

console.log('Pramusaji memberikan kopi pesanan.');          // cosnole a
console.log('Saya mendapatkan kopi dan menghabiskannya.');  // console b


/* 
   Lihtkan? tanpa proses asinkronus maka console a dan console b baru akan dilaksanakan ketika seluruh 
   proses di dalam function makecoffe selesai, namun kenyataan nya tidak karena ada proses asinkronus
   sehingga code lain tidak perlu menunggu kode yang menghabiskan banyak waktu dalam proses eksekusinya
   untuk menunggu giliran. 
   Sehingga, yang terjadi di output proses yang memerlukan banyak waktu muncul paling akhir,
   (Tetap berjalan, tetapi tidak blok proses lain).


   NOTES :
   sequential order : Urutan kode
*/ 



// proses asinkronus dijalankan setelah main thread(proses sinkronus ) selesai 
// sehingga callstack menjadi kosong dan proses asinkronus akan di eksekusi.
// sebenarnya proses asinkronus tetap berjalan di latar belakang, tetapi 'hasilnya' yang baru dieksekusi setelah
// Proses sinkronus selesai.




