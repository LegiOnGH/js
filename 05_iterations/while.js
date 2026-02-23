//while loop

let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}

// while loop with break statement
let j = 0;
while(j < 5) {
    if(j === 3) {
        break; // exit the loop when j is 3
    }
    console.log(j);
    j++;
}

// while loop with continue statement
let k = 0;
while(k < 5) {
    if(k === 3) {
        k++; // increment k before continue to avoid infinite loop
        continue; // skip the rest of the loop when k is 3
    }
    console.log(k);
    k++;
}

// while loop for iterating over an array
const array = ['a', 'b', 'c'];
let index = 0;
while(index < array.length) {
    console.log(array[index]);
    index++;
}

// while loop for iterating over an object
const object = {name: 'Alice', age: 30};
const keys = Object.keys(object);
let keyIndex = 0;
while(keyIndex < keys.length) {
    const key = keys[keyIndex];
    console.log(`${key}: ${object[key]}`);
    keyIndex++;
}

// while loop for iterating over a string
const string = "Hello";
let charIndex = 0;
while(charIndex < string.length) {
    console.log(`Index: ${charIndex}, Character: ${string[charIndex]}`);
    charIndex++;
}

// nested while loop
let m = 0;
while(m < 3) {
    let n = 0;
    while(n < 3) {
        console.log(`m * n = ${(m+1)*(n+1)}`);
        n++;
    }
    m++;
}       

//do while loop

let p = 0;
do {
    console.log(p);
    p++;
} while(p < 5);

// do while loop with break statement
let q = 0;
do {
    if(q === 3) {
        break; // exit the loop when q is 3
    }
    console.log(q);
    q++;
} while(q < 5);

// do while loop with continue statement
let r = 0;
do {
    if(r === 3) {
        r++; // increment r before continue to avoid infinite loop
        continue; // skip the rest of the loop when r is 3
    }
    console.log(r);
    r++;
} while(r < 5);

// do while loop for iterating over an array
const array2 = ['x', 'y', 'z'];
let arrayIndex = 0;
do {
    console.log(array2[arrayIndex]);
    arrayIndex++;
} while(arrayIndex < array2.length);  

// do while loop for iterating over an object
const object2 = {name: 'Bob', age: 25};
const objectKeys = Object.keys(object2);
let objectKeyIndex = 0;
do {
    const key = objectKeys[objectKeyIndex];
    console.log(`${key}: ${object2[key]}`);
    objectKeyIndex++;
} while(objectKeyIndex < objectKeys.length);

// do while loop for iterating over a string
const string2 = "World";
let stringIndex = 0;
do {
    console.log(`Index: ${stringIndex}, Character: ${string2[stringIndex]}`);
    stringIndex++;
} while(stringIndex < string2.length);

// nested do while loop
let s = 0;
do {
    let t = 0;
    do {
        console.log(`s * t = ${(s+1)*(t+1)}`);
        t++;
    } while(t < 3);
    s++;
} while(s < 3); 