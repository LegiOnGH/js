// const user = {
//     username : 'Legion',
//     loginCount : 12,
//     isLoggedIn : true,

//     getUserDetails : function() {
//         //console.log("Got user details from database");
//         //console.log(`Username : ${this.username}`)
//         console.log(this);

// }
// }
// const user2 = {
//     username : 'Shizu',
//     loginCount : 21,
//     isLoggedIn : true,

//     getUserDetails : function() {
//        console.log(`Username : ${this.username}`)

// }
// }
// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this);

//const promiseOne = new Promise(); // new keyword is used to create an instance of a class or constructor function. In this case, we are creating an instance of the Promise class.
//const Date = new Date(); // same as above, we are creating an instance of the Date class. The Date class is a built-in JavaScript class that provides methods for working with dates and times.

function User(userName, loginCount, isLoggedIn) {
    this.username = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function (){
        console.log(`Welcome, ${this.username}`)
    }

    //return this; // this keyword refers to the current instance of the User object that is being created. By returning this, we are allowing the function to be used as a constructor function, which can be called with the new keyword to create new instances of the User object. Not needed to return this explicitly, as it is done implicitly when using the new keyword.
}

const userOne = new User('Legion', 12, true); // we are creating a new instance of the User object using the new keyword and passing in the required parameters. This will call the User function and create a new object with the specified properties.
const userTwo = new User('Shizu', 21, false); // same as above, we are creating another instance of the User object with different properties.
console.log(userOne.constructor); // this will log the constructor function of the userOne object, which is the User function.
//console.log(userTwo)