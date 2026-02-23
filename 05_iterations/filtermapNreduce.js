//Filter : filtering out elements from an array based on a condition. 
// It creates a new array with all elements that pass the test implemented by the provided function.
const nums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myNums = nums.filter( (num) => {return num > 4}) //explicit return
console.log(myNums);

const evenNums = nums.filter( (num) => num%2 === 0); // implicit return
console.log(evenNums);

const books = [
    {title: "Book 1", author: "Author A", genre : "Fiction", published: 2016, edition: "First"},
    {title: "Book 2", author: "Author B", genre : "Non-Fiction", published: 2018, edition: "Second"},
    {title: "Book 3", author: "Author C", genre : "Fiction", published: 2021, edition: "First"},
    {title: "Book 4", author: "Author D", genre : "Non-Fiction", published: 2019, edition: "Third"},
    {title: "Book 5", author: "Author E", genre : "Fiction", published: 2022, edition: "Second"}
];

const fictionBooks = books.filter( (book) => book.genre === "Fiction");
console.log(fictionBooks);

const recentBooks = books.filter( (book) => book.published > 2019);
console.log(recentBooks);

const firstEditionBooks = books.filter( (book) => book.edition === "First");
console.log(firstEditionBooks);

const nonFictionBooks = books.filter( (book) => book.genre === "Non-Fiction");
console.log(nonFictionBooks);

const recentFictionBooks = books.filter( (book) => book.genre === "Fiction" && book.published > 2019);
console.log(recentFictionBooks);

//Map : transforming each element of an array using a provided function and returns a new array with the transformed elements.
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map( (num) => num * num);
console.log(squaredNumbers);

const doubledNumbers = numbers.map( (num) => num * 2);
console.log(doubledNumbers);

const stringNumbers = numbers.map( (num) => `Number: ${num}`);
console.log(stringNumbers);

const booksTitles = books.map( (book) => book.title);
console.log(booksTitles);

const booksAuthors = books.map( (book) => book.author);
console.log(booksAuthors);

const booksGenres = books.map( (book) => book.genre);
console.log(booksGenres);

const booksPublishedYears = books.map( (book) => book.published);
console.log(booksPublishedYears);

const booksEditions = books.map( (book) => book.edition);
console.log(booksEditions);

//Reduce : reducing an array to a single value by applying a provided function to each element of the array and accumulating the result.
const nums1 = [1, 2, 3, 4, 5];

const sum = nums1.reduce( (accumulator, currentValue) => accumulator + currentValue, 0); // 0 is the initial value of the accumulator, it can be omitted if the array is not empty, in that case the first element of the array will be used as the initial value and the iteration will start from the second element.
console.log(sum);

const product = nums1.reduce( (accumulator, currentValue) => accumulator * currentValue, 1); // 1 is the initial value of the accumulator for multiplication, it can be omitted if the array is not empty, in that case the first element of the array will be used as the initial value and the iteration will start from the second element.
console.log(product);

const max = nums1.reduce( (accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity); // -Infinity is the initial value of the accumulator for finding maximum, it can be omitted if the array is not empty, in that case the first element of the array will be used as the initial value and the iteration will start from the second element.
console.log(max);

const min = nums1.reduce( (accumulator, currentValue) => Math.min(accumulator, currentValue), Infinity); // Infinity is the initial value of the accumulator for finding minimum, it can be omitted if the array is not empty, in that case the first element of the array will be used as the initial value and the iteration will start from the second element.
console.log(min);

const average = nums1.reduce( (accumulator, currentValue, index, array) => { // the index and array parameters are optional, they can be used to access the current index and the original array during the reduction process, in this case we need them to calculate the average at the end of the reduction process.
    accumulator += currentValue;
    if(index === array.length - 1) { // when we reach the last element of the array, we divide the accumulated sum by the length of the array to get the average, and return it as the final result of the reduction process.
        return accumulator / array.length;
    }
    return accumulator; // for all other elements, we just return the accumulated sum to continue the reduction process.
}, 0); // 0 is the initial value of the accumulator for summing the numbers, it can be omitted if the array is not empty, in that case the first element of the array will be used as the initial value and the iteration will start from the second element.
console.log(average);

const concatenatedString = nums1.reduce( (accumulator, currentValue) => accumulator + currentValue.toString(), ""); // "" is the initial value of the accumulator for concatenating strings, it can be omitted if the array is not empty, in that case the first element of the array will be used as the initial value and the iteration will start from the second element.
console.log(concatenatedString);

const countGreaterThan3 = nums1.reduce( (accumulator, currentValue) => { // we want to count how many numbers in the array are greater than 3, so we check if the current value is greater than 3, if it is we increment the accumulator by 1, otherwise we just return the accumulator to continue the reduction process.
    if(currentValue > 3) {
        return accumulator + 1;
    }
    return accumulator;
}, 0);
console.log(countGreaterThan3);

//Chaining filter, map and reduce together
const chainedResult = nums1
    .filter( (num) => num > 2) // filter out numbers greater than 2
    .map( (num) => num * 2) // double the remaining numbers
    .reduce( (accumulator, currentValue) => accumulator + currentValue, 0); // sum the doubled numbers
console.log(chainedResult); 

//double mapping
const doubleMappedResult = nums1
    .map( (num) => num * 2) // double the numbers
    .map( (num) => num + 1); // add 1 to the doubled numbers
console.log(doubleMappedResult);

//double filtering
const doubleFilteredResult = nums1
    .filter( (num) => num > 2) // filter out numbers greater than 2
    .filter( (num) => num % 2 === 0); // filter out even numbers from the remaining numbers
console.log(doubleFilteredResult);

//double reducing
const doubleReducedResult = nums1
    .reduce( (accumulator, currentValue) => accumulator + currentValue, 0) // sum all numbers
    .toString()
    .split("") // split the string into an array of characters
    .reduce( (accumulator, currentValue) => accumulator + parseInt(currentValue), 0); // sum the digits of the sum
console.log(doubleReducedResult);

