// throwing digunakan untuk membangkitkan error
// sintaks dasar throwing error
// throw <objek error>

// cara 1 gunakan function built-in
const error = new Error('Terjadi error');
console.error(error);

console.log("anjay")

// cara 2
const price = 100;
const paid = 80;

if (paid < price) {
  throw new Error('Pembayaran kurang');
  // throw langsung mengehentikan eksekusi program
  // throw juga digunakan untuk melempar error ke CATCH
}
console.log("anjay") // tidak dieksekusi karena program sudah di throw