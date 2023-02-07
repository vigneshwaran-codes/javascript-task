// TASK                                            [ FEB - 07 - 2023 ]


// ===================================================
// task: Function.prototype.apply()
// task: slide 52 , subclass.html
// task: method chaining and encapsulation
// ===================================================

// 1:  Function.prototype.apply()

// The apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).

// eg:

    // const arr = [1,2,3];

    // function sum(a,b,c){
    //     let sum = a+b+c;
    //     return sum;
    // }

    // let result = sum.apply(null, arr);
    // console.log(result);

    // apply() -> it is same like call method() it only take second argument has array list

    // eg 
    // 2:


    // let name = {
    //     firstName: "Muhammed",
    //     lastName: "Ali"
    // }

    // console.log(name);

    // let printName = function (professional) {
    //     console.log(this.firstName + " " + this.lastName + " " + "is" +" " + professional);
    // }
    
    // printName.apply(name, ["former boxer"]);



    // call -> it invoke fn(), it take arguments has individually

// (which use invoke fn directly by passing with reference , point to the this variable inside the method)

    // apply  -> invoke fn(), it take arguments has array list

// (apply his same like call method , only thing it takes 2nd arguments has the array list of the parameter we passed to the fn)

    // bind -> it just bind keeps copy of fn(), it can be invoke later.

// ( similarly bind method does not directly invoke the method, gives you exactly copy of same method which can be invoke the fn later).



//  =>  METHOD CHAINING

    // Method chaining uses the this keyword in the object’s class to access its methods. 

    // this is the current object instance, therefore, it has access to all the methods defined on the instance as well as access to the prototype chain. 
    // method1() of MyClass can be accessed using this.method1().

    // class method_chaining {
    //     method1() {
    //       console.log('This is method1');
    //       return this;
    //     }
        
    //     method2() {
    //       console.log('This is method2');
    //       return this;
    //     }
        
    //     method3() {
    //       console.log('This is method3');
    //       return this;
    //     }
    //   }
      
    //   const method_chaining_obj = new method_chaining()
    //   method_chaining_obj
    //     .method1()
    //     .method2()
    //     .method3();

    // O/P:
    //     This is method1
    //     This is method2
    //     This is method3

        // Take a look at lines 19 − 22.
        // The functions are nested in the same order they’re executed in instead of in reverse. 
        // The output of one method becomes the input of the method that follows. 
        // This approach makes​ the code easier to understand while eliminating the need to worry about closing parentheses and brackets.

// => ENCAPSULATION:

    // Encapsulation can be defined as “the packing of data and functions into one component”. 
    // Packing, which is also known as bundling, grouping and binding, simply means to bring together data and the methods which operate on data. 
    // The component can be a function, a class or an object.

    // Packing enables “controlling access to that component”.
    //  When we have the data and related methods in a single unit, we can control how is it accessed outside the unit. 
    //  This process is called Encapsulation.

    // Encapsulation is also possible in non-object-oriented languages.

    // The simplest and most elegant way to create encapsulation in JavaScript is using closures. 
    // A closure can be created as a function with private state. When creating many closures sharing the same private state, we create an object.


    // Use var keyword to make data members private.
    // Use setter methods to set the data and getter methods to get that data.

    // eg:

    class Student  
    {  
      constructor() {  
         var name;  
         var marks;  
      }  
          getName()  
          {  
            return this.name;  
          }  
            setName(name)  
            {  
            this.name=name;  
            }  
          
            getMarks()  
            {  
            return this.marks;  
            }  
            setMarks(marks)  
            {  
                this.marks=marks;  
            }  
      }

      var stud=new Student();

       stud.setName("John");  
       stud.setMarks(80); 

       console.log(stud.getName()+" "+stud.getMarks());  

    // O/P:
    // John 80

    // Eg:
            function fnScope()
            {
            var fnVar = "Hi!";
            alert( fnVar ) // "Hi!";
            }
            alert( fnVar ) // error; fnVar is not accessible outside the function.

    // Advantage of Encapsulation:
    
    // The main advantage of using encapsulation in JavaScript is to provide security to the data. Other benefits of encapsulation include:

    // Encapsulation guards an object against illegal access.
    // Encapsulation helps to achieve a level without revealing its complex details.
    // This will reduce human errors.
    // Make the application more flexible and manageable.
    // Simplifies the application.
    

// => subclass.html

    //Base Class
    var Contact = function(fname,lname) {
        this.fname = fname;
        this.lname = lname;
        console.log('contact called')
    };
    Contact.prototype.DisplayName = function () {
        console.log(`${this.fname} ${this.lname} mail to ${this.email}`);
    };

    //SubClass
    var EmailContact = function(fname,lname,email) {
    Contact.call(this,fname,lname);
    //this.fname = fname;
    //this.lname = lname;
    this.email = email;
    };

    EmailContact.prototype = Object.create(Contact.prototype);
    EmailContact.prototype.constructor = EmailContact;
    
    /*EmailContact.prototype.DisplayName = function () {
        console.log(`${this.fname} ${this.lname} ${this.email}`);
    };*/
    
    var contact1 = new EmailContact("Karthik","Raman","karthik@clayfin.com");
    console.log(contact1.DisplayName());