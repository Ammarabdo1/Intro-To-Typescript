//? Class in Typescript
console.log('Class in Typescript')
//* hints
// It is recommended to capitalize the first letter in the class name

class Person {
  //! Constructor
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

//TODO>> Creating an Object
//! Instantiate a Person object with specific values
export const person: Person = new Person('ammar', 22) 

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//

//TODO>> Limitations (public, private, readonly, protected)
class Car {
  //! Public properties
  brand: string; //* public by default
  color?: string; //* Optional property

  //! static properties
  static CarsNo: number; //* Shared at the class level

  //! private properties
  private max_speed: number; //* Not accessible outside the class

  //! protected properties
  protected price: number; //* Accessible within subclasses

  //! readonly properties
  readonly metal: string = "iron"; //* Immutable after initialization

  //! Constructor
  constructor(brand: string, max_speed: number, price: number) {
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
    constructor( public name: string, public age: number) {
        this.name = name
        this.age = age
        console.log('A new creature has been created')
    }
    move(type: string) {
        console.log(`${type} is moving...`)
    }

    eat(type: string) {
        console.log("Creature is eating...")
    }
}

//! Sub class
class Human extends Creature {
    Ssn: number; //! Additional property
    constructor(public name: string, public age: number, Ssn: number) {
        super(name, age) //* Call to the base class constructor
        this.Ssn = Ssn
    }

    // override
    move() {
        super.move('human') //* Call the base class move method with 'human' type
    }

    eat() {
        super.eat('human') //* Call the base class eat method with 'human' type
    }
}

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//

//TODO>> Implementation of interfaces in class
interface Task {
    name: string;
    run(arg: string): void;
}

class MyTask implements Task {
    constructor(public name: string) {
        this.name = name
    }

    run(task: string) {
        console.log(`run ${task}`)
    }
}

const task = new MyTask('TS')
task.run('TS')