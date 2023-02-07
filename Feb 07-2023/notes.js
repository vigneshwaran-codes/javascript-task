// NOTES                                            [ FEB - 07 - 2023 ]

class and constructor function

var emp={
	name:'ajay'
	dispName(){
			console.log(name);
	}
}

console.log(emp.name);
emp.dispName()

Object prototypes:
====================
Every object in JavaScript has a built-in property, which is called its prototype.


function Vehicle(){
}


When an object gets a request for a property that it does not have, its 
prototype will be searched for the property, then the prototype’s prototype,
 and so on. So who is the prototype of an object? It is the great ancestral 
prototype, the entity behind almost all objects, Object.prototype. 
Many objects don’t directly have Object.prototype as their prototype, but 
instead have another object that provides a different set of default properties. 
Functions derive from Function.prototype, and arrays derive from Array.prototype and so on.


function Car(name){
    this.name=name;
}
undefined
var c1=new Car('Tata');
undefined
c1
Car {name: 'Tata'}
c1.price=240000
240000
c1
Car {name: 'Tata', price: 240000}
var c1=new Car('BMW');
undefined
c1
Car {name: 'BMW'}
var c2=new Car('Tata');
undefined
c2.price=340000
340000
c2
Car {name: 'Tata', price: 340000}
c1
Car {name: 'BMW'}
Car.prototype.fuelCapacity=48
48
c1
Car {name: 'BMW'}name: "BMW"[[Prototype]]: ObjectfuelCapacity: 48constructor: ƒ Car(name)[[Prototype]]: Object
c1.fuelCapacity
48


ince objects inherit from the prototype object, then all new objects will have 
changed property value if a prototype value is changed. 
All the previously created objects will have the previous value.




function Demo(name,resource){
	this.name=name,
	this.resource=resource
}

var d1=new Demo('PFM',3);
Demo.prototype.pm='H'
console.log(d1)
var d2=new Demo('Bandhan',2);
console.log(d2)

//Demo.prototype.pm='Hem'
Demo.prototype={pm:'Hem'}
var d3=new Demo('Hdfc',6);
console.log(d3)
call():
-------
problem:
============
const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};
obj.prototype. greet=function() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}//not possible

obj.greet=function() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

var oo={}
oo //doesnt have greet()
greet.call(oo)

solution:
===========
function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj)


ex2:
====
globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call();


display() {
  console.log(`a value is ${a} globProp value is ${this.globProp}`);
}

display.call();

globProp = "Wisen";
a=90;
function display() {
  console.log(`a value is ${a} globProp value is ${this.globProp}`);
}

display.call(globprop);
display.call(this.globprop);

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); 
console.log(this.globalThis);//wind
console.log(globalThis);//wind

bind():
----------
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};
x=900;
const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42



Classes in ES6
----------------

	class - key word

two wordds in class name-  both words first char shud be in upper case


name= var	
getEmployeeName - var,meth
EmployeeDetail - class
DATEOFMONTH- enum or const

sytax:

class ClassName{
	//properties - cannot be created like this
	//constructor fns
	//methods
}

class Employee{
	var name='ajay';
	function display(){
		console.log(this.name);
	}
}



class Employee{}
undefined
var emp=new Employee();
undefined
emp
Employee {}[[Prototype]]: Object
class Employee{
    constructor(){
        console.log('obj created-emp');
    }
}
undefined
var emp=new Employee();
VM503:3 obj created-emp
undefined
var emp1={}
undefined
class Employee{
    var name='ajay'
VM661:2 Uncaught SyntaxError: Unexpected identifier 'name'
class Employee{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
undefined
var emp=new Employee('ajay',12);
undefined
var emp1=new Employee('vinay',22);
undefined
emp

Employee {name: 'ajay', age: 12}age: 12name: "ajay"[[Prototype]]: Objectconstructor: class Employee[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
emp1
Employee {name: 'vinay', age: 22}age: 22name: "vinay"[[Prototype]]: Objectconstructor: class Employee[[Prototype]]: Object
emp.name
'ajay'
emp1.name
'vinay'

A class may only have one constructor
=======================================
class Trainee{
    constructor(){
        console.log('no arg');
    }
    constructor(name){
        console.log('name arg');
    }
}
VM1230:5 Uncaught SyntaxError: A class may only have one constructor
