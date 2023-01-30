const arr = [1, 2, 3, 4]

    function g (...data) {
    console.log(data)
    }
    g(arr)

    function d (...data) {
    console.log(data)
    }
    d(1, 2, 3)

    function g1 (...data) {
    console.log(data[0], data[1])
    }
    g1(arr)

    function d1 (...data) {
    console.log(data[0], data[1])
    }
    d1(1, 2, 3)

// rest ( remaining)

    // the rest operator puts the rest of some specific user-supplied values into a JavaScript array.

// spread (expands into individual elements)

// Es6 Syntax

    // the spread syntax expands iterables into individual elements.

    // A spread operator is effective only when used within array literals, function calls, or initialized properties objects.

    // you can use the spread operator to clone properties from one object into another.


    var names = ["Tim Cook", "ceo"]
    var company = {...names, brand: "apple" }

    console.log(company);

    // 1 -> array literals
    // 2 -> separte strings into individual array items
    // 3 -> function
    // 4 -> objects

    // rest <-> spread

// *Both spread and rest operators were introduced to JavaScript with ES 6, and both the operators are represented with triple dots (...).
// *The spread operator spreads the values in an array or a string across one or more arguments.
// *Rest operator allows us to pass an indefinite number of arguments to function by accumulating these several values into an array.
// *Both spread and rest operators have the same syntax in JavaScript but they perform different functionalities.
// *The spread operator in JavaScript expands values in arrays and strings into individual elements whereas, 
// *the rest operator puts the values of user-specified data into a JavaScript array.


//     ( destructuring )
//    rest  <--->  spread

// Ex
    var n = [1,2,3]
    function m(f, ...k){
        console.log(f, k)
    }
    m(...n);


    function d(a,b){
        console.log(a,b);
    }
    d(...n);

    var products = ["oneplus", "googlePixels"]

    var brand = ['the flagsip mobiles are', ...products];
    console.log(brand)

    var j1 = [1,2,3];
    var j2 = [4,5,6];
    const j3 = j1.concat(j2)
    console.log(j3)

    const j4 = [...j1, ...j2];
    console.log(j4)


    var obj1 = { a: 1, b: 4, c: 11}
    var obj2 = { d: 2, e: 6, f: 8 }

    var merge = (...objects) => ({objects})
    const mergedObjects = merge(obj1, obj2)
    const mergedObjects1 = merge({}, obj1, obj2)
    console.log(mergedObjects)
    console.log(mergedObjects1)

    const merge1 = (...objects) => objects.reduce((acc, cur) => ({ ...acc, ...cur}))
    const mergedObjects2 = merge1(obj1, obj2)
    console.log(mergedObjects2)

// Copy array/ object

/* array */
    const arr4 = [10,20,30]
    const arr5 = [...arr4]
    // arr has same contents
    console.log(JSON.stringify(arr4) === JSON.stringify(arr5))
    // does array are equal
    console.log(arr4 === arr5)
    arr4.push(40)
    // modifying our initial array does not modify the copy:
    console.log(arr4);
    console.log(arr5)

/* object */
    const objx = { a: 100, b: 55, c: 200}
    const objCopy = {...objx} // spread the object into a list of parameters
    // then return the result in a new object

    // arr has same contents
    console.log(JSON.stringify(objx) === JSON.stringify(objCopy))
    // does array are equal
    console.log(objx === objCopy)
    objx.d = 400
    // modifying our initial array does not modify the copy:
    console.log(objx);
    console.log(objCopy)

// When we see "..." in the code, it is either rest parameters or the spread syntax.

// There’s an easy way to distinguish between them:

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
// Use patterns:

// Rest parameters are used to create functions that accept any number of arguments.
// The spread syntax is used to pass an array to functions that normally require a list of many arguments.


// DESTRUCTURING

    // Object destructuring
        // Object destructuring allows you to create new variables using an object property as the value.
        const obj5 = {
            id: 1,
            name: 'watch',
            model: 'series 3'
        }

        const {id: i, name, model} = obj5

        console.log(i)
        console.log(name)
        console.log(model)

        const obj6 = {
            id: 1,
            name: 'watch',
            model: 'series 3',
            features: { f1: 'camera', f2: 'message'},
            apps: ['fitness', 'spotify', 'maps']
        }
        
        const {
            id,
            features: {f1: f},
            apps: [a1, a2]
        } = obj6

        console.log(id, f, a1, a2);

// Spread operator destructuring

    const arr7 = [1, 8 , 9];
    // const arr8 = arr7
        // arr8.pop()
        // console.log(arr7);

    // =>> using spread (...)
        // const m1 = [...arr7]
        // m1.pop()
        // console.log(arr7)
        // console.log(m1)

    // Spread can also be used to convert a set, or any other iterable to an Array.
    // Create a new set and add some entries to it:
        const sea = new Set()
        sea.add('whale');
        sea.add('dolphin');
        sea.add('shark');
        console.log(sea);
    // set => array
        const seaCreatures = [...sea]
        console.log(seaCreatures)

    // obj -> instead of object.assign we can use spread operator ( with objects )
    // When working with objects, spread can be used to copy and update objects.
    // Originally, Object.assign() was used to copy an object:
    const k1 = {
        p: 'application',
        q: 'design'
    }
    const k2 = Object.assign({}, k1)
    console.log(k2)
    // This is simplified with the spread syntax—you can shallow copy an object by spreading it into a new one:
    const k3 = {...k1, r: 'testing'}
    console.log(k3)
    // we can assign nested obj with spread
    const k4 = {...k3, r: { testing: 'automation' }}
    console.log(k4)

    const obj8 = {
        'model': 'm2 Pro',
        'brand': 'apple',
        'color': 'grey'
    }

    const getKey = key => {
        const { [key]: val } = obj8
        console.log(val)
    }

    getKey('model')


    // Destructuring is used to create varibles from array items or object properties.
    // Spread syntax is used to unpack iterables such as arrays, objects, and function calls.
    // Rest parameter syntax will create an array from an indefinite number of values.
    




