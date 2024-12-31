"use strict";
//? Mapped Types
console.log('Mapped Types');
//TODO>> Partial => Make all properties in a Type optional.
const person = {}; // 'person' can now be an empty object
//TODO>> Required => Make all properties in a Type required.
const person2 = {
    name: 'ammar',
    age: 22,
    address: 'Egypt' // is required Although there is <?>
};
const ages = {
    ammar: '22', // 'ammar' is the key (string), '22' is the value (string)
    yousef: '20',
};
const Person2 = {
    name: 'ammar',
    age: 22,
    // address: '#' //! Error: 'address' does not exist in 'Person2' because it was omitted.
};
const person3 = {
    name: 'ammar', // 'name' is required in 'Person3' because it was picked from the 'Person' interface.
};
//TODO>> Readonly => Convert all properties to readonly
const person4 = {
    name: 'ammar',
    age: 23
};
// person4.age = 22 //! Can't reset the age value
//# sourceMappingURL=9-MappedTypes.js.map