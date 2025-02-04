// try- catch
// try berisi kode yng diuji, catch berisi kode yg akan bangkit jika try error

// contoh non-error
try {
    console.log('Memulai program');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena tidak ada error, blok ini akan diabaikan');
  }

// contoh errpr
try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program'); // tidak dieksekusi karena throw mengakhiri program langsung
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
  }

