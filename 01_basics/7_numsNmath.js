const score = 400
console.log(score) //400

const balance = new Number(1000) //creating a Number object using the Number constructor, it is not recommended to use Number constructor to create numbers because it creates an object and can lead to unexpected behavior when performing operations on it, it is better to use primitive number literals like 1000 instead of new Number(1000)
console.log(balance) // [Number: 1000] - this is a Number object, not a primitive number value

//When we create a number using the Number constructor, it creates a Number object instead of a primitive number value. This means that when we use the typeof operator on a number created with the Number constructor, it will return "object" instead of "number". 
// For example, if we check the type of balance using typeof balance, it will return "object" instead of "number". 
// This is because balance is an instance of the Number object, which is a wrapper around the primitive number value. 
// Therefore, it is generally recommended to use primitive number literals (e.g., const balance = 1000) instead of the Number constructor to create numbers in JavaScript, as it creates a primitive number value that is more efficient and easier to work with.

console.log(balance + 500) // Output: 1500 - when we perform arithmetic operations on a Number object, it is automatically converted to a primitive number value before the operation is performed. In this case, balance is converted to the primitive number value 1000 before adding 500, resulting in 1500.
//  However, it is still recommended to use primitive number literals instead of the Number constructor to avoid any confusion or unexpected behavior when performing operations on numbers in JavaScript.

console.log(balance.toString()) // Output: "1000" - the toString() method is used to convert a Number object to a string representation of the number. In this case, balance is converted to the string "1000" when we call balance.toString().
console.log(balance.toFixed2) // Output: "1000.00" - the toFixed() method is used to format a number with a specified number of decimal places. In this case, balance is formatted to have 2 decimal places, resulting in the string "1000.00". Note that toFixed() returns a string representation of the number, not a number value.

const pi = 3.14159
console.log(pi.toFixed(2)) // Output: "3.14" - the toFixed() method is used to format the number pi to have 2 decimal places, resulting in the string "3.14". Again, note that toFixed() returns a string representation of the number, not a number value.
console.log(pi.toPrecision(3)) // Output: "3.14" - the toPrecision() method is used to format a number to a specified length, including both the integer and decimal parts. In this case, pi is formatted to have a total of 3 significant digits, resulting in the string "3.14". Note that toPrecision() also returns a string representation of the number, not a number value.      

const newnum = 1000000
console.log(newnum.toLocaleString('en-IN')) // Output: "10,00,000" - the toLocaleString() method is used to convert a number to a string representation that is formatted according to the locale settings of the user's environment. In this case, newnum is formatted with commas as thousands separators, resulting in the string "1,000,000". Note that the output may vary depending on the locale settings of the user's environment.

//******************************************MATHS*****************************************
console.log(Math) // Output: [object Math] - the Math object is a built-in object in JavaScript that provides properties and methods for performing mathematical operations. It is not a constructor, so we cannot create instances of it. Instead, we can use its properties and methods directly to perform various mathematical calculations in our code.
console.log(Math.abs(-5)) // Output: 5 - the abs() method is used to return the absolute value of a number. In this case, it returns 5 because the absolute value of -5 is 5.
console.log(Math.round(3.7)) // Output: 4 - the round() method is used to round a number to the nearest integer. In this case, it rounds 3.7 up to 4 because it is closer to 4 than to 3.
console.log(Math.floor(3.7)) // Output: 3 - the floor() method is used to round a number down to the nearest integer. In this case, it rounds 3.7 down to 3 because it is the largest integer less than or equal to 3.7.
console.log(Math.ceil(3.2)) // Output: 4 - the ceil() method is used to round a number up to the nearest integer. In this case, it rounds 3.2 up to 4 because it is the smallest integer greater than or equal to 3.2.
console.log(Math.max(1, 5, 3, 9, 2)) // Output: 9 - the max() method is used to return the largest of zero or more numbers. In this case, it returns 9 because it is the largest number among the arguments provided.
console.log(Math.min(1, 5, 3, 9, 2)) // Output: 1 - the min() method is used to return the smallest of zero or more numbers. In this case, it returns 1 because it is the smallest number among the arguments provided.
console.log(Math.random()) // Output: a random number between 0 (inclusive) and 1 (exclusive) - the random() method is used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive). Each time we call Math.random(), it will return a different random number within this range.

console.log(Math.floor(Math.random() * 10)+1) // Output: a random integer between 1 and 10 (inclusive) - this expression generates a random integer between 1 and 10 by first generating a random floating-point number between 0 and 1 using Math.random(), then multiplying it by 10 to scale it to the range of 0 to 10, and finally using Math.floor() to round it down to the nearest integer. Adding 1 at the end ensures that the result is between 1 and 10 instead of between 0 and 9. Each time we run this expression, it will return a different random integer within this range.

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Output: a random integer between 10 and 20 (inclusive) - this expression generates a random integer between 10 and 20 by first generating a random floating-point number between 0 and 1 using Math.random(), then multiplying it by the range of numbers (max - min + 1) to scale it to the desired range, and finally using Math.floor() to round it down to the nearest integer. Adding min at the end ensures that the result is between 10 and 20 instead of between 0 and (max - min). Each time we run this expression, it will return a different random integer within this range.