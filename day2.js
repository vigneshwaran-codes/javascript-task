// Day2 Notes

// console.error

Used to log error message to the console. Useful in the testing of code. By default, the error message will be highlighted with red color.

Suppose you are select some DOM element and then apply a CSS class to it. But the element itself doesn't exist in the DOM, 
then in such case browser will output an error in the web console (or you can manually check and output an error message).

To log out your own error message you can check if the element exists or not. Use console.error and pass an error message if the element doesn't exist.

=> other scenario

When you fetch some API and it is not reachable.
While calculating something number is divided by 0.
While accessing any array and index exceeds array length.
An object property doesn't exist. and so on.

console.error when outputs the error message, it is preceded with a warning symbol while console.log doesn't use any symbol. (visual difference)
Color and background color of output by the console.error is reddish for it to look like danger while the color of console.log is normal (black). (visual difference)

const subscriber = '20000'

if (subscriber >= 10000) {
  console.log('Monetised')
} else {
  console.error('Not Eligible')
}

// console.dir

  console.dir method is used mainly to display properties of an object.
  It outputs the list of properties of an object in a readable and interactive manner.

  'dir' in the console.dir stands for the directory which represents the listing of elements or objects properties.

    const arr = [1,2,3,0];
    console.log(arr);
    console.dir(arr);

  Use console.dir if you want to display the properties of an object in a hierarchical manner in JSON like format.

-----------------------------------------------
// type Conversion ( to String)

const b = 100

const str = String(b)
console.log(str)
typeOf(str)

typeof null
// 'object'

typeof undefined
// 'undefined'

console.log(undefined === null)
// false

console.log(undefined == null)
// true

console.log(1 === true)
// false

console.log(0 === false)
// false

console.log(1 == true)
// true

console.log(0 == false)
//  true

const z = true
const s = String(z)
console.log(s)
typeof s
// => o/p
// true
// 'string'

// case 2:
let name

function display () {
  console.log('display')
}

function getName (argFunc) {
  name = prompt('enter name')
  argFunc() // argFunc is a callback
  // remember donrt call them in the middle of execution of getInput method
}

getName(display)

// getName(display)
// VM171:4 display
-------------------------------
// create object

// five ways to create object

// 1 >>
const obj = {
  product: 'M2',
  brand: 'apple'
}
console.log(obj.product)

// M2

// 2 >>
// using new keyword

const product = new Object()

product.model = 'M1 Macbook Pro'
product.brand = 'apple'

console.log(product)

// {model: 'M1 Macbook Pro', brand: 'apple'}

// 3 >> Object.create()

const org = { company: 'abc' }

const emp = Object.create(org, { name: { value: 'emp one' } })

console.log(emp)

// 4 >> Object.assign()

const modelObject = { name: 'oneplus' }
const versionObject = { series: '7' }

const brand = Object.assign({}, modelObject, versionObject)
console.log(brand)

// {name: 'oneplus', series: '7'}

// 5 >> Es6 classes

class People {
  constructor (fname, lname) {
    this.fname = fname
    this.lname = lname
  }
}
const people = new People('firstname', 'lastname')
console.log(people.fname)
-----------------------------------------------------
// use Strict method

// Strict mode can be used in two ways, remember strict mode doesn’t work with block statements enclosed in {} braces.

// Used in global scope for the entire script.
// It can be applied to individual functions.

// Strict mode changes both syntax and runtime behavior.

// Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
// Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.
// Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
// It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
// It disables features that are confusing or poorly thought out.
// Strict mode makes it easier to write “secure” JavaScript.
--------------------------------------------------------
// boo -> int
var color = true
var num = parseInt(color)
console.log(num)
typeof num
// NaN
// 'number'

// boo -> float
var color = true
var num = parseFloat(color)
console.log(num)
typeof num
// NaN
// 'number'

// boo -> string

var color = false
var num = String(color)
console.log(num)
typeof num
// false
// 'string'

// string -> boo

var color = 'pink'
var num = Boolean(color)
console.log(num)
typeof num
// true
// 'boolean'

// float -> boo

var val = 12.6
var num = Boolean(val)
console.log(num)
typeof num
// o/p
// true
// 'boolean'

// int -> boo

var val = 1
var num = Boolean(val)
console.log(num)
typeof num
// true
// 'boolean'
