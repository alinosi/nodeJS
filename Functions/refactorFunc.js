let temperatureInFahrenheit;

// Arrow function
const convertCelsiusToFahrenheit = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

// Arrow function versi ringkas(refactor)
const convertCelsiusToFahrenheitInConciseSyntax = 
  (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

/*

Lihat! Function convertCelsiusToFahrenheitInConciseSyntax memiliki penulisan sintaksis yang sangat sederhana.
Jauh lebih sederhana dari sebelumnya. 
Di sana kita menghilangkan beberapa hal, yaitu tanda kurung kurawal dan keyword return.
Sebagai gantinya, return value langsung diletakkan setelah fat arrow. Wah, hebat sekali, ya!

*/