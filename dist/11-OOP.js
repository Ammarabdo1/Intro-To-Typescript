"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
//? Class in Typescript
console.log('Class in Typescript');
//* hints
// It is recommended to capitalize the first letter in the class name
class Person {
    //! Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
//TODO>> Creating an Object
//! Instantiate a Person object with specific values
exports.person = new Person('ammar', 22);
//*______________________________________________________________________________*//
//*``````````````````````````````````````````````````````````````````````````````*//
//TODO>> Limitations (public, private, readonly, protected)
class Car {
    //! Constructor
    constructor(brand, max_speed, price) {
        //! readonly properties
        this.metal = "iron"; //* Immutable after initialization
        this.brand = brand;
        this.max_speed = max_speed;
        this.price = price;
    }
    //! Methods
    move() {
        console.log("the car is moving...");
    }
}
//*______________________________________________________________________________*//
//*``````````````````````````````````````````````````````````````````````````````*//
//TODO>> Inheritance
//! Super(Base) class
class Creature {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
        console.log('A new creature has been created');
    }
    move(type) {
        console.log(`${type} is moving...`);
    }
    eat(type) {
        console.log("Creature is eating...");
    }
}
//! Sub class
class Human extends Creature {
    constructor(name, age, Ssn) {
        super(name, age); //* Call to the base class constructor
        this.name = name;
        this.age = age;
        this.Ssn = Ssn;
    }
    // override
    move() {
        super.move('human'); //* Call the base class move method with 'human' type
    }
    eat() {
        super.eat('human'); //* Call the base class eat method with 'human' type
    }
}
class MyTask {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    run(task) {
        console.log(`run ${task}`);
    }
}
const task = new MyTask('TS');
task.run('TS');
//# sourceMappingURL=11-OOP.js.map