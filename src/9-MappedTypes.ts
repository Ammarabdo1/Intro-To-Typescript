//? Mapped Types
console.log('Mapped Types')

interface Person {
    name: string;
    age: number;
    address?: string;
}

//TODO>> Partial => Make all properties in a Type optional.
const person:Partial<Person> = {} // 'person' can now be an empty object

//TODO>> Required => Make all properties in a Type required.
const person2: Required<Person> = {
    name: 'ammar',
    age: 22,
    address: 'Egypt' // is required Although there is <?>
}

//TODO>> Record => Make all properties in a Type into a new type.
//* In this case, 'Ages' is a type where keys are strings, and values are also strings.
type Ages = Record<string, string>;
const ages: Ages = {
    ammar: '22', // 'ammar' is the key (string), '22' is the value (string)
    yousef: '20',
}

//TODO>> Omit => remove properties from a Type.
type Person2 = Omit<Person, 'address'>
const Person2: Person2 = {
    name: 'ammar',
    age: 22,
    // address: '#' //! Error: 'address' does not exist in 'Person2' because it was omitted.
}

//TODO>> Pick => take some properties of a Type.
type Person3 = Pick<Person, 'name'>
const person3: Person3 = {
    name: 'ammar', // 'name' is required in 'Person3' because it was picked from the 'Person' interface.
}

//TODO>> Readonly => Convert all properties to readonly
const person4: Readonly<Person> = {
    name: 'ammar',
    age: 23
}
// person4.age = 22 //! Can't reset the age value