// karena set tidak memiliki key sebagai identifier, maka untuk mengakses set perlu loop
const set = new Set();
set.add('1');
set.add(2);

// cara 1
for (const number of set) {
  console.log(number); // Output: 1, 2
}

// cara 2
set.forEach((value) => console.log(value)); // Output: 1, 2