// Day3 Notes                                                                       [Jan - 25 - 2023]

// Notes

// s = true;
// s = false;

// do {
// console.log('i get executed once even condition is false');
// } while (s == true);

// let p = 0;

// do {
// console.log('looping');
// } while (p === 0);

let result = ''
let i = 0
do {
  i += 1
  result += `${i} `
} while (i > 0 && i < 5)
// Despite i === 0 this will still loop as it starts off without the test

console.log(result)

let num1 = 16

num1 -= 2
console.log(num1) //3

num1 *= 2
console.log(num1) //32

///--------------------------------------------------------------------

let a, b, c;
[a, b, c = 30, d] = [10, 20]

console.log(a) //10

console.log(b) //20

console.log(c) //30
console.log(d) //undefined

const student = {
  name: 'Krishna'
}
const { name, age = 18 } = student

console.log(name) //krishna

console.log(age) //18

console.log(student) //{name:"krishna"}

const array1 = [1, 2, 3, 4]

console.log(array1.fill(0, 0, 1)) //[0,2,3,4]

//---------------------All Array methods-----------------

//at:The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

const array2 = [5, 12, 8, 130, 44]

let index = 2

console.log(array2.at(index)) // output: 8
console.log(array2.at(-2)) // output: 130

//concat: The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array3 = ['a', 'b', 'c']
const array4 = ['d', 'e', 'f']
const array5 = array3.concat(array4)

console.log(array5)
// Expected output: ["a", "b", "c", "d", "e", "f"]

//copyWithin: The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

const array6 = ['a', 'b', 'c', 'd', 'e']

console.log(array6.copyWithin(0, 3, 4))
// output: ["d", "b", "c", "d", "e"]

console.log(array6.copyWithin(1, 3))
//output: ["d", "d", "e", "d", "e"]

//filter: The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present'
]

const res = words.filter(word => word.length > 6)

console.log(res)
// output: Array ["exuberant", "destruction", "present"]

// find: The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array7 = [5, 12, 8, 130, 44]

const found = array7.find(element => element > 10)

console.log(found)
// output: 12

// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const array8 = [5, 12, 8, 130, 44]

const isLargeNumber = element => element > 13

console.log(array8.findIndex(isLargeNumber))
//  output: 3

// flat: The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr1 = [0, 1, 2, [3, 4]]

console.log(arr1.flat())
//output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]]

console.log(arr2.flat(2))
//output: Array [0, 1, 2, Array [3, 4]]

const arr3 = [1, 2, [3], [4, 5], 6, []]
console.log(arr3.flat()) //[ 1, 2, 3, 4, 5, 6 ]

const arr4 = [1, 2, [3], [4, [5, 4]], 6, []]
console.log(arr4.flat()) //[ 1, 2, 3, 4, [ 5, 4 ], 6 ]

const arr5 = [1, 2, [3], [4, 5], 6, []]

const flattened = arr5.flatMap(num => num)

console.log(flattened)
// Expected output: Array [1, 2, 3, 4, 5, 6]

//The forEach() method executes a provided function once for each array element.

const array9 = ['a', 'b', 'c']

array9.forEach(element => console.log(element))

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// reverse:

const array10 = ['one', 'two', 'three']

const reversed = array10.reverse()
console.log('reversed:', reversed)
// Expected output: "reversed:" Array ["three", "two", "one"]

//shift:
const array11 = [1, 2, 3]

const firstElement = array11.shift()

console.log(array1)
// Expected output: Array [2, 3]

//sort:
const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months)
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array12 = [1, 30, 4, 21, 100000]
array12.sort()
console.log(array12)
// Expected output: Array [1, 100000, 21, 30, 4]

array12.sort(function (a, b) {
  return a - b
})

console.log(array12) // [ 1, 4, 21, 30, 100000 ]

// This Keyword (diff between normal vs arrow function)

const div = document.createElement('div')
const btn = document.createElement('button')
const txt = document.createTextNode('click')
const p = document.createElement('p')
div.appendChild(btn)
btn.appendChild(txt)
div.appendChild(p)
document.body.append(div);

const getVal = () => {
  p.innerHTML += this
}
getVal()

window.addEventListener('load', getVal)
// btn.addEventListener('click', getValue);
btn.addEventListener('click', getVal);