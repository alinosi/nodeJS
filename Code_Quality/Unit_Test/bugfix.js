// Fungsi untuk menghitung total harga belanjaan
function calculateTotal(shoppingCart) {
  let total = 0;

  // Penghitungan tagihan terjadi di sini…
  for (let i = 0; i <= shoppingCart.length; i += 1) { // index nomor 5 tidak ada = error
    total += shoppingCart[i].price;
  }

  return total;
}

// Contoh data belanjaan
const shoppingCart = [
  { name: 'Apple', price: 300 },
  { name: 'Banana', price: 120 },
  { name: 'Orange', price: 130 },
  { name: 'Orange', price: null },
  { name: 'Orange', price: null },
];

// Memanggil fungsi dan mencetak hasilnya
console.log(`Total belanjaan: Rp ${calculateTotal(shoppingCart)}`);