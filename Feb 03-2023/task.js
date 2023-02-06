// TASK                                            FEB 03-2023

// -> use strict

In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'. This makes it easier to write good and secure JS code

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. 
This strict context prevents certain actions from being taken and throws more exceptions.

The JavaScript exception ""use strict" not allowed in function" occurs when a "use strict" directive 
is used at the top of a function with default parameters, rest parameters, or destructuring parameters.

Strict mode helps out in a couple ways:

It catches some common coding bloopers, throwing exceptions.
It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
It disables features that are confusing or poorly thought out.

-> Undeclared variable is not allowed.
-> Undeclared objects are not allowed.
-> Deleting an object is not allowed.
-> Duplicating a parameter name is not allowed.
-> Assigning to a non-writable property is not allowed.
-> Assigning to a getter-only property is not allowed.
-> Assigning to a new property on a non-extensible object is not allowed.
-> Octal syntax is not allowed.
-> The variable name arguments and eval are not allowed.
-> You cannot also use these reserved keywords in strict mode.

Strict mode changes both syntax and runtime behavior. Changes generally fall into these categories:

changes converting mistakes into errors (as syntax errors or at runtime)
changes simplifying how variable references are resolved
changes simplifying eval and arguments
changes making it easier to write "secure" JavaScript
changes anticipating future ECMAScript evolution.


helps to write a cleaner code
changes previously accepted silent errors (bad syntax) into real errors and throws an error message
makes it easier to write "secure" JavaScript

// -> Object.defineProperties()

The Object.defineProperties() static method defines new or modifies existing properties directly on an object, returning the object.

Syntax:
    Object.defineProperties(obj, props)


    eg:
    const obj = {};
    Object.defineProperties(obj, {
      'property1': {
        value: true,
        writable: true
      },
      'property2': {
        value: 'Hello',
        writable: false
      }
      // etc. etc.
    });



// -> Object.entries()

The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

Syntax:
    Object.entries(obj)


// -> Object.freeze()

The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

Freezing an object is the highest integrity level that JavaScript provides.

Syntax:

    Object.freeze(obj)

    Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.entries() is the same as that provided by a for...in loop.

    If you only need the property keys, use Object.keys() instead. If you only need the property values, use Object.values() instead.


// -> Object prototypes

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

Every object in JavaScript has a built-in property, which is called its prototype. 
The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
The chain ends when we reach a prototype that has null for its own prototype.



// -> Object.prototype.__proto__

The __proto__ accessor property of Object.prototype exposes the [[Prototype]] (either an object or null) of this object.

The __proto__ property can also be used in an object literal definition to set the object [[Prototype]] on creation, as an alternative to Object.create(). See: object initializer / literal syntax. That syntax is standard and optimized for in implementations, and quite different from Object.prototype.__proto__.

Syntax
obj.__proto__



// -> Prototypal inheritance

In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object.
That object is called “a prototype”:


When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. 
In programming, this is called “prototypal inheritance”


Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects.
In particular they support a version of inheritance. Inheritance is a feature of object-oriented programming languages 
that lets programmers express the idea that some objects in a system are more specialized versions of other objects.