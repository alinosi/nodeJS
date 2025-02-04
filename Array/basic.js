// perbedaan array dan object terletak pada indeks nya
// array menggunakan nomor sementara objek dengan string
// ideks array terurut sementara objek tidak

// membuat array dengan constructure
const users = new Array(); // length array dinamis sesuai data yang dimasukkan
const numbers = new Array(5); // inialisasi length array

users[0] = 'dan'
console.log(users)

// numbers[0] = 'a'
// numbers[1] = 'a'
// numbers[2] = 'a'
// numbers[3] = 'a'
// numbers[4] = 'a'
// numbers[5] = 'a'
console.log(numbers)


// membuat array dengan sintaks array.from
const foo = Array.from('foo'); // kata dipecah menjadi huruf
console.log(foo); // Output: ['f', 'o', 'o']
// atau
const foo2 = ['asas','barter'] // array dipecah menjadi kata
const bar = Array.from(foo2); // output : ['asas','barter']
console.log(bar)
// atau 
const foo3 = [['a','b','c'],['a','x']] // array multidimensi dipecah menjadi array
const bar1 = Array.from(foo3); // output : [Array(3), Array(2)] 
console.log(bar1)

// juga bisa untuk copy array
const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]