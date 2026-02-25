let myName = "   Legion    "
console.log(myName.length)
//console.log(myName.trueLength)

String.prototype.trueLength = function() {
    console.log(`The true length of the string is: ${this.trim().length}`);
}

myName.trueLength()

let myHeroes = ["thor", "ironMan", "captainAmerica"]
let heroPower = {
    thor : "Mjolnir",
    ironMan : "Arc Reactor",
    captainAmerica : "Shield",

    getThorWeapon : function() {
        return this.thor;
    }
}

Object.prototype.Legion = function(){
    console.log("Legion is present in every object");   
}

myHeroes.Legion(); // this will log "Legion is present in every object" because we have added the Legion method to the Object prototype, which means that it is available to all objects in JavaScript, including the myHeroes object.

Array.prototype.heyLegion = function() {
    console.log("Legion says Hi!");
}

myHeroes.heyLegion(); // this will log "Legion says Hi!" because we have added the heyLegion method to the Array prototype, which means that it is available to all arrays in JavaScript, including the myHeroes array.
// heroPower.heyLegion(); // this will give an error because the heyLegion method is only available to arrays, and heroPower is an object, not an array. Therefore, it does not have access to the heyLegion method.

//Inheritance

const User = {
    name : "Legion",
    email : "legion@chai.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

// Teacher.__proto__ = User;
// console.log(Teacher.email)

//modern syntax for inheritance
Object.setPrototypeOf(Teacher, User);
console.log(Teacher.email)