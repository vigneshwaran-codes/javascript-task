// Day4 Notes                                                      [27 - Jan -2023]

// Objects

//     object create -> 5ways

// 1: {}

const acc = {
  id: 1,
  name: 'tripod'
}
console.log('obj1', acc)

// 2:  Object.create()

const cmpObj = { company: 'amazon' }
const obj2 = Object.create(cmpObj, { name: { value: 'emp1' } })
console.log('obj2', obj2.company)
console.log('obj2', obj2.name)

// 3:  Object.assign()

const product = { product: 'camera' }
const obj3 = Object.assign({}, acc, product)
console.log('obj3', obj3)
// 4:  new keyword

const obj4 = new Object()
obj4.color1 = 'pink'
obj4.color2 = 'red'
console.log('obj4', obj4)

// 5:  using classes

class Person {
  constructor (fname, lname) {
    this.firstName = fname
    this.lastName = lname
  }
}

const person = new Person('steve', 'jobs')

console.log(person.firstName)
console.log(person.lastName)

// entries method

// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

// Syntax:
// Object.entries(obj)

// Ex:

// const obj2 = {
//     a: 'name',
//     b: 'role',
//     c: 'id number'
// }

// for(const [key, value] of Object.entries(obj2)) {
//     console.log(`=> ${key} = ${value}`)
// }

// destructuring

// Destructuring assignment is a syntax that allows you to assign object properties or array items as variables.
// This can greatly reduce the lines of code necessary to manipulate data in these structures.
// There are two types of destructuring: Object destructuring and Array destructuring

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Syntax:

// const [a, b] = array;
// const [a, , b] = array;
// const [a = aDefault, b] = array;
// const [a, b, ...rest] = array;
// const [a, , b, ...rest] = array;
// const [a, b, ...{ pop, push }] = array;
// const [a, b, ...[c, d]] = array;

// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;
// const { [key]: a } = obj;

// let a, b, a1, b1, c, d, rest, pop, push;
// [a, b] = array;
// [a, , b] = array;
// [a = aDefault, b] = array;
// [a, b, ...rest] = array;
// [a, , b, ...rest] = array;
// [a, b, ...{ pop, push }] = array;
// [a, b, ...[c, d]] = array;

// ({ a, b } = obj); // brackets are required
// ({ a: a1, b: b1 } = obj);
// ({ a: a1 = aDefault, b = bDefault } = obj);
// ({ a, b, ...rest } = obj);
// ({ a: a1, b: b1, ...rest } = obj);

// Note:

// The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.

// Similarly, you can destructure objects on the left-hand side of the assignment.

// Default value

//     Each destructured property can have a default value. The default value is used when the property is not present, or has value undefined.
//     It is not used if the property has value null.

// Rest property
// You can end a destructuring pattern with a rest property ...rest.
// This pattern will store all remaining properties of the object or array into a new object or array.

// we can destructuring with other syntax are:
//     . for of
//     . for in
//     . function parameters
//     .the catch binding variable

// for of()

// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
// Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object,
// generators produced by generator functions, and user-defined iterables.

// Syntax:
// for (variable of iterable)
//     statement

// Ex:
//  i => over array
const obj6 = [1.0, 2.0, 3.0]

for (let res of obj6) {
  res = +res * 2

  console.log(res)
}

// i => over string
const word = 'hello'

for (const w of word) {
  console.log(w)
}

// Each iteration creates a new variable. Reassigning the variable inside the loop body does not affect the original value in the iterable (an array, in this case).
// for in()

// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

// Syntax:
//     for (variable in object)
//     statement

// Ex:
// const obj = {
//   a: 3,
//   b: 6,
//   c: 9
// }
// for (const el in obj) {
//   console.log(`${el} = ${obj[el]}`)
// }
