// TASK                                            [ FEB - 08 - 2023 ]

// task 1 : make only one function and do the above operation


// task: try below (arguments)

function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

myConcat(',', 'credit','debit');

// 'credit, debit'


function display(a,b,c,d){
    for(let i in arguments)
       i>=2 ? console.log(arguments[i]) : undefined   
}
display(10,23)


// ====================================================================================
// task:
// -----
// Number.parseInt()
// Number.parseFloat()
// Number.toFixed()
// Number.toExponential()
// ====================================================================================


// Number.parseInt()

The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.

// Syntax: 
Number.parseInt(string)
Number.parseInt(string, radix)

// Number.parseInt vs parseInt

This method has the same functionality as the global parseInt() function:
Number.parseInt === parseInt // true



// Number.parseFloat()

    The Number.parseFloat() static method parses an argument and returns a floating point number. 
    If a number cannot be parsed from the argument, it returns NaN.

// Syntax:

    Number.parseFloat(string)

// This method has the same functionality as the global parseFloat() function:
    // Number.parseFloat === parseFloat; // true

// Number.toFixed()

The toFixed() method formats a number using fixed-point notation.

// Syntax:
toFixed()
toFixed(digits)

// Parameters
digits Optional
The number of digits to appear after the decimal point; should be a value between 0 and 100, inclusive. If this argument is omitted, it is treated as 0.

// Return value
A string representing the given number using fixed-point notation.

// Exceptions
   ->  RangeError
    If digits is smaller than 0, larger than 100, or is NaN.

   ->  TypeError
    If this method is invoked on an object that is not a Number.


// Number.toExponential()

The toExponential() method returns a string representing the Number object in exponential notation.

Syntax:

toExponential()
toExponential(fractionDigits)

