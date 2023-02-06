// NOTES                                            FEB 03-2023

// arrays:
	
	arr=[1001,2,3,4,56,256]

	let[a,,b,c]=arr
	console.log(a,b,c)
	

	let[a,,b,c,...r]=arr
	
// Rest optr:

...varname 
				it acts like an array
				it shud be or it can be last arg of where it is used

	let[a,,b,c,...r]=arr
undefined
a
1001
b
3
c
4
r
(2) [56, 256]
r[0]
56
r[1]
256




arr=[2,5,8,0,3]

function display(t){
	console.log(t)
}
display(arr);


arr=[2,5,8,0,3]

function display(t){
	console.log(t)
}
display(arr);
VM307:4 (5) [2, 5, 8, 0, 3]
undefined
function display(t){
	console.log(t)
}
display(1,2,3,4,5);
VM373:2 1
undefined
function display(t,u,v,...r){
	console.log(t,u,v,r)
}
display(1,2,3,4,5);
VM457:2 1 2 3 (2) [4, 5]


	
// Spread optr:

	arr=[2,3,5,7,6]

	function disp(t,u,...r){
		console.log(t);
	}
	disp(...arr);

// Objects:

	physcial entity
	attributes, behaviours/actions(methods), identity

feathers, legs, beak, flyStatus -  attributes - make/defines an object

fly() -

js book

	author
	publication
	pdate
	no.of.pages
	price
	toc
	qty: 0
	availbleStatus: false
		
purchase() - 10
	
	checkAvailability()
	updateQty();

// class :

	logical entity
	collection of common behaviours and attributes of similiar objects
	blueprint / template
	collection of objects

ex:
	Student,	Car, Employee,	Food,	Vehicle,	Bird
	
Car : ferari,bmw,maruti
Bird: dove,parrot,peacock,crow,cockteil
