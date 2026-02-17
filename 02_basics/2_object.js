// Object
//Singleton object is an object that is created only once and can be accessed globally. It is often used to store data or functions that need to be shared across different parts of an application.

// Example of a singleton object
// const Singleton = (function() {
//   let instance;

//   function createInstance() {
//     const object = new Object("I am the instance");
//     return object;
//   }

//   return {
//     getInstance: function() {
//       if (!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     }
//   };
// })();

// const instance1 = Singleton.getInstance();
// const instance2 = Singleton.getInstance();

// console.log(instance1 === instance2); // tru


//object literals 
const mykey = Symbol("mykey");
const user = {  name: "Priyanshu",
  age: 21,
  isAdmin: true,
  courses: ["html", "css", "js"],
  "job role": "intern",
  wife: null,
 // mykey: "key1"
  [mykey]: "key1"
};

console.log(user.name); // John
console.log(user["name"]); // John
console.log(user.age); // 30
console.log(user.isAdmin); // true
console.log(user.courses); // ["html", "css", "js"]
console.log(user.wife); // null
console.log(user["job role"]); // intern //can access properties with spaces using bracket notation
//console.log(typeof user.mykey); // string
console.log(user[mykey]); // key1 // can access symbol properties using bracket notation
console.log(typeof user.mykey); // undefined // cannot access symbol properties using dot notation
console.log(typeof user[mykey]); // string

user.age = 22; // update age property
console.log(user.age); // 22

user.isAdmin = false; // update isAdmin property
console.log(user.isAdmin); // false

user.courses.push("react"); // add a new course to the courses array
console.log(user.courses); // ["html", "css", "js", "react"]
//Object.freeze(user); // freeze the user object to prevent any modifications
//delete user.wife; // cannot delete wife property because the object is frozen
//console.log(user.wife); // null

user.greet = function() { // add a new method to the user object
    console.log(`Hello, my name is ${this.name}`); // this refers to the user object
    }
user.greet(); // Hello, my name is Priyanshu

//Singelton object
//const obj = new Object()
const obj = {}

obj.id = 1;
obj.name = "Priyanshu";
obj.age = 21;

//console.log(obj); // { id: 1, name: 'Priyanshu', age: 21 }

const user1 = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Priyanshu",
            lastname: "Katwal"
        }
    }
}

console.log(user1.fullname?.userfullname.firstname); // Priyanshu // the ? operator is called the optional chaining operator. It allows us to access nested properties of an object without having to check if each property exists. If any property in the chain is undefined or null, the expression will short-circuit and return undefined instead of throwing an error.
console.log(user1.fullname?.userfullname.lastname); // Katwal

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

//const mergedObj = {obj1, obj2} // merge two objects using object literal syntax //note that this will create a new object with two properties obj1 and obj2, which will contain the original objects as their values. This is not the same as merging the two objects into a single object.
//console.log(mergedObj); // { obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e', '6': 'f' } }

//const mergedObj = Object.assign({}, obj1, obj2) // merge two objects using Object.assign()
//console.log(mergedObj); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const mergedObj = {...obj1, ...obj2} // merge two objects using the spread operator
console.log(mergedObj); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users = [
    {
        id: 1,
        name: "Priyanshu"
    },
    {
        id: 2,
        name: "John"
    },
    {
        id: 3,
        name: "Jane"
    }
]
console.log(users[0].name); // Priyanshu

console.log(Object.keys(user)); // [ 'name', 'age', 'isAdmin', 'courses', 'job role', 'wife' ] // get all the keys of the user object
console.log(Object.values(user)); // [ 'Priyanshu', 22, false, [ 'html', 'css', 'js', 'react' ], 'intern', null ] // get all the values of the user object
console.log(Object.entries(user)); // [ [ 'name', 'Priyanshu' ], [ 'age', 22 ], [ 'isAdmin', false ], [ 'courses', [Array] ], [ 'job role', 'intern' ], [ 'wife', null ] ] // get all the key-value pairs of the user object as an array of arrays      
console.log(Object.hasOwnProperty('name')); // true // check if the user object has a property called name

//destructuring objects

const course = {
    title: "JavaScript",
    instructor: "Legion",
    duration: "3 hours",
    level: "beginner"
}

const {instructor} = course; // destructure the instructor property from the course object
console.log(instructor); // Legion

const {title, duration: time} = course; // destructure the title and duration properties from the course object // rename the duration property to time
console.log(title); // JavaScript
console.log(time); // 3 hours
