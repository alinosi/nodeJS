// data map juga menggunakan key-value seperti object
// Kelebihan = key dari properti map tidak harus string seperti objek
// membuat map dengan consturcture

const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
  ]);
  
  console.log(productMap);

const numbermap = new Map();
numbermap.set(1, 'number one');
console.log(numbermap); // Map(1) { 1 => 'number one' }

// output :
// Map(3) { 'shoes' => 500, 'cap' => 350, 'jeans' => 250}


// cara 2 membuat map
const map = new Map();
map.set('name', 'aras'); // func set menerima 2 parameter
console.log(map); // Map(1) { 'name' => 'aras' }