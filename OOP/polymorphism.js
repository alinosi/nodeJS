class SmartPhones {
    constructor(color, brand, model) {
      this.color = color;
      this.brand = brand;
      this.model = model;
    }
   
    charging() {
      console.log(`Charging ${this.model}`);
    }
  }
   
   
class Android extends SmartPhones {
  // overriding constructor
  constructor(color, brand, model, device) {
    super(color, brand, model); // definisikan apa saja property yang diturunkan dari super(jika tidak akan error)
    this.device = device; // property baru yang hanya didefinisikan di subclass
  }
 
  splitScreen() {
    console.log('Android have a Split Screen');
  }
  // overriding method
  charging() {
    console.log(`Charging ${this.model} with fast charger`);
    super.charging(); // akses method/property superclass wajib menggunakan method super 
  }
}

const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');

android.charging();