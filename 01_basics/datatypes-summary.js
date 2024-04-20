// LECTURE - 9 
// Primitive 
//  7 types : String, Number, Boolean, Null, Undefined, BigInt, Symbol

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = true
// const outsideTemp = null
// let userEmail; 
 
// Symbol is used for making the value unique even if you pass the same value 
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId); //false

// const bigNumber = 1782657236571265716257n //use n for the bigInt



// Reference Type or Non-primitive type
// Arrays, Objects, Functions

const heros = ["spiderman", "ironman"]; //array

let myObj = { //object
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}
console.log( typeof myObj);
console.log(typeof heros);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3