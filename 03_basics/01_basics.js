// LECTURE - 19
// function sayMyName(){
//     console.log("Y");
//     console.log("A");
//     console.log("S");
//     console.log("H");
// }
// sayMyName()



// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5)




// Store the result in a variable(result)
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(3, 5)  //8

// console.log("Result:", result);      //Result: undefined
// 'Result' is not giving the right result so for correcting it we can do 

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result
//     console.log("yash");  //this will not be executed as after the return keyword nothing will be executed
// }
//  const result = addTwoNumbers(3, 5) 
// console.log("Result:", result);      //Result: 8 


// We have the another method
// function addTwoNumbers(number1, number2) {
//     return number1 + number2
// }
// const result = addTwoNumbers(3, 5) 
// console.log("Result:", result);    //Result: 8



// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Yash"))     //Yash just logged in
// console.log(loginUserMessage(""))         // just logged in
// console.log(loginUserMessage())           //undefined just logged in



// function loginUserMessage(username){
//     if(username === undefined){            //"if(!username){ "  //We can use it too
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());



// We can assign a default value. Now it will never be undefined even if the user do not assign any value. And if he assign a value then it will overwrite it.
function loginUserMessage(username = "sam"){
    if(username === undefined){               //Now we will never go into this block as the value never be 'undefined' 
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());   //sam just logged in