//Scopes in JavaScript

//Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
//Function Scope: Variables declared within a function are in the function scope and can only be accessed within that function.
//Block Scope: Variables declared with 'let' or 'const' within a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.

let a = 100; // 'a' is declared in the global scope and can be accessed anywhere in the code.
var b = 200; // 'b' is declared in the global scope and can be accessed anywhere in the code.
const c = 300; // 'c' is declared in the global scope and can be accessed anywhere in the code.

if(true){
    let a = 10; // 'a' is declared with 'let', which has block scope, so it is only accessible within this block.
    var b = 20; // 'b' is redeclared here, but since 'var' does not have block scope, it will overwrite the global 'b'. So, 'b' will now be 20 in the global scope as well.
    const c = 30; // 'c' is declared with 'const', which also has block scope, so it is only accessible within this block.
    console.log(a); // This will log 10, as 'a' is accessible within this block.
    console.log(b); // This will log 20, as 'b' has been redeclared and overwritten in the global scope.
    console.log(c); // This will log 30, as 'c' is accessible within this block.
}

console.log(a); // This will log 100, as 'a' is accessible in the global scope.
console.log(b); // This will log 20, as 'b' has been overwritten in the global scope.
console.log(c); // This will log 300, as 'c' is accessible in the global scope.

//Nested Scopes: Functions can be nested within other functions, creating nested scopes. Variables declared in an outer function are accessible in the inner function, but not vice versa.

function outerFunction() {
    let outerVariable = 'I am from the outer function';
    
    function innerFunction() {
        let innerVariable = 'I am from the inner function';
        console.log(outerVariable); // This will log 'I am from the outer function', as 'outerVariable' is accessible in the inner function.
        console.log(innerVariable); // This will log 'I am from the inner function', as 'innerVariable' is accessible in the inner function.
    }
    
    innerFunction(); // This will call the inner function, which will log both 'outerVariable' and 'innerVariable'.
    //console.log(innerVariable); // This will throw an error, as 'innerVariable' is not accessible in the outer function.
}

outerFunction();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Variable Shadowing: When a variable declared in an inner scope has the same name as a variable in an outer scope, the inner variable shadows the outer variable within its scope.

let x = 50; // 'x' is declared in the global scope.

function shadowingExample() {
    let x = 10; // This 'x' shadows the global 'x' within this function.
    console.log(x); // This will log 10, as the inner 'x' is accessible within this function.
}

shadowingExample(); // This will call the function, which will log 10.
console.log(x); // This will log 50, as the global 'x' is still accessible outside the function.    

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
addOne(5); // This will call the addOne function with 5 as an argument, and it will return 6. 
//this works because function declarations are hoisted, meaning they are moved to the top of their scope before code execution.

function addOne(num){ ///function
    return num + 1; // This function takes a number as an argument and returns that number plus one.
}

//addTwo(5); // this will give error because addTwo is a function expression and is not hoisted like function declarations. It can only be called after it has been defined.
const addTwo = function(num){ //expression function in variable form
    return num + 2; // This function takes a number as an argument and returns that number plus two.
}
addTwo(5); // This will call the addTwo function with 5 as an argument, and it will return 7.
//this will work because addTwo is defined before it is called, so it can be accessed and executed without any issues.