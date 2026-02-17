//Immediately Invoked Function Expression (IIFE)

//An IIFE is a JavaScript function that runs as soon as it is defined. It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts:

//1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

(function print() { //named IIFE
    console.log("This is an IIFE"); // This will log "This is an IIFE" to the console immediately when this code is executed.
})();
(() => {
    console.log("This is an IIFE using an arrow function"); // This will log "This is an IIFE using an arrow function" to the console immediately when this code is executed.
})();
((name) => {
    console.log(`Hello, ${name}`); // This will log "Hello, Priyanshu" to the console immediately when this code is executed, as the argument "Priyanshu" is passed to the IIFE.
})("Priyanshu");

//IIFEs are often used to create a new scope and avoid polluting the global namespace, especially in older JavaScript code before the introduction of modules. They can also be used to execute code that needs to run immediately without waiting for any events or user interactions.


