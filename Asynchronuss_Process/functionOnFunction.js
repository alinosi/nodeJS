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
  
  //const transaksiBudi = prosesTransaksi(); // Panggil fungsi utama
  //console.log(transaksiBudi(100000));              // Gunakan fungsi di dalamnya
  
  function test(name) {
    return `hello ${name}`;
  }
  
  const DirectValue = test(); // variabel akan menyimpan hasil eksekusi function test
  const RepresentationalFunction = test; // variabel menjadi representasi function test
  
  console.log(test('daniel'))
  console.log(testing)