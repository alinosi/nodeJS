function generateArray(n) {
    if (n < 0) {
      return [];
    }
  
    return [...generateArray(n - 1), n]; 
  }
  
  console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

// NOTES :
// gunakan spread operator(...) agar arraynya bergabung semua
  // jika tidak menggunakan spread operator maka akan tercipta array multidimensi

  // contoh jika generateArray(1) dan tidak menggunakan spread operator pada returnnya maka outputnya :
  // [[[], 0], 1]
  // jika menggunakan spread operator maka array2 tsb akan tergabung menjadi 1 array dan mengahislkan :
  // [0, 1] 