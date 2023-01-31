obj={}

obj={
k:"v",
k1:"v1"
}

obj.k
obj.k1
obj.v 

console.log(obj["k"]);//v
console.log(obj["k1"]);//v1

var key="k"
console.log(obj[key]);

console.log(obj.key)
obj["k"]
'v'

var key="k"
console.log(obj[key]);
 v

obj.key
undefined

console.log(obj.key)
undefined


for...in 

arr=[2,3,4]
	for(let t in arr)
		console.log(arr[t])

2
3
4

obj={
	name:'aaa',
	age:23,
	city:'Mumbai'
}

	for( let y in obj)
		console.log(obj.y)
(3) undefined


obj={
	name:'aaa',
	age:23,
	city:'Mumbai'
}

	for( let y in obj)
		console.log(obj[y])
aaa
23
Mumbai

obj={
	name:'aaa',
	age:23,
	city:'Mumbai'
}

	for( let y in obj)
		console.log(y)
name
age
city

obj={
	name:'aaa',
	age:23,
	city:'Mumbai'
}

	for( let y in obj)
		console.log(typeof(y))
        
(3) string

Enumeration deals with objects while iteration deals with values only. Enumeration 
is used when we use vector,hashtable etc while iteration are used in while loop 
for loop etc

Iteration deals with arrays and strings while enumerating deals with objects

In JavaScript you can iterate an array or a string with :

forEach Loop
for loop
for of Loop
do while Loop
while Loop

And you can enumerate an object with :

for in Loop
Object.keys() Method
Object.values() Method
Object.entries() Method

to check if keys are existing in an object:
	
	2 ways
	
		1. IN Optr
		2. hasOwnProperty()


obj.hasOwnProperty('country')
false
obj.hasOwnProperty('city')
true

>obj
{name: 'aaa', age: 23, city: 'Mumbai'}
'name' in obj

true
'name1' in obj

false


task:

	emp=[
	{name: 'aa', age: 23, city: 'Mumbai'},
{name: 'bb', age: 23, city: undefined},
{name: 'cc', age: 23, city: 'Hyderabad'},
{name: 'dd', age: 23, city: 'undefined}

]


print only if the keys of the above array objects are having values
skip objects with key holding -undefined  

using prompt()-> get values of object , store in obj and print it
here u have to get value for name , age, city

as shown below 
{name: 'aa', age: 23, city: 'Mumbai'}


find out what is <noscript>

for...of

	arr=[2,3,2]
	for(let y of arr)
		console.log(y)
VM604:3 2
VM604:3 3
VM604:3 2
undefined
for(let y of obj)
		console.log(y)
VM636:1 Uncaught TypeError: obj is not iterable
    at <anonymous>:1:14

NOTE : Objects are only enumerable

Difference for of and for in:


for(let u of 'ajay')
    console.log(u)
VM742:2 a
VM742:2 j
VM742:2 a
VM742:2 y
undefined
for(let u in 'ajay')
    console.log(u)
VM775:2 0
VM775:2 1
VM775:2 2
VM775:2 3

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}



object with functions:


var obj={};
obj={
	name:'aaa'
}
var objCopy={};

objCopy=obj;
objCopy.city='chn'
'chn'
objCopy
{name: 'aaa', city: 'chn'}
obj
{name: 'aaa', city: 'chn'}

var newObjCopy=Object.create(obj);
	
newObjCopy

var newObjCopy=Object.create(obj);
	
newObjCopy
{}[[Prototype]]: Objectcity: "chn"name: "aaa"[[Prototype]]: Object
obj
{name: 'aaa', city: 'chn'}

newObjCopy.name
'aaa'
newObjCopy.city
'chn'

newObjCopy
{}
obj
{name: 'aaa', city: 'chn'}
newObjCopy.state='TN'
'TN'
obj
{name: 'aaa', city: 'chn'}
newObjCopy.city
'chn'
obj.state