//Promises in JavaScript : Promises are a way to handle asynchronous operations in JavaScript. 
// They represent a value that may be available now, or in the future, or never. 
// A promise can be in one of three states: pending, fulfilled, or rejected.
// Pending: The initial state of a promise. It means that the promise is still being processed and has not yet been fulfilled or rejected.
// Fulfilled: The state of a promise when it has been successfully resolved. It means that the operation was completed successfully and the promise has a value.
// Rejected: The state of a promise when it has been rejected. It means that the operation failed and the promise has a reason for the failure.


const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, network calls, file system operations, cryptography, etc
    setTimeout(function() {
        console.log('Async task is completed');
        resolve();
    }, 1000);
})
 promiseOne.then(function() {
    console.log('Promise is consumed');
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2 is completed');
        resolve();
    },1000)
}).then(function() {
    console.log('Promise 2 is consumed');
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({name: 'Legion', age: 21});
    }, 1000)
})
promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: 'Legion', password: 2134});
        } else {
        reject('ERROR: Something went wrong');
        }
    }, 1000)
})
promiseFour.then(function(user){
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log('Promise is either resolved or rejected');
})

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error= false;
        if(!error) {
            resolve({username: 'Legion', password: 2134});
        } else {
            reject('ERROR: JS went wrong');
        }
        
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const user = await promiseFive;
        console.log(user);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('Promise is either resolved or rejected');
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('Fetch operation is completed');
})