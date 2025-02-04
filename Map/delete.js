const map = new Map();
map.set('name', 'aras');
map.set('name', 'opraza'); // update value key name
map.set('last name', 'opraza'); // menghapus dta last name
map.delete('last name');
console.log(map); // Map(1) { 'name' => 'aras' }