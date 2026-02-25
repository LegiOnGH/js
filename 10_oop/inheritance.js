class User{
    constructor(userName) {
        this.username = userName;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(userName, email, password) {
        super(userName); // super keyword is used to call the constructor of the parent class, in this case, the User class. It allows us to initialize the properties of the parent class in the child class.
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`${this.username} added a course`)
    }
}

const tOne = new Teacher('Legion','legion@teacher.com','teacher123')
tOne.logMe()
tOne.addCourse()

const uOne = new User('Shizu');
uOne.logMe()
//uOne.addCourse() // this will throw an error because the addCourse method is not defined in the User class, it is only defined in the Teacher class.

console.log(tOne === uOne) // false, because tOne and uOne are two different objects in memory, even though they have the same username property.
console.log(tOne instanceof Teacher) // true, because tOne is an instance of the Teacher class.
console.log(tOne instanceof User) // true, because Teacher class inherits from User class, so tOne is also an instance of the User class.
console.log(uOne instanceof Teacher) // false, because uOne is an instance of the User class, not the Teacher class.
console.log(uOne instanceof User) // true, because uOne is an instance of the User class.