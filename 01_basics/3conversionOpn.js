//let score = "33abc" //gives NaN because "33abc" cannot be converted to a number
// let score = null //gives 0 because null is converted to 0 when using Number constructor
//let score //gives undefined because score is declared but not assigned any value, so it is undefined and when we try to convert undefined to number it gives NaN
// let score = true //gives 1 because true is converted to 1 when using Number constructor, and false is converted to 0
//let score = Infinity //gives Infinity because Infinity is a special numeric value that represents positive infinity, and it is not affected by the Number constructor
// let score = "33" //gives 33 because "33" can be converted to a number, and it is converted to 33 when using Number constructor

// console.log(typeof score) //string
// console.log(typeof(score)) //string

// let numScore = Number(score) //explicit conversion using Number constructor
// console.log(numScore) //33
// console.log(typeof numScore) //number

// let isLoggedIn =1
//let isLoggedIn = "" //gives false because empty string is a falsy value, and it is converted to false when using Boolean constructor
// let isLoggedIn = "hii" //gives true because non-empty string is a truthy value, and it is converted to true when using Boolean constructor
// let booleanLoggedIn = Boolean(isLoggedIn) //explicit conversion using Boolean constructor
// console.log(booleanLoggedIn) //true because 1 is a truthy value, and it is converted to true when using Boolean constructor
// console.log(typeof booleanLoggedIn) //boolean

// let num =  33
// let strNum = String(num) //explicit conversion using String constructor
// console.log(strNum) //33
// console.log(typeof strNum) //string

// *****************************Operations*****************************

// let value = 3
// let negValue = -value //negation operator
// console.log(negValue) //-3
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2) //modulus operator gives the remainder of the division
// console.log(2**3) //exponentiation operator gives the result of raising the first operand to the power of the second operand, in this case 2 raised to the power of 3 which is 8

// let str1 = "Hello"
// let str2 = "World"
// let concatenatedStr = str1 +" "+ str2 //concatenation operator
// console.log(concatenatedStr) //Hello World

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+3) //left to right evaluation, first "1"+2 gives "12" and then "12"+3 gives "123"
// console.log(1+2+"3") //first 1+2 gives 3 and then 3+"3" gives "33"

//console.log(true+) // gives SyntaxError because true is a boolean value and it cannot be used with the + operator without being converted to a number first. To fix this, we can use the Number constructor to convert true to 1 before using the + operator, like this: console.log(Number(true) + 1) which will give 2.
console.log(+"") //gives 0 because empty string is converted to 0 when using the + operator for unary plus, which is a shorthand for Number constructor. So +" " is equivalent to Number(" ") which gives 0.

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //right to left evaluation, first 2+2 gives 4 and then num3 is assigned the value of 4, then num2 is assigned the value of num3 which is 4, and then num1 is assigned the value of num2 which is 4   

let gamecounter = 100
gamecounter++ //postfix increment operator, first returns the value of gamecounter which is 100 and then increments it to 101
console.log(++gamecounter) //102 because prefix increment operator, first increments the value of gamecounter to 102 and then returns the value of gamecounter which is 102
console.log(gamecounter) //102 because gamecounter was incremented in the previous line and it retains its value