// metode indexing
const myArray = ['Android', 'Data Science', 'Web','Mobile'];
delete myArray[1];

console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']

delete myArray[2];

console.log(myArray); // Output: ['Android', <1 empty item>]
// maksimal empty item yang terlihat cuma 1


// metode splice
const myArray1 = ['Android', 'Data Science', 'Web'];
myArray1.splice(1, 1); // array.splice(n, m) : hapus sebanyak m data mulai dari index ke-n
console.log(myArray1); // Output: ['Android', 'Web']


// method shift 
const myshift = ['Android', 'Data Science', 'Web'];
myArray.shift(); // menghapus data pada indeks pertama
console.log(myshift); // Output: ['Data Science', 'Web']

// method pop
const mypop = ['Android', 'Data Science', 'Web'];
myArray.pop(); // menghapus data pada indeks terakhir
console.log(mypop); // Output: ["Android", "Data Science"]



// ARRAY DESTRUCTURING
