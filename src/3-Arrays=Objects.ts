//? Arrays && Objects
console.log('Arrays && Objects')

//TODO>> Arrays
let names: string[] = ['ammar', 'yousef', 'habiba'];

//! readonly
let numbers: readonly number[] = [12, 5, 32, 52, 13];
// numbers[0] = 22 //* error accorded because readonly property

//! methods
names.push('yasmen'); //* push element in the last of array
names.pop() //* return last element and remove it from array

//TODO>> Objects
let user = {
    name: 'ammar',
    age: 21
}

//! dot notation
user.name = 'ammar abdo'

//! bracket notation
user['age'] = 22
// user.length = 32 //* error accorded because length does not exist on type of user object

//! Determine the data type
let user2: {name: string; age: number}
user2 = {
    name: 'ammar',
    age: 22
}