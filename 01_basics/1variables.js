const accountId = 14459 //use const for values that will not change and use let for values that will change
let accountEmail = "abc@gmail.com"
var accountPassword = "12345" //prefer not to use var becuase of its function scope and hoisting
accountCity = "New York" //not recommended to declare variables without var, let or const because it creates a global variable and can lead to bugs and security issues
let accountState //undefined because we have not assigned any value to accountState

// accountId = 2 Not allowed because accountId is a constant
accountEmail = "123@gmail.com" 
accountPassword = "54321" 
accountCity = "Los Angeles" 

/*console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)   */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])       