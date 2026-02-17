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

