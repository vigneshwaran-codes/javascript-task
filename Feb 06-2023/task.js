// TASK                                            FEB 6-2023

// Prototype :

        // JavaScript is a prototype based language, so, whenever we create a function using JavaScript, 
        // JavaScript engine adds a prototype property inside a function, Prototype property is basically an 
        // object (also known as Prototype object), where we can attach methods and properties in a prototype object, 
        // which enables all the other objects to inherit these methods and properties.

        // [[Prototype]] is a hidden private property that all objects have in Javascript, it holds a reference to the object’s prototype.

        Eg:

        // function User(name, password){
        //     this.userName = name
        //     this.password = password
        // }

        // let user = new User("MJ", 123);
        // console.log(user);

        // let login = function login(){
        //     return "Login Successfully";
        // }

        // let logout = function login(){
        //     return "Logout Successfully";
        // }

        // User.prototype.login = login;
        // User.prototype.logout = logout;

        // console.log(user);
        // user.login();
        // user.logout();


// __proto__ :

        // __proto__ (also called the Dunder Proto or Double Underscore Prototype) is a property of Object.prototype
        // he hidden [[Prototype]] property of an object and allows you to access or modify it. You should not use it as it is deprecated, 
        // although you may come across it in older code.

        // let status = {
        //     e1: "check-in"
        // };
        
        // let entry = {
        //     e2: "check-out"
        // };
        
        // entry.__proto__ = status;
        
        // {e1: 'check-in'}
        // entry.e1
        // 'check-in'

        // entry.e2
        // 'check-out'

        // entry.e3 = "check-in"
        // 'check-in'

        // entry.e3
        // 'check-in'

        // entry
        // {e2: 'check-out', e3: 'check-in'}
        
        // e2: "check-out"

        // e3: "check-in"
        // [[Prototype]]: Object

        // status
        // {e1: 'check-in'}

        console.log('hello');