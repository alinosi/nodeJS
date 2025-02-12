/*
  Promise berarti janji. Di dalam javascript, ada cara untuk menghindari callback hell atau terlalu 
  banyak melakukan callback yaitu dengan promise. Promise atau diartikan sebaga janji
  bekerja dengan 3 buah state/kondisi :
  1. pending : proses awal(janji dibuat dan dimulai)
  2. fulfilled : proses berhasil dan mengembalikan nilai positif(janji ditepati)
  3. Rejected : proses gagal dan membawa alasan mengapa terjadi kegagalan(janji diingkari)
*/

// contoh 

function onFulfilled(doSomethingData) {
  // Do your jobs when "fulfilled" happens…
  console.log(doSomethingData);
}
 
function onRejected(doSomethingError) {
  // Do your jobs when "rejected" happens…
  console.log(doSomethingError);
}
// then adalah method dari objek promise yang akan menerima/menangani hasil dari proses asinkronus 
doSomething().then(onFulfilled, onRejected);

// isi dari dosomething
function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    console.log('Melakukan sesuatu sebelum Promise diselesaikan.');
 
    // Penentuan hasil dari proses asinkron
    const number = Math.random();
 
    // Nilai fulfillment dari Promise
    if (number > 0.5) {
      resolve('You did it!');
    }
 
    // Nilai rejection dari Promise
    else {
      reject(new Error('Sorry, something went wrong!'));
    }
  }, 2000);
}
 
function doSomething() {
  return new Promise(promiseExecutor);
}




