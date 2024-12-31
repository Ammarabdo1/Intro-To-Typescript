//? Map && Set

//TODO>> Set // it's very similar to an array but Don't accept duplicate values
const Identifiers = new Set<number>([4234, 4523, 4526, 4262, 4623, 4242]);
// Duplicate entries like "ammar" are automatically removed.
const students: Set<string> = new Set(["ammar", "ahmed", "habiba", "ammar"]); // only one ammar name is allowed

//! add: Adds a new value to the Set. Returns the updated Set.
console.log(students.add("mariam"));

//! size: Returns the number of unique values in the Set.
console.log(students.size);

//! has: Checks if a specific value exists in the Set. Returns a boolean.
console.log(students.has("ammar")); // output: true

//*_____________________________________________________________________________________________________*//
//*`````````````````````````````````````````````````````````````````````````````````````````````````````*//

//TODO>> Map
const marks = new Map<string, number>([
  ["AmMar", 99],
  ["yousef", 100],
]);

//! set
console.log(marks.set("habiba", 98));

//! get
console.log(marks.get("habiba"));

//! has
console.log(marks.has('Ammar'))