// imperative code

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
//  newNamesWithExcMark[i] = names[i]; (ini adalah maksud dari line 6)
}

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// declarative code

const names2 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark2 = names2.map((name) => `${name}!`);

console.log(newNamesWithExcMark2); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]




/*
 Pada intinya kode yang bersifat imperatif untuk mengajarkan kita dasar-dasar algoritma yaitu menyelesaikan
 masalah dengan cara yang terstruktur, berbeda dengan kode deklaratif yang lebih menitikberatkan 
 pada efesiensi dalam penulisan kode namun mendapatkan hasil yang sama.
*/