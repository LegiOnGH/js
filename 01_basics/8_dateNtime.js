//Date

let myDate = new Date() //current date and time
console.log(myDate)
console.log(myDate.toString()) //converts the date to a string representation
console.log(myDate.toDateString()) //converts the date to a string representation of the date part only
console.log(myDate.toTimeString()) //converts the date to a string representation of the time part only
console.log(myDate.toISOString()) //converts the date to a string representation in ISO format
console.log(myDate.toLocaleString('en-IN')) //converts the date to a string representation that is formatted according to the locale settings of the user's environment
console.log(myDate.toLocaleDateString('en-IN')) //converts the date to a string representation of the date part only, formatted according to the locale settings of the user's environment
console.log(myDate.toLocaleTimeString('en-IN')) //converts the date to a string representation of the time part only, formatted according to the locale settings of the user's environment


let myCustomDate = new Date(2026, 1, 17) //creating a date object with a specific date
console.log(myCustomDate)
console.log(myCustomDate.toString())
console.log(myCustomDate.toDateString())
console.log(myCustomDate.toTimeString())
console.log(myCustomDate.toISOString())
console.log(myCustomDate.toLocaleString('en-IN'))
console.log(myCustomDate.toLocaleDateString('en-IN'))
console.log(myCustomDate.toLocaleTimeString('en-IN'))

let myTimestamp = new Date(Date.now()) //creating a date object with a specific timestamp (milliseconds since January 1, 1970)
console.log(myTimestamp)
console.log(myTimestamp.toString())
console.log(myTimestamp.toDateString())
console.log(myTimestamp.toTimeString())
console.log(myTimestamp.toISOString())
console.log(myTimestamp.toLocaleString('en-IN'))
console.log(myTimestamp.toLocaleDateString('en-IN'))
console.log(myTimestamp.toLocaleTimeString('en-IN'))

console.log(Math.floor(Date.now()/(1000*60*60*24))) // Output: number of days since January 1, 1970 - this expression calculates the number of days that have passed since January 1, 1970 by first getting the current timestamp in milliseconds using Date.now(), then dividing it by the number of milliseconds in a day (1000 milliseconds/second * 60 seconds/minute * 60 minutes/hour * 24 hours/day) to convert it to days, and finally using Math.floor() to round it down to the nearest integer. Each time we run this expression, it will return a different number of days based on the current date and time.

myCustomDate.toLocaleString('default',{weekday:'long'}) // Output: "Monday" - this expression uses the toLocaleString() method to get the full name of the weekday for the myCustomDate object. The first argument 'default' specifies that we want to use the default locale settings of the user's environment, and the second argument is an options object where we specify that we want to display the weekday in its long form (e.g., "Monday", "Tuesday", etc.). Each time we run this expression with a different date, it will return the corresponding weekday name based on that date.
