// konsep immutability adalah di mana sesuatu yang sudah dibuat tidak dapat diubah nilainya
// salah satu pematah konsep immtblty adlaah
// mutator function adalah fungsi yang bersifat mengubah(seperti mengubah nilai data)

function registerEmail(person, email) {
    return Object.assign(person, { email });
     // ({name : 'John', username: 'johndoe'},{email : 'john@dicoding.com'})
  }
  
  const person = {
    name: 'John',
    username: 'johndoe',
  };
  
  const personWithEmail = registerEmail(person, 'john@dicoding.comjohn@dicoding.com');
  
  console.log(person); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
  console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }



  const array = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newArray = array.map((name) => `${name}!`);


console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

function max(arrayOfNumbers) {
  return arrayOfNumbers
    .sort((a, b) => a - b)
    .pop();
}

const numbers = [10, 23, 24, 7, 42, 18];
// const largest = max(numbers);
console.log(numbers); // Output: [10, 23, 24, 7, 42, 18];
console.log(max(numbers)); // Output: 42
console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]

// functions sort. pada max mengubah struktur dari array 
// karena sifat dari sort adalah mutator functions(mengubah value variabel)


// contoh pada penggunaan functions Object.assign
let objek = {
  Name : 'danil', 
  Nomor : 8123,
  };

let newObjc = Object.assign(objek, {Umur : '12'})
console.log(newObjc)
console.log(objek)

// objek assing berguna untuk menggabungkan dua atau lebih objek menjadi satu objek.
// Namun, fungsi ini bersifat mutator sehingga memengaruhi value yang dijadikan argumen.



// METODE agar kedua fungsi di atas kembali menjadi pure yaitu dengan :
// menggunakan spread operator

function max(arrayOfNumber) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
  return [...arrayOfNumber]
    .sort((a, b) => a - b)
    .pop(); // yang digunakan oleh sort dan pop adlaah array tiruan(copy), bukan array asli. 
}

function registerEmail(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email }; // melebur/menggabung objek tanpa objek assignmen
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]

const person = {
  name: 'John',
  username: 'johndoe',
};

const personWithEmail = registerEmail(person, 'john@dicoding.com');

console.log(person); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }



// Immutable array methods

// Array.map

 const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => `${name}!`);

 console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 
// function map menerima callback function sebagai parameter 
// dan parameter dari callback akan mewakili setiap elemen array periterasinya


// Array.filter

 const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 14]
 .filter((item) => Boolean(item)); // jika Boolean(item) menghasilkan false maka value akan  menghilang
 
 console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

// function filter akan mengembalikan boolean sebagai untuk menentukan apakah variable lulus filter/tidak

// contoh menyaring siswa yang layak mendapatkan beasiswa
// berbasis objek dalam array

const students = [
  {
    name: 'Harry', // indeks 0
    score: 60,
  },
  {
    name: 'James', // indeks 1....dst
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
// setiap iterasi akan difilter scorenya

console.log(eligibleForScholarshipStudents);

/**
 * Output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */

// CHECK POINT = ARRAY MAP\


// Array.reduce

const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);
// acc adalah akumulator(tempat menyimpan total nilai) 
// student adalah current value, misal reduce sudah di iterasi ke 2 maka student berisi data dari james
// 0 adalah inialisasi dari akumulator 

console.log(totalScore); // Output: 313



// Object. freeze
// digunakan untuk mengunci nilai maupun property dari objek

const user = {
  name: 'John',
  email: 'john@dicoding.com',
};

// Membekukan objek user
Object.freeze(user);

// Mencoba mengubah properti dari objek yang dibekukan
user.email = 'doe@dicoding.com';
console.log(user); // Output: { name: 'John', email: 'john@dicoding.com' }

// Namun ini tidak akan efektif jika properti dari objek adalah objek seperti 
const complexUser = {
  name: 'Bob',
  email: 'bob@dicoding.com',
  preferences: {
    newsletter: true,
    notifications: 'weekly',
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
}; // dia hanya mengunci tingkatan pertama saja. Namun ada cara untuk melakukannya, cek di web dicoding.