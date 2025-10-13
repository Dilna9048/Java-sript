// Parent class
class Vehicle {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  start() {
    console.log(`${this.name} is starting...`);
  }

  stop() {
    console.log(`${this.name} has stopped.`);
  }
}

// Child class (inherits from Vehicle)
class Car extends Vehicle {
  constructor(name, model, brand) {
    super(name, model); // call parent constructor
    this.brand = brand;
  }

  displayInfo() {
    console.log(`Car: ${this.brand} ${this.name}, Model: ${this.model}`);
  }
}

// Another Child class
class Bike extends Vehicle {
  constructor(name, model, cc) {
    super(name, model);
    this.cc = cc;
  }

  showDetails() {
    console.log(`Bike: ${this.name}, Model: ${this.model}, ${this.cc}cc`);
  }
}

// Using the classes
let car1 = new Car("Swift", 2022, "Maruti");
car1.displayInfo();
car1.start();

let bike1 = new Bike("Yamaha R15", 2023, 155);
bike1.showDetails();
bike1.stop();
