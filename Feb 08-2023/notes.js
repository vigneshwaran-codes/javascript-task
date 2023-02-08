// NOTES                                            [ FEB - 08 - 2023 ]


	/********* VSCODE ********/

// =>Function

// case 1:
//console.log(average()); 

// case 2:
function square(a){
    console.log(a*a);
}
console.log(square()); 
console.log(square(5)); 
//undefined with any arithmetic operator is NaN

//JavaScript interpreter hoists the entire function declaration 
//to the top of the current scope,
// case 3:
//function hoisting
console.log(cube(4)); 
function cube(a){
    console.log(a*a*a);
}

// case 4:
// console.log(delete1); // ReferenceError: Cannot access 'square' before initialization
//in f12 tool u get function not defined
// const delete1 = function (n) {
//   return n * n;
// };

function showName(){
    var name1="Nate";//local scope or function scope
    console.log(name1);
}
showName()
//console.log(name1);//will throw ReferenceError: name1 is not defined
showName()

// nested functions
// case 1
// function outer(){
//     console.log('started...')
//     function inner(){
//         console.log("i am inner function");
//     }//will not be executed until it is called
// }
// outer();
// case 2: call inner function

// function outer(){
//     console.log('started...')
//     function inner(){
//         console.log("i am inner function");
//     }//will not be executed until it is called
//   //  inner()
// }
//outer();

// case 3:
function outer(){
    console.log('started...')
    function inner(){
        console.log("i am inner function");
    }//will not be executed until it is called
  //  inner()
}
//outer.inner();//Error: outer.inner is not a function

// // case 4:
// function outer(){
//     var a=9878;
//     console.log('started...')
//     function inner(){
//         console.log("i am inner function");
//           console.log('a value is :: ',a)  
//     }//will not be executed until it is called
//     inner()
// }
// outer();

// case 5:
// function outer(){
//     var a=9878;
//     console.log('started...')
//     function inner(){
//         var innerVAr=18;
//         console.log("i am inner function");
//           console.log('a value is :: ',a)  
//     }//will not be executed until it is called
//     inner()
//     console.log(innerVAr)// ReferenceError: innerVAr is not defined at outer
    
// }
// outer();

//argument in a function
/**** difference between arg and rest ****/
// function display(a,b){
//     console.log(arguments) 
//     console.log(arguments[0],arguments[1],arguments[2])   
//     console.log('hi')
// }
// display(10,23,25)//callee

// function display(a,b,...r){
//     console.log(a,b)
//     console.log(r);
//     for(let i of r)
//         console.log(i)
// }
// display(10,23,25,89,78)

function display(a,b){
    console.log(a,b)
    console.log(arguments)
    // for(let i of arguments)
    // console.log(i) //solution 2 instead of rest optr is below
    for(let i in arguments)
       if(i>=2)
        console.log(arguments[i])
   
}
display(10,23,25,89,78)

// ---------------------------------


// pure function:

		// function Double(v){
	//     v=ReadableStream("t.txt")
	//     console.log(v)
	// }
	//  Double(5) 
	// console.log( 10 );

	let x = 0;
	// function credit(amt){
	//     if(amt===undefined)
	//         this.x=0
	//     this.x=amt;// getting from an api
	// }
	const add = (y) => {
	y =y+ (x?0:x);
	console.log(y)
	};
	//credit(100)
	add(1000);


	/********** NOTEPAD **********/
Functions - refresher

function fnName(arg)
{
	//statements
	//return //optional
}

when return is needed in function:
			|**caller**|
	res=areaOFSomething(10)-areaOfCircle(10)-areaOfSome(10,3);
	console.log(res);//this is expected one

	function areaOFSomething(r){
		var r1=pi*r*r*r;
		//console.log(pi*r*r*r);//not rgt place and this is not expected o/p
		//instead return it back to caller
		return  r1;
		
	}

	function areaOfCircle(r){
		return pi*r*r;
		}

	areaOfSome(r,h){
		return pi*r*r*h;
	}
	
=====================================================================================
task 1 : make only one function and do the above operation
=====================================================================================
hoisting

//JavaScript interpreter hoists the entire function declaration 
//to the top of the current scope,

====================================================================================
IMP NOTE:
----------
Function hoisting only works with function declarations — not with function 
expressions.
====================================================================================

scope:
Variables defined inside a function cannot be accessed from anywhere 
outside the function, 
because the variable is defined only in the scope of the function.

Arguments in function:

its a special object created and is used to store the arguments passed from function call
its an array
its of Arguments Class
use rest and arguments wisely, refer: fns.js file for this

// ====================================================================================

// Note:
// -----

 The arguments variable is "array-like", but not an array. 
It is array-like in that it has a numbered index and a length property. 
However, it does not possess all of the array-manipulation methods.
// ====================================================================================

task: try below 

function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
// ====================================================================================
// Parameters vs Aruments:
// -------------------------
Note the difference between parameters and arguments:

Function parameters are the names listed in the function's definition.
Function arguments are the real values passed to the function.
Parameters are initialized to the values of the arguments supplied.

// Function parameters
===================
There are two special kinds of parameter syntax: default parameters and rest parameters.

Default parameters

In JavaScript, parameters of functions default to undefined. 



// pure/impure functions:
// ----------------------

	Pure Functions
A pure function is a function which:

Given the same input, will always return the same output.
Produces no side effects.
So, `console.log( double(5) );` is the same as `console.log(10);`

This is true because `double()` is a pure function, but if `double()` had side-effects, such as saving the value to disk or logging to the console, you couldn’t simply replace `double(5)` with 10 without changing the meaning.


<div id="content">
	
	<h1> </h1>
</div>
var element=document.getElementById('content');
console.log(element);//<div id="content">	<h1> </h1></div>

after 15 sec - u call a timeout(fn,15000)

manipulates the dom

<div id="content">
	<input/>
	<h1> </h1>
</div>
var element=document.getElementById('content');
console.log(element);//<div id="content">	<input/> <h1> </h1></div>
// ------------------------------------------------------------------------------
This test itself is a checklist. A few examples of side-effects are

Mutating your input
console.log
HTTP calls (AJAX/fetch)
Changing the filesystem (fs)
Querying the DOM

refer below for side effects  and others in pure fns
https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/
// ====================================================================================

			/******RT ******/
		// closure
		// currying
		// dom,bom,eventlisteners(loop)
		// ajax
		// date-fns,moment js
		// Intl