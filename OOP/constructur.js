// ini adalah bentukan dari function constructor pada javascript

// constructure adalah fucntion yang otomatsi tereksekusi ketika class menghasilkan objek

// ini adlah cara membuat class dan object sebelum ada ES6 di javasciprt

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
   
  Person.prototype.eat = function() {
    console.log(`${this.name} is eating`);
  }


  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
   
  console.log(person1.name); // Output: Alice
  console.log(person2.name); // Output: Bob
   
  person1.eat();
  person2.eat();

 // Javascript adalah bahsa berbasis prototype, tidak seperti bahsaa lain yang berbasis class


 // ini adalah cara setelah ES6

 class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Membuat instance dari Person
const person3 = new Person('Alice', 30);
const person4 = new Person('Bob', 25);

console.log(person3.name); // Output: Alice
console.log(person4.name); // Output: Bob

person1.eat(); // Output: Alice is eating
person2.eat(); // Output: Bob is eating