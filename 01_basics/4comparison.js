console.log(2>1)    
console.log("2">1)  //true because of type coercion, "2" is converted to 2 before comparison
console.log("02">1) //true because of type coercion, "02" is converted to 2 before comparison
console.log("2a">1) //false because of type coercion, "2a" cannot be converted to a number, so it is converted to NaN and NaN is not greater than any number

console.log(" ")

console.log(2<1)
console.log(2>=2)
console.log(2<=2)

console.log(" ")


console.log(2==2) //loose equality operator, it checks for value equality and performs type coercion if the types are different
console.log(2=="2") //true because of type coercion, "2" is converted to 2 before comparison
console.log(2===2) //strict equality operator, it checks for both value and type equality, no type coercion is performed
console.log(2==="2") //false because the types are different, 2 is a number and "2" is a string

console.log(" ")

console.log(2!=3) //loose inequality operator, it checks for value inequality and performs type coercion if the types are different
console.log(2!="2") //false because of type coercion, "2" is converted to 2 before comparison
console.log(2!==3) //strict inequality operator, it checks for both value and type inequality, no type coercion is performed

console.log(" ")

console.log(2!=="2") //true because the types are different, 2 is a number and "2" is a string
console.log(null>0) //false because null is converted to 0 when using the > operator, and 0 is not greater than 0
console.log(null==0) //false because null is only equal to undefined and not equal to any other value, even though null is converted to 0 when using the == operator, it does not consider them equal
console.log(null>=0) //true because null is converted to 0 when using the >= operator, and 0 is greater than or equal to 0

console.log(" ")

console.log(null==undefined) //true because null and undefined are considered equal when using the == operator, even though they are different types, they are both considered falsy values and are treated as equal in loose equality comparison
console.log(null===undefined) //false because null and undefined are different types, and the === operator does not perform type coercion, so it considers them not equal

console.log(" ")

console.log(undefined>0) //false because undefined is converted to NaN when using the > operator, and NaN is not greater than any number
console.log(undefined==0) //false because undefined is only equal to null and not equal to any other value, even though undefined is converted to NaN when using the == operator, it does not consider them equal
console.log(undefined>=0) //false because undefined is converted to NaN when using the >= operator, and NaN is not greater than or equal to any number