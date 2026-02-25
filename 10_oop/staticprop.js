class User{
    constructor(userName) {
        this.username = userName;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createId(){
        return `123${this.username}456`
    }
}

const legion = new User('Legion');
// console.log(legion.createId()) // this will throw an error because createId is a static method and cannot be called on an instance of the User class. Static methods are called on the class itself, not on instances of the class.

class Teacher extends User{
    constructor(userName, email) {
        super(userName);
        this.email = email;
    }
}
const tOne = new Teacher('Legion','legion@teacher.com')
tOne.logMe()
//console.log(tOne.createId()) // this will give error because createId is a static method and cannot be called on an instance of the Teacher class. Static methods are inherited by child classes, but they are not accessible through instances of the child class. To call the static method, we need to call it on the class itself, like this: Teacher.createId() or User.createId().
