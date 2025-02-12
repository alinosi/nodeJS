/*
    kebalikan dari sinkronus, proses asinkronus adalah proses yang berjalan di latar belakang.
    Ini membuat kode program tidak akan memblok code yang berada di bawahnya
    ketika proses dirinya belum selesai. Ini berguna agar program tetap interaktif
    selagi menyelesaikan tugas yang berat
*/

// contoh

console.log("Proses 1: Mulai");

setTimeout(() => {
    console.log("Proses 2: Ini dijalankan setelah 2 detik"); 
}, 2000); // walau memakan waktu 2 detik, proses ini tidak akan memblok proses 3

console.log("Proses 3: Selesai");
// Output :
// Proses 1: Mulai
// Proses 3: Selesai
// Proses 2: Ini dijalankan setelah 2 detik


// contoh sinkronus

console.log("Proses 1: Mulai");

// Simulasi proses berat (loop besar)
for (let i = 0; i < 1e9; i++) {
    // Proses berlangsung (tidak ada output di sini)
}

console.log("Proses 2: Selesai setelah proses berat");
// Output :
// Proses 1: Mulai
// Proses 2: Selesai setelah proses berat
// di sini output dari proses 2 akan keluar setelah looping selesai karena menggunakan konsep sinkronus
// artinya statement ini memblok statement di bawah hingga dirinya selesai diproses
