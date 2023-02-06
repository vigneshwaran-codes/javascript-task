//Task                                     Feb 01-2023

// OOPS

OOP -> Inheritance, Encapsulation, Abstraction, Polymorphism

OOP is powerful programming paradigm

Object-oriented programming, or OOP for Short, is a programming paradigm that is based on the concepts of 'objects'.
hree main concepts: classes and instances, inheritance, and encapsulation.
the core concept of OOP is to separate concerns and responsibilities into entities.An

Entities are coded as objects, and each entity will group a given set of information (properties) and actions (methods) that can be performed by the entity.

- large scale projects.


Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system. Objects contain both functions (or methods) and data. An object provides a public interface to other code that wants to use it but maintains its own private, internal state; other parts of the system don't have to care about what is going on inside the object.

-> classes and instances
-> Inheritance
Inheritance is the ability to create classes based on other classes. With inheritance, we can define a parent class (with certain properties and methods), and then children classes that will inherit from the parent class all the properties and methods that it has.

class -> A class can only have one parent class to inherit from.
extend : parent -> grandparent -> great grandparent classes
If a child class inherits any properties from a parent class, it must first assign the parent properties calling the super() function before assigning its own properties.

-> Encapsulation 
Objects provide an interface to other code that wants to use them but maintain their own internal state. The object's internal state is kept private, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and generally making a clear division between its public interface and its private internal state, is called encapsulation.
   
 feature: it enables the programmer to change the internal implementation of an object without having to find and update all the code that uses it: it creates a kind of firewall between this object and the rest of the system.
OOP and JavaScript 

Constructor - JavaScript provide us with something like a class definition, enabling us to define the "shape" of an object, including any methods it contains, in a single place. But prototypes can be used here, too.
eg: if a method is defined on a constructor's prototype property, then all objects created using that constructor get that method via their prototype, and we don't need to define it in the constructor.
Prototype chain - natural way to implement inheritance

Eg: if we can have a Student object whose prototype is Person, then it can inherit name and override introduceSelf().

Abstraction:
Abstraction is a principle that says that a class should only represent information that is relevant to the problem's context.
This principle is closely related to encapsulation, as we can use public and private properties/methods to decide what gets exposed and what doesn't.
Polymorphism:

Polymorphism -> means many forms.

It's the ability of one method to return different values according to certain conditions.

Object composition:

technique -> works as an alternative to Inheritance
Well, by using composition we can assign properties and methods to objects in a more flexible way than inheritance allows, so objects only get what they need and nothing else.

// Functional Programming

-> In Js -> developers more widely used.
-> bug-free applications, efficiency, and making code easier to test, reuse etc.
-> handle pure mathematical functions.

-> paradigm is totally focused on writing more compounded and pure functions.

We can assign them in a variable as a value.
We can pass them as arguments to other functions.
We can return them as a return value of another function.
We can include them in different data structures

Js -> handles fn is what makes it possible for us to implement -> FP paradigm in js
First-Class Objects -> first class citizenfa-spin

eg: 

    const sum = (x, y) => x+y;

    const res = sum(10,2);

    const s = (x, y, sum) => sum(x, y);

FP -> two key concepts: Pure fn, Avoids shared state and mutable data

Pure fn():

First, a function is a process that takes some input, called arguments, and returns a value. A pure function has additional criteria:

Given the same input, always return the same output
No side effects

Shared state and mutable data:

tate is a way to create more structure around the status of your code.

State keeps track of the status of your entire application, or of an individual object.

Shared state is any data that exists in a shared scope, i.e. where values or functions are accessed. A function has its own functional scope (what’s in the function). Pure functions don’t use state outside their own scope.

side effects are: 

Modifying any external variable or object property,
Logging to the console
Setting off any external process
Calling any other functions with side effects


unctional programming style in our applications, such as Ramda and Lodash

Higher-Order Functions:
A high-order function is a function that receives another function as a parameter or returns a function as a return value.

Composition

Composition -> combination

it’s a process of combining multiple functions in a hierarchy to produce a new function or perform a computation.

Immutability:

An immutable object is an object that can’t be modified after its creation

Immutability is a powerful concept that helps you to prevent the creation of unexpected side effects in your codebase. It makes it easier for you to read and compose your code.


// Diff OOP vs FP:

FP:
Fundamental elements used are variables and functions.The data in the functions are immutable(cannot be changed after creation).
It uses recursion for iteration.
parallel programming supported.
Does not have any access specifier.
No data hiding is possible. Hence, Security is not possible.



OOP:
Fundamental elements used are objects and methods and the data used here are mutable data.
It uses loops for iteration.
does not support parallel programming .
Has three access specifiers namely, Public, Private and Protected.
Provides data hiding. Hence, secured programs are possible.




// Advantage -JavaScript
1.speed
2. Simplicity
3. Popularity
4. Interoperability
5. server-Load
6. Extend Functionality
7. Rich Interfaces
8. Updates
9. Versatility



// Dis-Advantage JavaScript

1. Less secure
2. Stucked Rendering
3. No Multiple Inheritance
4. Browser Support


