// membuat object menggunakan object literals

const user = {}; // const namaObject = {}
const products = { name: 'Sepatu', price: 230000 }; 
// yang di dalam {} adalah properti, properti mengandung key : value



const users = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
  };
  
// cara mengakses properti dalam object
// cara 1 dengan dot(.)
  console.log(users.name) 
  // output Dicoding. Kekurangan: Key tidak boleh mengandung spasi, diawal angka, dan mengandung karakter spesial

// cara 2 square bracker
  console.log(users['last name']) 
  // output Indonesia. Kelebihan: kekurangan dot

// cara 3 object destructuring
const user1 = {
  'name': 'Dicoding',
  'lastName': 'Indonesia',
  age: 9
};

const { lastName, name, age, goat = 'ronaldo' } = user1; // memecah propert dari usesrss menjadi variabel independen
console.log(name, lastName, name, age, goat); // Output: Dicoding Indonesia


const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 }; // objek berisi properti objek
console.log(obj1)
console.log(newObj);