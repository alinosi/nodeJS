// Berikut adalah contoh dari penggunaan promises pada javascript

import { doSomething } from './utils.mjs';

function onFulfilled(doSomethingData) {
  // Do your jobs when "fulfilled" happens…
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  // Do your jobs when "rejected" happens…
  console.log(doSomethingError);
}

// then adalah method dari objek promise. dia akan menerima 2 callback dan mengatur siapa yang akan dieksekusi
// dosomething saat ini adalah objek promise yang langsung mengeksekusi function promiseExecutor ketika dipanggil
// then adalah method yang akan menangani callback dari function promiseExecutor

// jika pada function biasa, dosomething adalah nama functionnya dan then(onfullfilled,onrejected) 
// adalah argumemnnya. Anggap seperti ini = dosomething(onfulfilled, onrejected).

doSomething().then(onFulfilled, onRejected);