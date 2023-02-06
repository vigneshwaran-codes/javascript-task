//Notes                                     Feb 01-2023

// Programming paradigm

Programming paradigms are different ways or styles in which a given program or programming language can be organized. Each paradigm consists of certain structures, features, and opinions about how common programming problems should be tackled.

JS -> MutiParadigm language

Modern programming languages fall into two categories: 
    imperative and declarative 

imperative:
    .Procedural programming paradigm
    .Object oriented programming

    Characteristics of imperative (procedural / OOP) programming
    You specify exactly how to do something, not just the desired outcome.
    Variables, pointers, and stored procedures are commonplace, and data is often considered mutable variables (changeable)
    Inheritance is commonplace and typically used as an example of reusable, clean code that helps future developers
    

declarative:
Declarative programming is a programming paradigm where we specify the program logic without describing the flow control. Declarative programming is all about what to do to achieve a certain result.
    .Functional programming
    .Logic Programming paradigm

    Characteristics of imperative (procedural / OOP) programming
    You specify exactly how to do something, not just the desired outcome.
    Variables, pointers, and stored procedures are commonplace, and data is often considered mutable variables (changeable)
    Inheritance is commonplace and typically used as an example of reusable, clean code that helps future developers
    




// Javascript
JavaScript (JS) is a lightweight and interpreted programming language 


JavaScript(JS) is a lightweight and interpreted programming language having first-class functions.
It is mostly referred to as the scripting language for Web pages.
Popular frameworks such as Vue.js, Angular.js, a library such as React.js, and runtime environment such as Node.js. All of these are JS based only.
There is a developer console in every browser that can be used for debugging purposes.
Functions in JavaScript are also called first-class citizens and they are so powerful that they can even be passed as an argument to another function.
JavaScript is widely used to create full-stack web applications using various tech stacks such as the MERN stack and the MEAN stack.
There are some alternatives to JS such as CoffeeScript, Dart, etc. But TypeScript is the most popular one.

// History of Js

Initially, JavaScript was called "LiveScript" but later its name got changed from LiveScript to JavaScript to sound more familiar. The main motive behind building JavaScript was to make web pages lively. Sounds interesting right ? Those were the times when there used to be no fancy(by fancy I mean more functional) web pages hence it was the need of the hour. The web pages without JavaScript are called "Static" web pages while those with JavaScript are "Dynamic" web pages. Dynamic web pages are very user-friendly and intuitive.

Created by : Brendan Eich
Year : 1995
Mostly applied in Web Development
Thread : single-threaded


// EcmaScript History

livescript - JavaScript

differnt types of js - vannilascript,coffeescript

Ecma International - standard version of js

ES1,2,3,5
ES5 -  stable version

ES6....ES2015



// Datatypes

primitive - 7 dt -> number,string,boolean,bigint,null,undefined,SYMBOL(es6)
non-primitive - Object


// Variable


var x;

application : to add 2 numbers

	var n1, n2, sum;
		sum=n1+n2
		console.log(sum)

int n --- var n;

var t=90;
t='hi';
t=true;

in java
	int a=90;
	a="hi";//strongly typed

weakly typed:

	var a=9	// implicit type conversion
	var sum=a+"5"
	console.log(sum)


let , var &  const


var e=90
undefined
console.log(typeof(e)
VM264:1 Uncaught SyntaxError: missing ) after argument list
console.log(typeof(e))

VM272:1 number
undefined
e="hi"
'hi'
console.log(typeof(e))

VM298:1 string


var a=90;
a
90
var a=78
undefined
a
78
var a=90;  var a=87;
undefined
a
87
let s='hi'
undefined
s
'hi'
let s=90
undefined
let s=90
undefined
let s=90; var s=77;


1.
console.log(u)
VM956:1 Uncaught ReferenceError: u is not defined
    at <anonymous>:1:13

2. 

//var u; //variable hoisting - js engine
u=90; 
console.log(u)
 90

3.
 //var j; //auto var hoisting
	console.log(j)
	var j=90;
	//undefined

var x,y; //auto var hoisting

console.log(x)
console.log(y)
var x=90
var y=45
x()
console.log(x) //90
console.log(y) //45





function disp(){
	var s=90;
	console.log(s);
}
disp();

var a=90;
function disp(){
	a=900;
	console.log("before ",a)
	var a=89;
	console.log("after",a)
}

disp()

var a=90;
function disp(){
	a=900;
	console.log("before ",a)
	var a=89;
	console.log("after",a)
}
console.log("before function call",a)
disp(); console.log("after function call ",a);


var a=90;
function disp(){
	this.a=900;
	console.log("before ",a)
	var a=89;
	console.log("after",a)
}
console.log("before function call",a)
disp(); console.log("after function call ",a);
VM376:8 before function call 90
VM376:4 before  undefined
VM376:6 after 89
VM376:9 after function call  900


why block scoped variables:

problem:
===========
	function disp(){
			var a=900;
			console.log("before ",a);

			{
				var a=56;
				console.log("inner ",a);
			}
			console.log("after ",a);
	}
disp()

solution:

function disp(){
			var a=900;
			console.log("before ",a);

			{
				let a=56;
				console.log("inner ",a);
			}
			console.log("after ",a);
	}
disp()
VM400:3 before  900
VM400:7 inner  56
VM400:9 after  900

let :
=====
block scoped varible

cannot redeclaration same var name


let n=90;
var n=910; or let n=94;


const: same as let, its value cannot be changed anywhere in the code
only thing is we can redeclare them again- check it in embedded js in html


const n=5678
undefined
const n=90
undefined
n=9000;
VM547:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:2
(anonymous) @ VM547:1
n++
VM558:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:2



// conversions in js

Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types. The source code can also explicitly require a conversion to take place.

For example, given the expression "foo" + 1, the Number 1 is implicitly converted into a String and the expression returns "foo1".


NUMBER:
===========
123; // one-hundred twenty-three
123.0; // same
123 === 123.0; // true
123==123.0
true
123 === 123.0;
true
123=='123'
true
typeof(123)
'number'
typeof('123')
'string'
123==='123'
false


explicit conversions

Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN



// Hoisting


