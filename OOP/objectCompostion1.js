/*
 Sebuah videogame dengan 3 karakter yang sama-sama bisa bergerak, tetapi
 dibedakan oleh karakteristik skill yang berbeda.
 Monster  : bisa menyerang
 Guardian : bisa bertahan
 wizard   : bisa menyihir
*/

class Character {
    constructor(name, health, position) {
      this.name = name;
      this.health = health;
      this.position = position;
    }
   
    canMove() {
      console.log(`${this.name} moves to ${this.position}!`);
    }
  }
   
   
  class Monster extends Character {
    canAttack() {
      console.log(`${this.name} attacks with a weapon!`);
    }
  }
   
  class Guardian extends Character {
    canDefend() {
      console.log(`${this.name} defends with a shield!`);
    }
  }
   
  class Wizard extends Character {
    canCastSpell() {
      console.log(`${this.name} casts a magic spell!`);
    }
  }

// Jika ada karakter baru yang bisa menyerang dan bertahan maka implementasinya seperti ini
class Warrior extends Character {
    canAttack() {
      console.log(`${this.name} attacks with a weapon!`);
    }
   
    canDefend() {
      console.log(`${this.name} defends with a shield}!`);
    }
  }

/*
 Namun, karena sesama subClass Namun, cara tersebut tidak efektif. 
 Ketika kita mengubah implementasi salah satu method, kita perlu untuk mengubahnya di dua tempat.
 Misal mengubah method attack, maka yang perlu diubah ada di class warior dan class monster.
 Jika ada 100 karakter dengan kemampuan begitu, maka kita harus 100x mengubahnya
*/


/* 
 solusi yang ditawarkan adalah object compostion.
 Ketika menggunakan object composition, pendekatan yang digunakan adalah berbasis kemampuan, 
 bukanlah peran atau identitas. 
*/ 

function canAttack(character) {
    return {
      attack: () => {
        console.log(`${character} attacks with a weapon!`);
      }
    }
  }
   
  function canDefend(character) {
    return {
      defend: () => {
        console.log(`${character} defends with a shield!`);
      }
    }
  }
   
  function canCastSpell(character) {
    return {
      castSpell: () => {
        console.log(`${character} casts a spell!`);
      }
    }
  }

/*
 Untuk membuat object, kita dapat membuat function sebagai object creator 
 dan mengomposisikan kemampuan-kemampuan tersebut. impelemtasinya ada di file 2
*/