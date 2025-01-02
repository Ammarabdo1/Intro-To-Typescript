//? Generic types
console.log("Generic types...");

function identity<T>(arg: T): T {
    return arg
}

let output1 = identity<string>('ammar');
let output2 = identity('ammar');

//TODO>> Using Constraints with `extends`
function Constraints<T extends {length: number}>(arg: T): T {
    console.log(arg.length)
    return arg
}
const building: {length: number, name: string} = {
    length: 120,
    name: 'ammar'
}

//! Since `building` has a `length` property, it satisfies the constraint.
console.log(Constraints(building))