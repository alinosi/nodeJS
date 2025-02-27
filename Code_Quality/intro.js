/*

DEFINISI UMUM

 Selainn dibedakan berdasarkan cara komunikasi ke mesin, bahasa 
 programman juga dibedakan berdasarkan type system, yaitu :

 strongly typed programming : Static (c++, Java, Go) tipe nilai diperiksa saat compile
 loosely typed progamming   : dynamic (php, javascript) tipe nilai diperiksa saat runtime

 contoh lain yang mengidentifikasinya adalah "deklarasi variabel secara eksplisit"

 - deklarasi number di c++ :
   int a = 5;

 - deklarasi number di javascript :
   let a = 5; 


MASALAH

   Apa masalah dari ini? ini masalahnya adalah instruksi kadang menjadi tidak jelas.

   di c++ jika kita melakukan operasi matematika, maka variabel yang berperan harus bertipe sama
   
   int a = 5;
   string b = "halo";
   cout << a + b;
   output :
   type error

   tetapi jika di javascript kita bisa menambahkan string dan angka :
   
   console.log("5" + 4)
   output :
   "54"
*/