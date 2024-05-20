// LECTURE 23
// const user = {
//     username: "Yash",
//     price: 999,

//     welcomeMessage: function(){
//         // console.log(`${username}, welcome to website.`);      //we can use like this but it is not right to execute the current context
//         console.log(`${this.username}, welcome to website.`);
//     }
// }
// user.welcomeMessage()     //Yash, welcome to website
// // Now what if someone change the username
// user.username = "Aryan"
// user.welcomeMessage()     //Aryan, welcome to website
 






// const user = {
//     username: "Yash",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website.`);
//         // console.log(this);
//     }
// }
// user.welcomeMessage()     //Yash, welcome to website
// user.username = "Aryan"
// user.welcomeMessage()     //Aryan, welcome to website
// console.log(this);        //empty{}

// The Global Object in the browser is 'Window Object' //interview question





// function chai(){
//     console.log(this);     //We will get a lot of things in the output
// }
// chai()


// function chai(){
//     let username = "Yash"
//     console.log(this);     //still we will get a lot of things in the output
// }
// chai()



// function chai(){
//     let username = "Yash"
//     console.log(this.username);      //undefined, so we can not use 'this' in functions as we were using in the objects before 
// }
// chai()




// const chai = function () {
//     let username = "Yash"
//     console.log(this.username);     //undefined
// }
// chai()  


// Arrow Function
// const chai =  ()  => {
//     let username = "Yash"
//     console.log(this.username);     //undefined
// }
// chai()



// const chai =  ()  => {
//     let username = "Yash"
//     console.log(this);     //{}, Empty
// }
// chai()


// BASIC ARROW FUNCTION SYNTAX
// ()  =>  {}



// Basic Arrow Function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))        //7


// Implicit return 
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3, 4))            //7


// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4))          //7  


const addTwo = (num1, num2) => ({username: "Yash"})     //we have to wrape object in parenthesis() to return it
console.log(addTwo(3, 4))

