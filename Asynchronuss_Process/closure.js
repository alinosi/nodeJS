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
  
  const transaksiBudi = prosesTransaksi('budi'); // Panggil fungsi utama
  console.log(transaksiBudi(1000));              // Gunakan fungsi di dalamnya
  
//   const DirectValue = test('daniel'); // variabel akan menyimpan hasil eksekusi function test
//   const RepresentationalFunction = test; // variabel menjadi representasi function test
  
//   console.log(test('daniel'))
//   console.log(testing)