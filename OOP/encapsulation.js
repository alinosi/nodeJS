class CoffeeMachine {
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this._temperature = 90
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this._temperature;
    }
  }
  
  const coffee = new CoffeeMachine(10);
  console.log('Sebelum diubah: ', coffee.temperature); // trigger method get
  coffee.temperature = 100; // trigger method set
  console.log('Setelah diubah: ', coffee.temperature); 


// cara lain dan data benar-benar tidak dapat diubah
  class CoffeeMachine {
    #temperature = 90; // property bersifat private
  
    constructor(waterAmount) {
      this.waterAmount = waterAmount; // deklarasi property tanpa inialisator seperti temperatur dibolehkan
      this.#temperature = this.#defaultTemperature();
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this.#temperature;
    }
  
    #defaultTemperature() {
      return 90;
    }
  }