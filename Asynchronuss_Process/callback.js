/* 
  Callback adalah function yang dijadikan parameter bagi function lain
  Callback biasanya digunakan untuk mengirimkan data dari function satu ke function lain
  Contoh penggunaan callback adalah saat kita ingin mengirimkan data dari function A ke function
  B, maka kita dapat menggunakan callback sebagai parameter function B
*/ 


// callback berkaitan erat dengan proses asinkronus, dengan callback urutan eksekusi kode tetap sistematis


// contoh penggunaan callback

function mengambilData(callback){
  setTimeout(() => {
    console.log('mengambil data...');
    callback();
  }, 3000) // proses pengambilan data akan memakan waktu 3 detik
}

function validasi(){
  console.log('data berhasil diambil');
}

console.log('pengambilan data akan segera diproses');
mengambilData(validasi);
// output :
// pengambilan data akan segera diproses
// mengambil data....
// data berhasil diambil


// JIka tidak menggunakan callback maka urutan eksekusi kode menjadi ambigu
// contoh

// function mengambilData(){
//   setTimeout(() => {
//     console.log('mengambil data...123');
//   }, 3000) // proses pengambilan data akan memakan waktu 3 detik
// }

// function validasi(){
//   console.log('data berhasil diambil');
// }

// console.log('pengambilan data akan segera diproses');
// mengambilData();
// validasi();
