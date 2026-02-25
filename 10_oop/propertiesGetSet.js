function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(newEmail){
            this._email = newEmail;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(newPassword){
            this._password = newPassword;
        }
    });
}

const legion = new User('legion@chai.com','chaiTea')
console.log(legion.email)
console.log(legion.password)