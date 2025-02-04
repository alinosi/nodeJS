// Ternary operator atau nama lainnya conditional operator direpresentasikan menggunakan tanda tanya (?). 

let result = condition ? value1 : value2; // kalau true value 1 dan sebaliknya

// contoh 
const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0; 

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);