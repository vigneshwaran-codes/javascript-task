//TASK                                                      Feb 02-2023 

// const: same as let, its value cannot be changed anywhere in the code
// only thing is we can redeclare them again- check it in embedded js in html

   => Assuming you're using Chrome, this is by design. const redeclarations was intentionally implemented in Chrome Devtools 92 as a means to make it easier for developers to test code within the Chrome console:

   The Console now supports redeclaration of const statement, in addition to the existing let and class redeclarations. 
   The inability to redeclare was a common annoyance for web developers who use the Console to experiment with new JavaScript code.

   it enables you to redeclare const and other bindings you wouldn't usually be able to redeclare. This means something like:

   Example: 
        > const n =10;
        > const n = 100;

        is allowed as the two lines of code are executing in separate REPL scripts (indicated by the >), whereas performing:

        > const n = 10;
          const n = 100;
          x Uncaught SyntaxError: Identifier 'n' has already been declared
          
          is not allowed as this is redeclaring const within the one REPL script (multiple lines of code can be entered into the one command line using SHIFT + ENTER).
          This change is only for the Chrome devtools console, and not for regular page scripts, which will throw a SyntaxError as expected if you try and redeclare const.

// Number.MAX_VALUE

-> return the largest number possible in JavaScript

It is a non-writable, non-enumerable, and non-configurable property.

The largest positive representable number.

Syntax: Number.MAX_VALUE

console.log(MAX_VALUE);
// 1.7976931348623157e+308

var x;
console.log(x.MAX_VALUE);


// Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER

Syntax:
        Number.MAX_SAFE_INTEGER

        The maximum safe integer in JavaScript (253 - 1).

Syntax:
        Number.MIN_SAFE_INTEGER

        The minimum safe integer in JavaScript (-(253 - 1)).

// Number coercion

Number(10.2);
// 10.2
Number('12');
// 12
Number([1]);
//1
Number(undefined);
// NaN
Number(null);
// 0
Number(typeof(undefined));
// NaN
Number( );
// 0


// Execution context

There are two types of execution contexts: global and function. 
The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. 
A function execution context is created whenever a function is called, representing the function's local scope.

Phases of execution context:

-> creation phase
-> execution phase

Everything in JS happens inside this execution context. It is divided into two components. One is memory and the other is code. 
It is important to remember that these phases and components are applicable to both global and functional execution contexts.


=========================================================================
        Memory        |          Code 
========================================================================
 variable = undefined  |   Each line of code executed line by line from
 function: f(){...}   |   top to bottom
                      |
 ==========================================================================

 To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack. 
 A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

 Call Stack -> LIFO principle

 Works:

        call stack ->  [ Global EC - EC - FEC  ] ---> ( FEC - EC - GEC - call stack Empty )



// empty arr using splice
Syntax:

splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

const arr = [ 1,2,3,4 ];

arr.splice(0, arr.length);

console.log(arr);

// []