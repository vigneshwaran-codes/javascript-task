// Day4 Task                                                   [27 - Jan -2023]

// ->find destructuring nested obj value
const user = {
  name: 'aaa',
  city: 'Banglore',
  courses: ['c', 'java'],
  address: {
    state: 'karnataka',
    pin: 50004
  }
}

const {
  name: n,
  city: c,
  address: { state: s }
} = user
console.log('welcome to', s)

// -> assign default value in nested obj

const kit = ({
  product,
  brand,
  box: { chip1 = 'M2 Pro', chip2 = 'M2 Max' }
} = {
  product: 'MacBook Pro',
  brand: 'apple',
  box: {
    charger: 1
  }
})

console.log(
  `Introducing the new ${product} (${brand}), supercharged by ${chip1}  & ${chip2}`
)

// -> destructuring array
    //1:
var arr = [1,2,3,4,5]

var [x,y,,z] = arr;
console.log(x, y, z)

    //2:
var [l, m,...o] = arr;
console.log(l, m, o);

  //3:
[t1, t2=10] = [50]

console.log(t1)
console.log(t2)


// -> Reverse Number without converted to string

let num = 12

let result = 0

while (num > 0) {
  const rm = num % 10
  result = result * 10 + rm
  num = Math.floor(num / 10)
}

console.log('the number is reversed', result)
