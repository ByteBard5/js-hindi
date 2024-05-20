//LECTURE 24
// iife = Immediately Invoked Function Expression

// General function
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// iife (For immediate execution and for saving the function from global scope pollution)
// (function chai(){                 //Named iife (as it has a name 'chai')
//     console.log(`DB CONNECTED`);
// }) ();

// Syntax -    ' (Function Defination) (Function Call) '


// Arrow Function
// ( () => {                                 //simple iife (as it has not any name)
//     console.log('DB CONNECTED TWO');
// }) ()


// Passing Value
// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// })('Yash')