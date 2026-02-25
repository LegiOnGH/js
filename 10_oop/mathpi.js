const descriptor =Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(Math.PI)
// Math.PI = 3.14;
// console.log(Math.PI)
console.log(descriptor)

const myNewObj = {
    name: "chai Tea",
    price: 100,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai Lelo")
    }
}
console.log(Object.getOwnPropertyDescriptor(myNewObj, 'name'))
Object.defineProperty(myNewObj, 'name', {
    writable: false,
    enumerable: false
})
myNewObj.name = "Green Tea";
console.log(Object.getOwnPropertyDescriptor(myNewObj, 'name'))
console.log(myNewObj.name)
for(let [key, value] of Object.entries(myNewObj)){
    if(typeof value !== 'function'){
    console.log(key, value)
    }
}