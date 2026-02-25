class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(newEmail){
        this._email = newEmail;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(newPassword){
        this._password = newPassword;
    }
}

const legion = new User('legion@chai.com','chaiTea')
console.log(legion.email)
console.log(legion.password)