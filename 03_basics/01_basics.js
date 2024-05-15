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
// function loginUserMessage(username = "sam"){
//     if(username === undefined){               //Now we will never go into this block as the value never be 'undefined' 
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());   //sam just logged in



// Lecture - 20
// for an example, in a shopping app, we don't know how many products will a user is going to add to his addcart So we have to define the parameter accordingly which is not possible in normal way
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500)); //200   
//this will return the only first value so for this issue we can use 'Rest Operator'

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500));         //[200, 400, 500]



// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 3000));    //[500, 3000]



// Object in function
// const user = {
//     username: "Yash",
//     price: 999
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} anf price is ${anyobject.price}`)
// }
// handleObject(user)           //Username is Yash anf price is 999




// const user = {
//     username: "Yash",
//     price: 999
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} anf price is ${anyobject.price}`)
// }
// handleObject({
//     username: "Aryan",
//     price: 988
// })


// // Array in function
// const newArray = [200, 400, 100, 600]
// function returnSecondValue(getArray){      //'getArray', is just a name. We can define it anything we want
//     return getArray[1]

// }
// console.log(returnSecondValue(newArray));          //400


const newArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue([200, 600, 700, 500]));   //600