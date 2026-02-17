const user = {
    name: "Priyanshu",
    age: 21,
    greet: function() { // This is a regular function expression assigned to the 'greet' property of the 'user' object.
        console.log(`Hello, ${this.name}`); // 'this' refers to the 'user' object, so this will log "Hello, Priyanshu".
        console.log(this); // This will log the 'user' object itself, as 'this' refers to the object that is calling the method.
    }
}
user.greet() // This will call the 'greet' method of the 'user' object, which will log "Hello, Priyanshu".
user.name = "Rohit"; // This will change the 'name' property of the 'user' object to "Rohit".
user.greet() // This will call the 'greet' method again, and now it will log "Hello, Rohit" because the 'name' property has been updated.
console.log(this); // In the global scope, 'this' refers to the global object (window in browsers), so this will log the global object.

// function eg(){
//     console.log(this)
// }
// eg(); // This will log the global object, as 'this' in a regular function refers to the global object when called in the global scope.

//Arrow functions: They are a more concise syntax for writing functions in JavaScript. They do not have their own 'this' context, and instead, they inherit 'this' from the surrounding scope.

const arrowGreet = () => { // This is an arrow function assigned to the 'arrowGreet' variable.
    console.log(`Hello, ${this.name}`); // In an arrow function, 'this' does not refer to the object that is calling the function. Instead, it inherits 'this' from the surrounding scope, which in this case is the global scope. So, this will log "Hello, undefined" because 'name' is not defined in the global scope.
    console.log(this); // This will log the global object, as 'this' in an arrow function refers to the surrounding scope's 'this', which is the global object in this case.
}
arrowGreet(); // This will call the 'arrowGreet' function, which will log "Hello, undefined" and the global object.

const add = (a, b) => {
    return a + b; // This function takes two arguments, 'a' and 'b', and returns their sum.
}
console.log(add(5, 3)); // This will call the 'add' function with 5 and 3 as arguments, and it will log 8, which is the sum of 5 and 3.

const sub = (a, b) => a - b; // This is a more concise arrow function that takes two arguments and returns their difference without needing the 'return' keyword or curly braces.
const giveSentence = (a, b) => ({username: "Priyanshu"}) // This is an arrow function that takes two arguments and returns an object with a 'username' property. The parentheses around the object literal are necessary to distinguish it from the function body.
console.log(sub(5, 3)); // This will call the 'sub' function with 5 and 3 as arguments, and it will log 2, which is the difference of 5 and 3.

//In summary, regular functions have their own 'this' context that refers to the object that is calling the function, while arrow functions do not have their own 'this' and instead inherit it from the surrounding scope. This is an important distinction to keep in mind when working with functions in JavaScript.