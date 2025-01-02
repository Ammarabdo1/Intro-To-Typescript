//? Interfaces
console.log('Interfaces...')
//nots
//! it's recommended capitalize the first letter when defining interface names.
//! const is used with variables but readonly with objects they are very similar.

//TODO>> Build the interface
interface Car {
  brand: string;
  price: number;
}

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//
    
//TODO>> set a variable of type interface
const car: Car = {
  brand: "BMW",
  price: 2000000,
};

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//
    
//TODO>> set an array of interface type
const cars: Car[] = [
  { brand: "BMW", price: 2000000 },
  { brand: "toyota", price: 1500000 },
];

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//
    
//TODO>> readonly & optional properties(?)
interface Product {
  productName: string;
  price: number;
  isInStock: boolean;
  readonly category: string;
}

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//
    
//TODO>> Indexable Types
interface Library {
  [bookName: string]: number;
}

const myLibrary: Library = { "JS Basics": 33, TS: 200 };

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//
    
//TODO>> Indexable like array
interface Fruits {
  [index: number]: string;
}

const fruits: Fruits = [
  //* hint => export here so the variable become local
  "Apple",
  "banana",
];
export default fruits // because I'm using this variable in another file, I'm exporting it to make it a local variable

//! defined as an object
const fruits2: Fruits = {
  0: "Apple",
  1: "banana",
};

//! here if Indexable is string all properties must string s
interface Names {
  age: string;
  [key: string]: string;
}