class SmartPhones {
    constructor(color, brand, model) { // constructure method
      this.color = color;
      this.brand = brand;
      this.model = model;
    }
  
    charging() { // normal method
      console.log(`Charging ${this.model}`);
    }
  }
  
  class iOS extends SmartPhones {
    airDrop() {
      console.log('iOS have a behavior AirDrop');
    }
  }
  
  class Android extends SmartPhones {
    splitScreen() {
      console.log('Android have a Split Screen');
    }
  }
  
  const ios = new iOS('black', 'A', '12 Pro Max');
  const android = new Android('white', 'B', 'Galaxy S21');
  
  ios.charging(); // Output: Charging 12 Pro Max
  ios.airDrop(); // Output: iOS have a behavior AirDrop
  
  android.charging(); // Output: Charging Galaxy S21
  android.splitScreen(); // Output: Android have a Split Screen

// mencari tahu apakah mereka merupakan object instance
  console.log(ios instanceof SmartPhones); // Output: true 
  console.log(android instanceof SmartPhones); // Output: true