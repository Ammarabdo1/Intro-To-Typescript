//? Literals & Enums
console.log("literals & Enums");

//TODO>> Literals
type StringOrNumber = string | number;
type FlightType = "Round Trip" | "One Way" | "Return";

//TODO> Enums
//! you can't change values in enum
enum Status {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

//! here you can access by index or name
enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    saturday,
}

let todayNumber = Days.Sunday; // value = 0
let today = Days[0]; // value = Sunday
