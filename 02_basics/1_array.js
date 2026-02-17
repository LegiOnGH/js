//Arrays

const myArr = [1,2,3,4,5] //array literal syntax
console.log(myArr) //[1, 2, 3, 4, 5]

const myArr2 = new Array(1,2,3,4,5) //array constructor syntax
console.log(myArr2) //[1, 2, 3, 4, 5]

//When we create an array using the Array constructor with a single numeric argument (e.g., new Array(5)), it creates an array with that length but does not initialize the elements. This means that the array will have a length of 5 but will contain empty slots (i.e., it will be sparse). 
// For example, if we create an array using new Array(5), it will create an array with a length of 5 but all the elements will be empty slots. If we try to access any of the elements in this array (e.g., myArr[0]), it will return undefined because the elements are not initialized. 
// Therefore, it is generally recommended to use array literal syntax (e.g., const myArr = [1, 2, 3, 4, 5]) instead of the Array constructor when creating arrays in JavaScript, as it creates a fully initialized array with the specified elements.

console.log(myArr[0]) //1 - we can access individual elements of an array using bracket notation and the index of the element (starting from 0)
console.log(myArr.length) //5 - we can access the length property of an array to get the number of elements in the array
console.log(myArr.__proto__) // Output: [] - the __proto__ property of an array points to the Array prototype, which contains methods and properties that can be used with array objects
console.log(myArr.push(6)) // Output: 6 - the push() method is used to add a new element to the end of an array. In this case, it adds the number 6 to the end of the myArr array and returns the new length of the array, which is 6.
console.log(myArr) // Output: [1, 2, 3, 4, 5, 6] - after pushing 6 to the myArr array, it now contains the elements [1, 2, 3, 4, 5, 6]

myArr.unshift(0) // the unshift() method is used to add a new element to the beginning of an array. In this case, it adds the number 0 to the beginning of the myArr array.
console.log(myArr) // Output: [0, 1, 2, 3, 4, 5, 6] - after unshifting 0 to the myArr array, it now contains the elements [0, 1, 2, 3, 4, 5, 6]
//generally unshift is not recommended to use because it is less efficient than push() as it requires shifting all the existing elements in the array to make room for the new element at the beginning of the array, which can be time-consuming for large arrays. Therefore, it is generally recommended to use push() to add elements to the end of an array instead of unshift() to add elements to the beginning of an array in JavaScript.

myArr.pop() // the pop() method is used to remove the last element from an array. In this case, it removes the number 6 from the end of the myArr array.
console.log(myArr) // Output: [0, 1, 2, 3, 4, 5] - after popping the last element from the myArr array, it now contains the elements [0, 1, 2, 3, 4, 5]

myArr.shift() // the shift() method is used to remove the first element from an array. In this case, it removes the number 0 from the beginning of the myArr array.
console.log(myArr) // Output: [1, 2, 3, 4, 5] - after shifting the first element from the myArr array, it now contains the elements [1, 2, 3, 4, 5]
//generally shift is not recommended to use because it is less efficient than pop() as it requires shifting all the existing elements in the array to fill the gap left by the removed element at the beginning of the array, which can be time-consuming for large arrays. Therefore, it is generally recommended to use pop() to remove elements from the end of an array instead of shift() to remove elements from the beginning of an array in JavaScript.

console.log(myArr.includes(7)) // Output: false - the includes() method is used to check if an array contains a specified element and returns true or false accordingly. In this case, it returns false because the number 7 is not found in the myArr array. If the element is found in the array, it will return true. If the element is not found in the array, it will return false.
console.log(myArr.indexOf(9)) // Output: -1 - the indexOf() method is used to find the index of the first occurrence of a specified element in an array. In this case, it returns -1 because the number 9 is not found in the myArr array. If the element is found in the array, it will return the index of the first occurrence of that element. If the element is not found in the array, it will return -1.

const newArr = myArr.join() // the join() method is used to join all the elements of an array into a string, with a specified separator between each element. In this case, it joins the elements of the myArr array into a string with a hyphen ("-") as the separator, resulting in the string "1-2-3-4-5".
console.log(newArr) // Output: "1,2,3,4,5" - after joining the elements of the myArr array with a comma as the separator"
console.log(typeof newArr) // Output: "string" - the join() method returns a string representation of the array, so the type of newArr is "string".

//slice, splice

console.log("A ",myArr)
const myarr1 = myArr.slice(1,3)
console.log(myarr1) // Output: [2, 3] - the slice() method is used to create a new array that contains a portion of the original array. In this case, it creates a new array that contains the elements from index 1 to index 3 (exclusive) of the myArr array, resulting in the array [2, 3]. The original myArr array remains unchanged after using the slice() method.
console.log("B ",myArr) // Output: [1, 2, 3, 4, 5] - the myArr array remains unchanged after using the slice() method, so it still contains the elements [1, 2, 3, 4, 5].
const myarr2 = myArr.splice(1,3)
console.log("C",myArr) // Output: [1, 5] - the splice() method is used to modify an array by removing or replacing existing elements and/or adding new elements in place. In this case, it removes 3 elements starting from index 1 of the myArr array, resulting in the array [1, 5]. The original myArr array is modified after using the splice() method, so it now contains the elements [1, 5].
console.log(myarr2) // Output: [2, 3, 4] - the splice() method is used to modify an array by removing or replacing existing elements and/or adding new elements in place. In this case, it removes 3 elements starting from index 1 of the myArr array, resulting in the array [2, 3, 4]. The original myArr array is modified after using the splice() method, so it now contains the elements [1, 5].


//*********************************************************************
const friends = ["Legion","Shittzu","Mandyalz"]
const enemies = ["Dizii","Guzzie","Suzzie"]
// friends.push(enemies) // Output: - the push() method is used to add a new element to the end of an array. In this case, it adds the enemies array as a single element to the end of the friends array, resulting in the friends array containing 4 elements: ["Legion", "Shittzu", "Mandyalz", ["Dizii", "Guzzie", "Suzzie"]]. The push() method returns the new length of the array after adding the new element, which is 6 in this case because the friends array now contains 6 elements (the original 3 elements plus the new element which is the enemies array).
// console.log(friends) // Output: ["Legion", "Shittzu", "Mandyalz", ["Dizii", "Guzzie", "Suzzie"]] - after pushing the enemies array to the friends array, it now contains the elements ["Legion", "Shittzu", "Mandyalz", ["Dizii", "Guzzie", "Suzzie"]]. The enemies array is added as a single element to the end of the friends array, so it is nested within the friends array as a sub-array.

// console.log(friends[3]) // Output: ["Dizii", "Guzzie", "Suzzie"] - the element at index 3 of the friends array is the enemies array, which contains the elements ["Dizii", "Guzzie", "Suzzie"]. Therefore, when we access friends[3], it returns the enemies array as a single element, resulting in the output ["Dizii", "Guzzie", "Suzzie"].
// console.log(friends[3][0]) // Output: "Dizii" - the element at index 3 of the friends array is the enemies array, which contains the elements ["Dizii", "Guzzie", "Suzzie"]. Therefore, when we access friends[3][0], it returns the first element of the enemies array, which is "Dizii".

// let person = friends.concat(enemies) // the concat() method is used to merge two or more arrays into a new array. In this case, it merges the friends array and the enemies array into a new array called person, resulting in the array ["Legion", "Shittzu", "Mandyalz", ["Dizii", "Guzzie", "Suzzie"], "Dizii", "Guzzie", "Suzzie"]. The original friends and enemies arrays remain unchanged after using the concat() method.
// console.log(person) // Output: ["Legion", "Shittzu", "Mandyalz", ["Dizii", "Guzzie", "Suzzie"], "Dizii", "Guzzie", "Suzzie"] - after concatenating the friends and enemies arrays into the person array, it now contains the elements ["Legion", "Shittzu", "Mandyalz", ["Dizii", "Guzzie", "Suzzie"], "Dizii", "Guzzie", "Suzzie"]. The concat() method creates a new array that combines the elements of both arrays, so the original friends and enemies arrays remain unchanged.

const person = [...friends,...enemies] // the spread operator (...) is used to expand the elements of an array into individual elements. In this case, it expands the elements of the friends array and the enemies array into a new array called person, resulting in the array ["Legion", "Shittzu", "Mandyalz", "Dizii", "Guzzie", "Suzzie"]. The original friends and enemies arrays remain unchanged after using the spread operator to combine them into the person array.
console.log(person) // Output: ["Legion", "Shittzu", "Mandyalz", "Dizii", "Guzzie", "Suzzie"] - after using the spread operator to combine the friends and enemies arrays into the person array, it now contains the elements ["Legion", "Shittzu", "Mandyalz", "Dizii", "Guzzie", "Suzzie"]. The spread operator allows us to expand the elements of both arrays into a new array, so the original friends and enemies arrays remain unchanged.

const arr11 = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
const realArr = arr11.flat(Infinity) // the flat() method is used to flatten nested arrays into a single-level array. In this case, it flattens the arr11 array with an infinite depth, resulting in the array [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9]. The original arr11 array remains unchanged after using the flat() method.
console.log(realArr) // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9] - after using the flat() method to flatten the arr11 array with an infinite depth, it now contains the elements [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9]. The flat() method allows us to flatten nested arrays into a single-level array, so the original arr11 array remains unchanged.

console.log(Array.isArray(arr11)) // Output: true - the isArray() method is used to check if a value is an array and returns true or false accordingly. In this case, it returns true because arr11 is an array. If the value is an array, it will return true. If the value is not an array, it will return false.
console.log(Array.from("Hello")) // Output: ["H", "e", "l", "l", "o"] - the from() method is used to create a new array from an array-like or iterable object. In this case, it creates a new array from the string "Hello", resulting in the array ["H", "e", "l", "l", "o"]. The from() method allows us to convert a string into an array of individual characters, so the original string remains unchanged.
console.log(Array.from({name: "Priyanshu"})) // Output: [undefined] - the from() method is used to create a new array from an array-like or iterable object. In this case, it creates a new array from the object {name: "Priyanshu"}, which is not an array-like or iterable object, resulting in the array [undefined]. The from() method expects an array-like or iterable object as its argument, so when we pass an object that does not meet these criteria, it returns an array with a single element that is undefined. The original object remains unchanged after using the from() method.
let a = 100
let b = 200
let c = 300
const arr12 = Array.of(a,b,c) // the of() method is used to create a new array from a variable number of arguments. In this case, it creates a new array from the variables a, b, and c, resulting in the array [100, 200, 300]. The of() method allows us to create an array from individual values, so the original variables remain unchanged.
console.log(arr12) // Output: [100, 200, 300] - after using the of() method to create an array from the variables a, b, and c, it now contains the elements [100, 200, 300]. The of() method allows us to create an array from individual values, so the original variables remain unchanged.