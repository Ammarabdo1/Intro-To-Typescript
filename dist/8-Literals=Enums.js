"use strict";
//? Literals & Enums
console.log("literals & Enums");
//TODO> Enums
//! you can't change values in enum
var Status;
(function (Status) {
    Status["Pending"] = "pending";
    Status["Approved"] = "approved";
    Status["Rejected"] = "rejected";
})(Status || (Status = {}));
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["saturday"] = 6] = "saturday";
})(Days || (Days = {}));
let todayNumber = Days.Sunday;
let today = Days[0];
console.log(todayNumber);
console.log(today);
//# sourceMappingURL=8-Literals=Enums.js.map