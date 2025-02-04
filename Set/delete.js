// menghapus set menggunakan method delete(nilai yang ingin dihapus)
const set = new Set();
set.add('1');
set.add(1);
set.delete('1');

console.log(set); // Set(1) { 1 }