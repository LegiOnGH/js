//ES6

class User{
    constructor(userName, email, password) {
        this.username = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}@abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const legion = new User('Legion', 'legion@chai.com', 'chaiTea');
console.log(legion.encryptPassword())
console.log(legion.changeUsername())

//behind the scenes, the above code is equivalent to the following code using constructor functions and prototypes:

// function User(userName, email, password) {
//     this.username = userName;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function() {
//     return `${this.password}@abc`;
// }

// User.prototype.changeUsername = function() {
//     return `${this.username.toUpperCase()}`;
// }

// const legion1 = new User('Legion', 'legion@chai.com', 'chaiTea');
// console.log(legion1.encryptPassword())
// console.log(legion1.changeUsername())    