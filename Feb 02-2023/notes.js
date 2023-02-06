// NOTES                                       FEB 01-2023

Task:

Number.MAX_VALUE
 Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
Number coercion

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

execution context?
===================================================================================
console.log(null==undefined)// f
console.log(null===undefined)//f

console.log(null=='undefined')//f
console.log(null==='undefined')//f

console.log('null'=='undefined')//t
console.log('null'==='undefined')//t,f

template literals
------------------

name='ajay'
age=21
city='Chennai'
branch='TNagar'

console.log('hi hello '+name);
console.log('hi hello ',name);

console.log('hi hello '+name+', he is from '+city+', from branch '+branch+', his age is '+age);


in es6: temp lit

${} inside normal string values

console.log(`hi hello ${name} he is from ${city} from branch ${branch} his age is ${age}`);


array:
======
	collection of hetrogenous values

	var arr=[1,2,3,4,6]
	arr.length	
	arr[0]
	arr[3]
	arr[5] //undefined

arr[1]=9000
arr

task: empty an array by using splice() 


destructuring array:

	


es5:
var num=[1,2,4,5,7,8,9,45]
let a=num[0]
let b=num[1]
let c=num[2]

in es6 -> destructuring

var num=[1,2,4,5,7,8,9,45]

let [a,b,c]=num

a
b
c

let [a,,,,b,,,c]=num

let [g*num.length-2,,h*num.length-1,,j*num.length]=num

//Uncaught SyntaxError: Invalid destructuring assignment target


functions:

	functions
	anonymous fns
	arrow fns
	
	self executing fns
	
functions:

	function func_name()
	{
		//stmt
		//return if needed
 	}
func_name();

function display(){
	console.log('hi');
}
display()

function display(){
	return 'hi';
}

var res=display()
res


function add(a,b){
	console.log(a,b);
}

add(1,2);

add(1);
add();

as per requirement => default values of any variable shud be 1

a=1,b=1

function add(a=1,b=1){
	console.log(a,b);
}

add();



function add(a=1,b=1){
	
	console.log(a,b);
	return (a+b)
}

add();


anonymous fn:
=================	
a fn without a name

var display=function (){
	console.log('hi');
}
display

//var display1;
display1()
var display1=function (){
	console.log('hi');
}
display1();

14:55 03-02-2023
==================
day 2 
========

function f4(x=0,y=0){
	x=x*2;
	y=y-6;
	z=x+y;
	
}


let f4=(x=0,y=0)=>x+y;//no retun keyword

f4(2,3)


function f5(x=0,y=0){
	x=x*2;
	y=y-6;
	var z=x+y;
	return z;
}


let f6=(x=0,y=0)=>{
	x=x*2;
	y=y-6;
	var z=x+y;
	return z;
}