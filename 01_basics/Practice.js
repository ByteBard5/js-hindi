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
// We should use Backticks for console
// const name = "yash"
// const age = 22
// console.log(`My name is ${name} and my age is ${age}.`)

// const name = new String('Yash')
// console.log(name);        //[String: 'Yash']
// console.log(name[1]);     // a
// console.log(name.__proto__);   //{}  //it looks empty but it is not really empty
// STRING METHODS
// console.log(name.length);   //4
// console.log(name.toUpperCase());  //YASH   //But it did not change the original value because of the STACK MEMORY
// console.log(name.charAt(2));   //s
// console.log(name.indexOf('s'));    //2
// console.log(name.anchor());    //<a name="undefined">Yash</a>
// console.log(name.big());     //<big>Yash</big>
// console.log(name.bold());     //<b>Yash</b>

// MORE METHODS
// const name = new String('Yash-Maheshwari')
// const newString = name.substring(0,7)    //we can not give negative value here
// console.log(newString);    //Yash-Ma
// console.log(name.substring(0, 6));    //Yash-M   
// console.log(name.slice(-15, 5));  //Yash-
// console.log(name.slice(3, 13));   //h-Maheshwa


// const space = "    RoboFlowSystem        "  
// console.log(space);   //(    RoboFlowSystem      )
// if there is extra space in the variable then we will use Trim Methode to avoid it
// console.log(space.trim());    //RoboFlowSystem


// const url = "https://yash.com/yash%20homepage/"
// console.log(url.replace('%20', '-'));      //https://yash.com/yash-homepage/
// console.log(url.includes('yash'))      //true   //it checks if the 'yash' is present in the url or not


// now we want to convert the string into array based on dashes(it  can be anything- space and soon)
// const name = 'Yash-Maheshwari-Bilsi-UttarPradesh'
// console.log(name.split('-'));     //[ 'Yash', 'Maheshwari', 'Bilsi', 'UttarPradesh' ]
// console.log(name.split('a'));        //[ 'Y', 'sh-M', 'heshw', 'ri-Bilsi-Utt', 'rPr', 'desh' ]

// --------------------------------------------------------------------------------------------------
// LECTURE 12

// const score = 400
// console.log(typeof score);  //it is also a number, but sometimes we need to set a number deliberately then we can use new keyword 

// const money = new Number(5000)
// // console.log(money);   //[Number: 5000]
//  console.log(money.toString());    //it is converted into string 
//  console.log(money.toString().length);     //as it is converted into the string so we can also use the string methods
//  console.log(money.toFixed(3));    //5000.000

// const number = 23.8966
// console.log(number.toPrecision(3));     //23.9

// const number = 123.8966
// console.log(number.toPrecision(3));     //124
// console.log(number.toPrecision(4));     //123.9

// const number = 1123.8966
// console.log(number.toPrecision(3));     //1.12e+3


// const hundreds = 1000000000
// console.log(hundreds.toLocaleString());     //1,000,000,000   //helpful for better readability, by default US Standards
// console.log(hundreds.toLocaleString('en-IN'));    //1,00,00,00,000

// +++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++

// console.log(Math);   //check it in browser
// console.log(Math.abs(-4));   //4   //change the negative sign into positive 
// console.log(Math.round(4.6));    //5
// console.log(Math.ceil(4.2));     //5   //ceil will always give the upper value. If it is greater than even with point one then it eill give the upper value  (2.5 = 3, 1.3 = 2, 6.1 = 7 )
// console.log(Math.floor(5.8));    //5   //floor will give the lower value. It just kind of ignore the point values  (6.8 = 6, 7.4 = 7, 4.9 = 4)
// console.log(Math.min(4,3,6,8));    //3
// console.log(Math.max(5,6,3,9));    //9

// console.log(Math.random()); //it will always give the value between 0 and 1, including 0 and 1
// console.log(Math.random()*10);  //it will give the value between 0 and 10, But the minimum value can be 0 and to avoid it we can use +1
// console.log(Math.random()*10 +1);  //now the minimum value will never be 0 
// To avoid the precedence operations, we can use brackets
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);


// const min = 10
// const max = 20
// console.log(Math.random() * (max - min + 1));  //5.78738t7398574758
// //but if we want one digit then we can use floor
// console.log(Math.floor(Math.random() * (max - min + 1)));   //8, //7
// //we want the minimum value = min, which is 10 here
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);   //11, //13

// ----------------------------------------------------------------------------------------
// LECTURE 13
// let myDate = new Date()
// console.log(myDate);   //2024-05-01T02:56:12.649Z
// console.log(myDate.toString());    //Wed May 01 2024 02:56:51 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString());    
// console.log(myDate.toJSON());    //2024-05-01T02:58:28.077Z
// console.log(myDate.toLocaleDateString());     //5/1/2024
// console.log(myDate.toLocaleString());    //5/1/2024, 2:59:58 AM

// let myCreatedDate = new Date(2024, 3, 23)
// console.log(myCreatedDate);    //2024-04-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString());     //Tue Apr 23 2024

// let myCreatedDate = new Date(2024, 4, 1, 8, 30)
// console.log(myCreatedDate.toLocaleString());     //5/1/2024, 8:30:00 AM

// let myCreatedDate = new Date("2024-01-23")
// console.log(myCreatedDate.toLocaleString());    //1/23/2024, 12:00:00 AM


// let myCreatedDate = new Date("01-14-2024")     //Mostly use in INDIA
// console.log(myCreatedDate.toLocaleString());   //1/14/2024, 12:00:00 AM

// let myCreatedDate = new Date("01-14-2024")
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);    //1714533750019
// console.log(myCreatedDate.getTime());      //1705190400000

// console.log(Date.now());     //1714533815868 (miliseconds)
//to convert it into seconds we can do
// console.log(Date.now()/1000);     //1714533942.317 //it also gives the decimal value so to avoid it we can use floor
// console.log(Math.floor(Date.now()/1000));     //1714534047

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);   //for the better redability to the enduser we can add 1, as month start from 0

// newDate.toLocaleString('default', {
//     weekday: "long"
// })
// ------------------------------------------------------------------------------------------------
// LECTURE 14
