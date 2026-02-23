//falsy values
// 1. false
// 2. 0, -0, 0n (BigInt zero)
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN

//truthy values
// 1. true
// 2. any non-zero number (positive or negative)
// 3. any non-empty string including "0", "false", "null", "undefined" and whitespace characters like " ", "\n", "\t"
// 4. any object (including arrays and functions) empty or not

if(false){
    console.log("This will never be executed because false is a falsy value")
}
else{
    console.log("This will always be executed because the condition is falsy")
}

if(0){
    console.log("This will never be executed because 0 is a falsy value")
}
else{
    console.log("This will always be executed because the condition is falsy")
}

if(-0){
    console.log("This will never be executed because -0 is a falsy value")
}
else{
    console.log("This will always be executed because the condition is falsy")
}

if(0n){
    console.log("This will never be executed because 0n is a falsy value")
}
else{
    console.log("This will always be executed because the condition is falsy")
}

if(""){
    connsole.log("This will never be executed because an empty string is a falsy value")
}
else{
    console.log("This will always be executed because the condition is falsy")
}

if(null){
    console.log("This will never be executed because null is a falsy value")
}
else{
    console.log("This will always be executed because the condition is falsy")
}

if(undefined){
    console.log("This will never be executed because undefined is a falsy value")
}
else{
    console.log("This will always be executed because the condition is falsy")
}

if(NaN){
    console.log("This will never be executed because NaN is a falsy value")
}       
else{
    console.log("This will always be executed because the condition is falsy")
}   

if(true){
    console.log("This will always be executed because true is a truthy value")
}
else{
    console.log("This will never be executed because the condition is truthy")
}

if(1){
    console.log("This will always be executed because 1 is a truthy value")
}
else{
    console.log("This will never be executed because the condition is truthy")
}

if(-1){
    console.log("This will always be executed because -1 is a truthy value")
}
else{
    console.log("This will never be executed because the condition is truthy")
}

if("0"){
    console.log("This will always be executed because a non-empty string is a truthy value")
}
else{
    console.log("This will never be executed because the condition is truthy")
}

if({}){
    console.log("This will always be executed because an empty object is a truthy value")
}
else{
    console.log("This will never be executed because the condition is truthy")
}

if([]){
    console.log("This will always be executed because an empty array is a truthy value")
}
else{
    console.log("This will never be executed because the condition is truthy")
}

if(function(){}){
    console.log("This will always be executed because a function is a truthy value")
}
else{
    console.log("This will never be executed because the condition is truthy")
}               

//nullish coalescing operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand. It is often used to provide a default value for a variable that may be null or undefined.

const username = null
const defaultUsername = "Guest"

const displayName = username ?? defaultUsername
console.log(displayName) // Guest

const userInput = ""
const defaultInput = "Default input"

const finalInput = userInput ?? defaultInput
console.log(finalInput) // "" because an empty string is a truthy value, so the nullish coalescing operator does not return the default value.  

//ternary operator is a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. It is often used as a shorthand for an if-else statement.

const age = 18
const canVote = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote"
console.log(canVote) // You are eligible to vote

const isLoggedIn = false
const welcomeMessage = isLoggedIn ? "Welcome back, user!" : "Please log in to continue"
console.log(welcomeMessage) // Please log in to continue

