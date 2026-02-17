//Primitive Data Types : string, number, boolean, null, undefined, symbol, bigint
// Primitives are immutable, which means their values cannot be changed once they are created. 
// When we perform operations on primitive values, a new value is created instead of modifying the original value.
//  For example, when we concatenate two strings, a new string is created instead of modifying the original strings. 
// Similarly, when we perform arithmetic operations on numbers, a new number is created instead of modifying the original numbers. 
// This immutability of primitive data types is an important aspect of JavaScript and helps to prevent unintended side effects in our code.

//Non-primitive Data Types : object, array, function
// Non-primitives are mutable, which means their values can be changed after they are created. 
// When we perform operations on non-primitive values, the original value is modified instead of creating a new value. 
// For example, when we push a new element to an array, the original array is modified instead of creating a new array. 
// Similarly, when we modify the properties of an object, the original object is modified instead of creating a new object. 
// This mutability of non-primitive data types allows us to work with complex data structures and perform various operations on them in JavaScript.
//Also called reference data types because they are accessed by reference, which means that when we assign a non-primitive value to a variable, we are actually assigning a reference to the value in memory, rather than the value itself. 
// This is why when we assign a non-primitive value to another variable, both variables point to the same value in memory, and changes made through one variable will affect the other variable as well. 
// For example, if we have an object assigned to a variable and we assign that variable to another variable, both variables will reference the same object in memory. 
// If we modify the object through one of the variables, the changes will be reflected when we access the object through the other variable as well. 
// This behavior is important to understand when working with non-primitive data types in JavaScript, as it can lead to unintended side effects if not handled carefully.

//JavaScript is a dynamically typed language, which means that variables can hold values of any data type and the data type of a variable can change at runtime. 
// This allows for flexibility in programming, but it also means that we need to be careful when working with variables and data types to avoid unexpected behavior. 
// For example, if we assign a string value to a variable and then later assign a number value to the same variable, the data type of the variable will change from string to number. 
// This can lead to issues if we try to perform operations on the variable that are not compatible with its current data type. 
// Therefore, it is important to keep track of the data types of our variables and ensure that we are using them correctly in our code.

// *****************************MEMORY************************

//Stack and Heap

//Stack memory is a region of memory that is used for storing simple values, such as primitive data types.

// Primitive data types are stored in the stack memory, which is a region of memory that is used for storing simple values. 
// When we declare a variable and assign a primitive value to it, the value is stored directly in the stack memory. 
// This allows for fast access to the value and efficient memory management, as the stack memory is automatically managed by the JavaScript engine.

//Heap memory, on the other hand, is a region of memory that is used for storing complex objects, such as non-primitive data types.

// Non-primitive data types, on the other hand, are stored in the heap memory, which is a region of memory that is used for storing complex objects. 
// When we declare a variable and assign a non-primitive value to it, a reference to the value is stored in the stack memory, while the actual value is stored in the heap memory. 
// This allows for more flexible and dynamic data structures, but it also means that accessing non-primitive values can be slower than accessing primitive values due to the need to follow references in memory. 
// Additionally, since non-primitive values are stored in the heap memory, they require manual memory management, which can lead to issues such as memory leaks if not handled properly. 
// Therefore, it is important to understand the differences in memory management between primitive and non-primitive data types in JavaScript to write efficient and effective code.

let name = "Legion" // stored in stack memory
let anotherName = name // anotherName is a copy of the value stored in stack memory

console.log(name) // Output: "Legion"
console.log(anotherName) // Output: "Legion"

name = "New Legion" // name is now assigned a new value, but anotherName still holds the original value

console.log(name) // Output: "New Legion"
console.log(anotherName) // Output: "Legion"

let user = { name: "Legion" , age: 21} // stored in heap memory, user is a reference to the object in heap memory
let anotherUser = user // anotherUser is a reference to the same object in heap memory

console.log(user) // Output: { name: "Legion", age: 21 }
console.log(anotherUser) // Output: { name: "Legion", age: 21 }

user.name = "New Legion" // Modifying the name property of the user object

console.log(user) // Output: { name: "New Legion", age: 21 }
console.log(anotherUser) // Output: { name: "New Legion", age: 21 } - anotherUser reflects the change because it references the same object in heap memory