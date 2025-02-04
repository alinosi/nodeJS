// Kita akan menggunakan dua jenis data yaitu objek dan array
const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 }; // objek
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe']; // array

// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
  }

// For in 
// biasa digunakan untuk loop objek
    // con obj
for (const property in person) { // kata property boleh diganti dengan apapun
  console.log(`${property} bernilai ${person[property]}`); // properti berisi key dan berganti nilai per iterasi
}
    // con arry
for (const property in names) {
    console.log(`${property} bernilai ${names[property]}`); 
}

// For out
    // con arry
for (const item of person) {
    console.log(item); 
}
    // con obj
// for (const item of names) {
//   console.log(item); // error karena objek ini tidak dapat diiterasi
// }



// while
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

// do-while
let j = 0;
do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 5);


// control statement break
const number = 1;

switch (number) {
  case 1:
    console.log('Ini 1');
    break;
  case 2:
    console.log('Ini 2');
    break;
  case 3:
    console.log('Ini 3');
    break;
  default:
    console.log('Ini default');
}

// control statement continue
for (let i = 0; i < 10; i++) {
    if (i === 5) { 
        continue; // akan lanjut ke iterasi 6 langsung tanpa print 5
    }
    console.log(i);
  }
