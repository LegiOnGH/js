// function sayMyName(){
//     console.log("My name is Priyanshu");
// }

// sayMyName(); // My name is Priyanshu

// function add(a, b){
//     console.log(a + b)
// }
function add(a, b){
    console.log("Hello from add function")
    return a + b
    console.log("This will never be executed") // this line will never be executed because it is after the return statement
}
const result = add(2,5) // 7
// add("3", 4) // 34
// add(3,"a") // 3a
// add(3, null) // 3
// add(3, undefined) // NaN

console.log("Result: ", result); // Result: 7

function loginMsg(username){ //(username = "Guest") can also be used to set a default value for the username parameter in case it is not provided when the function is called. This way, if the user does not enter a username, it will default to "Guest" instead of being undefined.
    if(username === undefined){ //if(!username) can also be used but it will also check for empty string, null, 0, false etc. which may not be the intended behavior in this case.
        console.log("Please enter your username")
        return
    }  
    return `Welcome, ${username}! You have successfully logged in.`
}

//console.log(loginMsg("Priyanshu")) // Welcome, Priyanshu! You have successfully logged in.
//console.log(loginMsg()) // Welcome, undefined! You have successfully logged in. // this is because we did not pass any argument to the function, so the username parameter is undefined.
console.log(loginMsg()) // Please enter your username

function calculateCartPrice(...prices){ // the ... operator is called the rest operator. It allows us to pass an arbitrary number of arguments to a function and it will be treated as an array inside the function.
    let totalPrice = 0;
    for(let price of prices){
        totalPrice += price
    }
    return totalPrice
}

console.log(calculateCartPrice(10, 20, 30)) // 60

const user = {
    name: "Priyanshu",
    age: 21
}

function handleObject(anyobject){
    console.log(`Name: ${anyobject.name}, Age: ${anyobject.age}`)
}
//handleObject(user) // Name: Priyanshu, Age: 21  
handleObject({name: "Shivay", age: 22}) // Name: Shivay, Age: 22 // we can also pass an object literal directly to the function without having to create a separate variable for it.

const myArr = [1, 2, 3, 4, 5]

function returnSecondValue(arr){
    return arr[1] // this will return the second value of the array which is 2
}

console.log(returnSecondValue(myArr)) // 2

