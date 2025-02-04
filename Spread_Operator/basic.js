// spread operator digunakan untuk menyebarkan nilai objek/array


// contoh object
const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };

console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }
console.log(newObj.name, newObj.lastName);

// bisa juga digunakan untuk mengcopy object karena dengan... maka keterangan bahwa data itu objek hilang
const originalObj = { name: 'Dicoding', age: 9 };
const copiedObj = { ...originalObj };

console.log(copiedObj); // Output: { name: 'Dicoding', age: 9 }
console.log(copiedObj.name);// Output: Dicoding

// contoh array

const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2];

console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']

// copy array
const original = ['apple', 'banana', 'cherry'];
const copy = [...original];

console.log(copy); // Output: ['apple', 'banana', 'cherry']


// Spread operator pada dasarnya sama seperti menggunakan looping
// untuk mendapatkan nilai yang ada di dalam object maupun di dalam array.