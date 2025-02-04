// function experession
// functionnya tidak ada nama
const convertCelsiusToFahrenheit = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
  };
  
  const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
  console.log('Hasil konversi:', temperatureInFahrenheit);

  
  /* Output:
  Hasil konversi: 194
  */

// Gabungan expression function dan regular function
// first class citizen

function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

// multiplier akan mengembalikan express func sehingga double/triple adalah indetifier yang memerlukan paramter
const double = multiplier(2); 
const triple = multiplier(3);

// double dan triple akan berisi ini
/*
 const double = function (num) {
   return 2 * num 
   }
*/

// double/triple memerlukan param karena mereka menjadi identifier 
console.log(double(10));
console.log(triple(11));

/* Output:
20
33
*/

