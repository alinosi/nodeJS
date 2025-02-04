function categorizeNumber(input) {
    if (typeof input !== 'number' || !Number.isInteger(input)){
        throw new Error('Input harus berupa bilangan bulat')
    }
    if (input < 0) {
        return 'Negatif'
    }
    else if ( input == 0 ){
        return 'Nol'
    }
    else if ( isPrime(input)) {
            return 'Prima'
    }
    else if ( input%2 == 0 ){
        return 'Genap'
    }
    else if ( input%2 !== 0 ){
        return 'Ganjil'
    }
  }

  function isPrime(n) {
    if (n <= 1) return false; // Bilangan <= 1 bukan prima
    if (n === 2) return true; // 2 adalah bilangan prima
    if (n % 2 === 0 || n % 3 === 0 ) return false; // Bilangan genap selain 2 bukan prima

    // menetukan prima via akar
    if (Number.isInteger(Math.sqrt(n))) return false  // CARA 1

    for (let i = 3; i <= Math.sqrt(n); i += 2) { // CARA 2
        if (n % i === 0) return false; // Jika habis dibagi i, maka bukan prima
    }
    return true; // Jika tidak ada faktor lain, maka prima
    
}
  
  // Contoh
  console.log(categorizeNumber(25)); // Output: "Ganjil"
  console.log(categorizeNumber(12)); // Output: "Genap"
  console.log(categorizeNumber(15)); // Output: "Prima"
  console.log(categorizeNumber(0)); // Output: "Nol"
  console.log(categorizeNumber(-5)); // Output: "Negatif"
  
  try {
    categorizeNumber('abc');
  } catch (error) {
    console.log(error.message);
  } // Output: "Input harus berupa bilangan bulat"
  