function setUserName(user) {
    this.username = user;
    console.log("called")
}

function createUser(username, email, password) {
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const userOne = new createUser('Legion', 'legion@chai.com','chaiTea')
console.log(userOne)
