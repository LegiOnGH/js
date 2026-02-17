"use strict" //treat all the code as modern

//Data types in JavaScript
//1. Primitive data types: string, number, boolean, null, undefined, symbol
//2. Non-primitive data types: object, array, function

//alert("Hello World") //we are using node js so we cannot use alert, it is used in browser js

//number range: -(2^53 - 1) to (2^53 - 1)
let age = 21
let price = 99.99
console.log(age, price)

//bigint range: -(2^63 - 1) to (2^63 - 1) used for very large numbers
let bigInt = 1234567890123456789012345678901234567890n
console.log(bigInt)

//string represented by single quotes, double quotes or backticks
//backticks are used for template literals and multi-line strings
//template literals allow us to embed expressions inside strings using ${expression}
//single quotes and double quotes are used for regular strings

let name1 = 'Priyanshu'
let name2 = "Priyanshu"
let name3 = `Priyanshu ${age}` //using template literals to embed age variable inside the string
console.log(name1, name2, name3)

//boolean can be either true or false
let isStudent = true
let isTeacher = false
console.log(isStudent, isTeacher)

//null represents the intentional absence of any object value
//null is object in JavaScript, but it is actually a primitive data type
//it is a javascript bug that typeof null returns "object"
let emptyValue = null
console.log(emptyValue)

//undefined represents a variable that has been declared but not assigned a value
let uninitializedVariable
console.log(uninitializedVariable)

//symbol is a unique and immutable primitive value that can be used as a key for object properties
let sym1 = Symbol("sym")
let sym2 = Symbol("sym")
console.log(sym1 === sym2) //false because each symbol is unique

//object is a collection of key-value pairs
let person = {
    name: "Priyanshu",
    age: 21,
    isStudent: true
}
console.log(person)

//array is a special type of object that is used to store multiple values in a single variable
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)

//function is a block of code that can be executed when called
function greet(name) {
    return `Hello, ${name}!`
}
console.log(greet("Priyanshu")) 

//typeof operator is used to check the data type of a variable
console.log(typeof age) //number
console.log(typeof name1) //string
console.log(typeof isStudent) //boolean
console.log(typeof emptyValue) //object (this is a known bug in JavaScript, null is actually a primitive data type)
console.log(typeof uninitializedVariable) //undefined
console.log(typeof sym1) //symbol
console.log(typeof person) //object
console.log(typeof numbers) //object (arrays are also objects in JavaScript)
console.log(typeof greet) //function    