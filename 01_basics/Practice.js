// const accountId = 65356 //it can not be change
// let accountEmail = "yash@gmail.com" //it can be change
// var accountPassword = "1386" //it can be change 
// accountCity = "Delhi" //we can define a variable without using const, let but this is not the right thing to do
// let accountState; //undefine

// accountPassword = "92356"

// console.table([accountId, accountEmail, accountPassword, accountState]);
 
// ----------------------------------------------------------------------------------------------------------------------------------

// "use strict";  // we use this to treat all JS coe as newer version
// alert ("Yash") // it will run in browser but not in nodejs. We have a different syntax of using alert in nodejs

// let name = "Yash" //string
// let age = 22  //number
// let isLoggedIn = true  //boolean

//DATATYPES
// number ==> 2 to power 53
// BigInt
// string ==> ""
// boolean ==> true/false
// null ==> standalone value
// undefined ==> 
//symbol ==> unique


// OBJECT


// let name = "yash"
// console.log(typeof "yash");
// console.log(typeof name);

// console.log(typeof null);  //object
// console.log(typeof undefined);   //undefined

// --------------------------------------------------------------------------------------------------

// LECTURE 6
// let score = "33"
// console.log(typeof score);  //string
// console.log(typeof(score));   //string
// // What if we don't know that the value is really a number, then we use type conversion
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  //number


// let score = "33abc"
// let valueInNumber = Number(score)
// // Now if we want to convert it into number then it will convert. But it is not a number
// console.log(typeof valueInNumber);    //number
// console.log(valueInNumber);   //NaN (Not a Number)

// let score = null
// let valueInNumber = Number(score)
// console.log(valueInNumber);   //0

// let score = undefined
// let valueInNumber = Number(score)
// console.log(valueInNumber);   //NaN

// let score = true
// let valueInNumber = Number(score)
// console.log(valueInNumber);  // 1

// let score = "yash"  //now we have a string which can not change into a number 
// let valueInNumber = Number(score)
// console.log(valueInNumber);  //NaN


// let isLoggedIn = 1  
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //true

// 1 is easily converted in Boolean Value but what about a empty string
// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);   //false

// let isLoggedIn = "Yash"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //true

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);    //33
// console.log(typeof stringNumber);   //string

// ----------------------------------------------------------------------------------------------
// LECTURE 10
 //PRIMITIVE TYPE 
// let myYoutubeName = "yash.com" 
// let anothername = myYoutubeName
// anothername = "roboflow.com"
// console.log(myYoutubeName);    //yash.com
// console.log(anothername);   //roboflow.com

//    NON-PRIMITIVE TYPE
// let userOne =  {
//     email: "userone@gmail.com",
//     upi: "user@ypl"
// }
// let userTwo = userOne
// userTwo.email = "roboflowsystem.com"
// console.log(userOne.email);   //roboflowsystem.com
// console.log(userTwo.email);   //roboflowsystem.com

// -------------------------------------------------------------------------------------------------------------------
// LECTURE 11
