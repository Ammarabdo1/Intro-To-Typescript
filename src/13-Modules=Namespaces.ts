//? Modules && Namespaces
console.log("Modules && Namespaces");

//TODO>> Modules
//! Exports
export const Global: string = "global...";

//* any file has only one export default
const Global2: string = "global...";
export default Global2;

//! Imports
//* import export const
import { age as a } from "./7-Union=Intersection"; // with as i can use age as a
console.log(a);

//* import export default const
import fruits from "./6-Interfaces";
console.log(fruits);

    //*______________________________________________________________________________*//
    //*``````````````````````````````````````````````````````````````````````````````*//

//TODO>> Namespaces
namespace Validation {
  export class Email {
    isEmail(email: string): boolean {
      return email.includes("@");
    }
  }

  export class Numbers {
    isNumber(num: string): boolean {
      return /^[0-9]+$/.test(num);
    }
  }
}

const emailValidation = new Validation.Email();
console.log(emailValidation.isEmail('ammar@gamil.com'))
