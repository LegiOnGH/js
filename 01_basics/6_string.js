const name = "Priyanshu"
const repo = 50
//Old way of concatenating strings
console.log(name + " has " + repo + " repositories") // Output: "Priyanshu has 50 repositories"

//New way of concatenating strings using template literals
//More readable and easier to write, especially when we have multiple variables to concatenate in a string.
console.log(`${name} has ${repo} repositories`) // Output: "Priyanshu has 50 repositories" - using template literals for string interpolation

const name1 = new String("Priyanshu") // creating a string object using the String constructor
console.log(name1) // Output: [String: 'Priyanshu'] - this is a string object, not a primitive string value

//When we create a string using the String constructor, it creates a string object instead of a primitive string value.
// This means that when we use the typeof operator on a string created with the String constructor, it will return "object" instead of "string". 
// For example, if we check the type of name1 using typeof name1, it will return "object" instead of "string". 
// This is because name1 is an instance of the String object, which is a wrapper around the primitive string value. 
// Therefore, it is generally recommended to use string literals (e.g., const name = "Priyanshu") instead of the String constructor to create strings in JavaScript, as it creates a primitive string value that is more efficient and easier to work with.

console.log(name1[0]) // Output: "P" - we can access individual characters of a string object using bracket notation, just like with a primitive string value
console.log(name1.__proto__) // Output: [String: ''] - the __proto__ property of a string object points to the String prototype, which contains methods and properties that can be used with string objects 
console.log(name1.toUpperCase()) // Output: "PRIYANSHU"
console.log(name1.length) // Output: 9 - we can access the length property of a string object to get the number of characters in the string     
console.log(name1.charAt(4)) // Output: "a" - we can use the charAt() method to get the character at a specific index in the string object

const subname = name1.substring(0, 4) // using the substring() method to extract a portion of the string object
console.log(subname) // Output: "Priy" - the substring() method takes two arguments: the starting index and the ending index (exclusive) and returns the portion of the string between those indices. In this case, it returns the first four characters of the string object, which is "Priy". 

const subname2 = name1.slice(-6, 4) // using the slice() method to extract a portion of the string object
console.log(subname2) // Output: "y" - the slice() method also takes two arguments: the starting index and the ending index (exclusive) and returns the portion of the string between those indices.

const newName = "   Priyanshu   " // a string with leading and trailing whitespace
console.log(newName.trim()) // Output: "Priyanshu" - the trim() method removes leading and trailing whitespace from a string
console.log(newName.trimStart()) // Output: "Priyanshu   " - the trimStart() method removes leading whitespace from a string
console.log(newName.trimEnd()) // Output: "   Priyanshu" - the trimEnd() method removes trailing whitespace from a string
console.log(newName.trimEnd().trimStart()) // Output: "Priyanshu" - we can chain the trimEnd() and trimStart() methods to remove both leading and trailing whitespace from a string 

const url = "https://www.priyanshu.com/priyanshu%20is%20a%20developer" // a URL with encoded spaces
console.log(url.replace(/%20/g, "-")) // Output: "https://www.priyanshu.com/priyanshu-i-a-developer" - the replace() method can be used to replace all occurrences of a specified substring in a string with another substring. In this case, we are replacing all occurrences of "%20" with a space character.
url.includes("priyanshu") // Output: true - the includes() method checks if a string contains a specified substring and returns true or false accordingly

const newName2 = "Priyanshu is a developer"
console.log(newName2.includes("developer")) // Output: true - the includes() method checks if a string contains a specified substring and returns true or false accordingly 

console.log(newName2.split(" ")) // Output: ["Priyanshu", "is", "a", "developer"] - the split() method splits a string into an array of substrings based on a specified separator. In this case, we are splitting the string into an array of words using a space character as the separator.
