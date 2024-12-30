//? Interfaces
//nots
//! it's recommended capitalize the first letter when defining interface names.

interface Car {
  brand: string;
  price: number;
}

const car: Car = {
  brand: "BMW",
  price: 2000000,
};

const cars: Car[] = [
  { brand: "BMW", price: 2000000 },
  { brand: "toyota", price: 1500000 },
];

interface Product {
  productName: string;
  price: number;
  isInStock: boolean;
  category: string;
}
