/*
set tidak memiliki key dan indeks ketika menyimpan data.
Selain itu, data yang disimpan di dalam set akan bernilai unik 
artinya tidak akan ada data yang duplikat. 
*/

// membuat set
const set = new Set();

// membuat set langsung eksekusi constructure
const mySet = new Set([1, 2, 3]);

console.log(mySet);