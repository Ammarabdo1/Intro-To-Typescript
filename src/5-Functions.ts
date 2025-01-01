//? functions
// nots
//! the return value from the function is auto assigned
//! when calling the function, all parameters must be passed

//TODO>> Names Function
function userNumber(n: number): string {
  return `User Number ${n}`;
}

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//
    
//TODO>> Anonymous Function
const userNumber2 = function (n: number): string {
  return `User Number ${n} - Anonymous`;
};

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//
    
//TODO>> Arrow Function
const userNumber3 = (n: number): string => `User Number ${n} - Arrow`;

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//
    
//TODO>> Optional Parameters <user ?>
function sayHi(name: string, age?: number) {
  if (age) {
    return `Hello ${name}, you have ${age} years old`;
  }
  return `Hello ${name}`;
}
sayHi("ammar"); //* output: Hello ammar

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//
    
//TODO>> Default value for Parameters <use =>
function sayHi2(name: string, age: number = 22) {
  return `Hello ${name}, you have ${age} years old`;
}
sayHi("ammar abdo"); //* output: Hello ammar, you have 22 years old
