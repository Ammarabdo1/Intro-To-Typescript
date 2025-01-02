"use strict";
//? Generic types
function identity(arg) {
    return arg;
}
let output1 = identity('ammar');
let output2 = identity('ammar');
//TODO>> Constraints
function Constraints(arg) {
    console.log(arg.length);
    return arg;
}
const building = {
    length: 120,
    name: 'ammar'
};
console.log(Constraints(building));
//# sourceMappingURL=12-GenericsType.js.map