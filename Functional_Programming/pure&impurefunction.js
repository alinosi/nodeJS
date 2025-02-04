// Pure function = tidak berhubungan dengan variabel global & tidak memiliki efeksamping

// efek samping di sini adalah sebuah kode yang tidak mencerminkan dari esensi fungsi itu sendiri
    // juga memengaruhi variabel global

function addWith(value, addingValue) {
    return value + addingValue;
  }
  
  const result1 = addWith(0, 1);
  console.log(`result1 is ${result1}`); // Output: result1 is 1
  
  const result2 = addWith(result1, 1);
  console.log(`result2 is ${result2}`); // Output: result2 is 2
  
  const result3 = addWith(result2, 1);
  console.log(`result3 is ${result3}`); // Output: result3 is 3
  
  console.log(result1, result2, result3); // Output: 1, 2, 3


// impure function = berhubungan dengan variabel global dan memiliki efeksamping

// fungsi ini memiliki output yang berbeda walau argumennya sama karena berkaitan dengan variabel global

// fungsi ini memiliki efeksamping yaitu merubah nilai global 
// serta menulis sesuatu ke I/O melalui console(bukan esesnsi fungsi)

let value = 0;

function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3


