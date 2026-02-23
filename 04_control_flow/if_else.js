//if statement
//if(true){
//    console.log("This will always be executed because the condition is true")
//}
//else{
    //    console.log("This will never be executed because the condition is true")}

if(2 > 1){
    console.log("2 is greater than 1")
}
else{
    console.log("This will never be executed because 2 is greater than 1")
}

const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("Welcome back, user!")
}
else{
    console.log("Please log in to continue")
}

const age = 18

if(age >= 18){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}

// >, <, >=, <=, ==, ===, !=, !==, &&, ||, !

const balance = 1000

if(balance == 500) console.log("Balance greater than 0.") // Single line if block without curly braces.

if(balance > 0) console.log("Your account balance is positive"), //not recommended, it is better to use curly braces to avoid confusion and to make the code more readable.
console.log("Current balance: ", balance);
else console.log("Your account balance is zero or negative"),
console.log("Current balance: ", balance);

if(balance<500){
    console.log("Less than 500");
} else if(balance <750){
    console.log("Less than 750");
} else if(balance < 1000){
    console.log("Less than 1000");
} else{
     console.log("Greater than or equal to 1000");
}

 const userLoggedIn = true
 const debitCard = true

 if(userLoggedIn && debitCard){
    console.log("You can make a purchase")
 } else if(userLoggedIn && !debitCard){
    console.log("Please add a debit card to your account to make a purchase")
 } else if(!userLoggedIn && debitCard){
    console.log("Please log in to your account to make a purchase")
 }else{
    console.log("Please log in to your account and add debit card to make a purchase.")
 }

 const userLoggedInGoogle = true
 const userLoggedInFacebook = true
 if(userLoggedInGoogle || userLoggedInFacebook){
    console.log("User Logged In.")
 }