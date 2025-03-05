/**
 * 
 * In programming there is not just write a code, but they have style guide  
 * this will make the code more readable and avoid inconsistent style
 * 
 * Hal yang harus diperhatikan dalam gaya menulis
 * Penggunaan tanda titik-koma (semicolon).
 * Gaya nama variabel.
 * Penempatan komentar dalam kode.
 * Penggunaan block-code (curly-bracket), seperti dalam percabangan.
 * Banyak assignment secara sekaligus dan masih banyak lainnya lagi.
 * 
 * For the example
 * unconsistent style 
 */


let no = 'Semicolon'
// there is a gap
const my_favorite_color = '#112C85';
 
let myNumber = 3; //after the declaration, there is not gap 
console.log(myNumber);
 
var random = 1; // declaring random to 1
 
if (foo) foo++;
 
let a = b = c = 5;


/***
 * 
 * following the guide style
 * 
 */

const myFavoriteColor = '#112C85';
 
const myNumbers = 3;
console.log(myNumber);
 
// declaring random to 1
const random = 1;
 
if (foo) {
  foo++;
}
 
a = 5;
let b = 5; 
let c = 5;
