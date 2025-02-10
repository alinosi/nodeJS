function prosesTransaksi(nama) {
    function validasiPembayaran(jumlah) { // Fungsi di dalam fungsi
      if (jumlah > 0) {
        return `Pembayaran ${nama} sebesar ${jumlah} berhasil.`;
      } else {
        return `Gagal memproses pembayaran untuk ${nama}.`;
      }
    }
  
    return validasiPembayaran; // Mengembalikan fungsi validasi
  }
  
  const transaksiBudi = prosesTransaksi('budi')(100000); // Panggil fungsi utama
  console.log(transaksiBudi);              // Gunakan fungsi di dalamnya
  
//   function test(name) {
//     return `hello ${name}`;
//   }
  
//   const DirectValue = test('daniel'); // variabel akan menyimpan hasil eksekusi function test
//   const RepresentationalFunction = test; // variabel menjadi representasi function test
  
//   console.log(test('daniel'))
//   console.log(testing)