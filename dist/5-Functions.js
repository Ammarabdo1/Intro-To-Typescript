"use strict";
//? functions
// nots
//! the return value from the function is auto assigned
//! when calling the function, all parameters must be passed
//TODO>> Names Function
function userNumber(n) {
    return `User Number ${n}`;
}
//TODO>> Anonymous Function
const userNumber2 = function (n) {
    return `User Number ${n} - Anonymous`;
};
//TODO>> Arrow Function
const userNumber3 = (n) => `User Number ${n} - Arrow`;
//TODO>> Optional Parameters <user ?>
function sayHi(name, age) {
    if (age) {
        return `Hello ${name}, you have ${age} years old`;
    }
    return `Hello ${name}`;
}
sayHi("ammar"); //* output: Hello ammar
//TODO>> Default value for Parameters <use =>
function sayHi2(name, age = 22) {
    return `Hello ${name}, you have ${age} years old`;
}
sayHi("ammar abdo"); //* output: Hello ammar, you have 22 years old
//# sourceMappingURL=5-Functions.js.map