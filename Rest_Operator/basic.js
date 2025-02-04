// cara membuat rest operator/ rest parameter pada function
// tambahkan tiga titik sebelum parameter terakhir

function myFunc(arg1, ...manyMoreArgs) {
    console.log('manyMoreArgs', manyMoreArgs, arg1);
  }
  
// rest paramertr akan mengembalikan argumen dalam bentuk array
  myFunc('one', 'two', 'three');

  // rest opertator juga bisa digunakan untuk destructuing array
  const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

  const [first, second, ...rest] = favorites;
  
  console.log(first);
  console.log(second);
  console.log(rest);