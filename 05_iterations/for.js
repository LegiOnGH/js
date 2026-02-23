// for loop 

for(let i = 0; i < 5; i++) {
    console.log(i);
}

// for loop with break statement    
for(let i = 0; i < 5; i++) {
    if(i === 3) {
        break; // exit the loop when i is 3
    }
    console.log(i);
}

// for loop with continue statement    
for(let i = 0; i < 5; i++) {
    if(i === 3) {
        continue; // skip the rest of the loop when i is 3
    }
    console.log(i);
}   

// for...of loop (iterating over an array)
const array = ['a', 'b', 'c'];
for(const element of array) {
    console.log(element);
} 

//for loop for array with index
const array1 = ['x', 'y', 'z'];
for(let i = 0; i < array1.length; i++) {
    console.log(`Index: ${i}, Element: ${array1[i]}`);
}

// for...in loop (iterating over an object)
const object = {name: 'Alice', age: 30};
for(const key in object) {
    console.log(`${key}: ${object[key]}`);
}   

//for each loop (iterating over an array)
const array2 = [1, 2, 3];
array2.forEach(element => {
    console.log(element);
}); 

// for ...in loop for iterating over a string
const string = "Hello";
for(const index in string) {
    console.log(`Index: ${index}, Character: ${string[index]}`);
}  


// nested for loop
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(`i * j = ${(i+1)*(j+1)}`);
    }
}   

//for ...of loop for iterating over an array of objects
const arrayOfObjects = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];
for(const obj of arrayOfObjects) {
    console.log(obj.name);
}   

//Map
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');
for(const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

//Set
const set = new Set([1, 2, 3]);
for(const value of set) {
    console.log(value);
}   
