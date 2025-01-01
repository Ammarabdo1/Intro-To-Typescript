//? Union & intersection
console.log('Union & intersection')

//TODO>> Union
//! this variable allows numbers or strings
export let age: number | string

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//
    
//TODO>> Intersection
interface Client {
    name: string;
}

interface Order {
    Product: string;
    quantity: number;
}

let clientOrder: Client & Order = {
    name: 'ammar',
    Product: 'Milk',
    quantity: 3
}