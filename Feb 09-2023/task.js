// TASK                                            [ FEB - 09 - 2023 ]


// Nested functions
//     A function is called “nested” when it is created inside another function.

// Closure:

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.


// Closure scope chain
// Every closure has three scopes:

// Local scope (Own scope)
// Enclosing scope (can be block, function, or module scope)
// Global scope

//A closure is a feature of JavaScript that allows inner functions to access their outer scope. 
// Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created. 
// A block is also treated as a scope since ES6. 
// Since JavaScript is event-driven so closures are useful as it helps to maintain the state between events.



Eg:
    // => 1
            // function outer(msg){ 
            //     return function() {
            //         console.log("msg:", msg);
            //     }
            // }

            // var fn =  outer("closure is working");

    // => 2
            // function outer(msg){ 
            //     console.log("outer working...");
            //     function inner () {
            //         console.log("msg:", msg);
            //     }
            //     return inner;
            // }

            // var fn =  outer("closure is working");
            // fn();

    // =>  3

    // IIFE and Closures

    // Another way to avoid this issue with closures in a loop is to use the IIFE (Immediately Invoked Function Expression) syntax, 
    // which forces an immediate invocation of the setTimeout function as soon as the loop runs.
    // So instead of essentially stacking the setTimeout function and waiting for the loop to finish, then execute the code, 
    // the setTimeout runs as soon as the loop starts, which is the expected behavior. 
    // Let's see what the syntax for IIFE looks like below.

    // for (var id = 1; id <= 3; id ++) {
    //     (function (id) {
    //         setTimeout(function () {
    //             console.log('seconds: ' + id);
    //         }, id* 1000);
    //     })(id);
    // }
       
    // O/P:
    //     seconds: 1
    //     seconds: 2
    //     seconds: 3


    Garbage collection:

        //     Usually, a Lexical Environment is removed from memory with all the variables after the function call finishes. 
        // That’s because there are no references to it. As any JavaScript object, it’s only kept in memory while it’s reachable.
        // However, if there’s a nested function that is still reachable after the end of a function, then it has [[Environment]] property that references the lexical environment.
        // In that case the Lexical Environment is still reachable even after the completion of the function, so it stays alive.

    // Lexical scopes:

        // the variable of outer scope is easily accessible to the inner scope. This is possible because of lexical scoping.
        // lexical scoping means that inside an inner scope you can use the variable of outer scope. 
        // It is called lexical scope as the engine detemines the scopes during the lexing time.

        //Uses:
            // The for-loop dilemma
            // Emulating private variables in Javascript.
            // Creation of Higher order functions

    // Advantages of closures
            // Here are some advantages of closures:
            
            // They allow you to attach variables to an execution context.
            // Variables in closures can help you maintain a state that you can use later.
            // They provide data encapsulation.
            // They help remove redundant code.
            // They help maintain modular code.

    // Disadvantages of closures
            // There are two main disadvantages of overusing closures:
            
            // The variables declared inside a closure are not garbage collected.
            // Too many closures can slow down your application. This is actually caused by duplication of code in the memory.