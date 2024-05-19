// LECTURE 21  (SCOPE)

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a);      //Error
// console.log(b);      //Error
// console.log(c);         // 30




// var c = 300
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }     
// console.log(c);    //30 , it will return 30, it over write the var c = 300. to avoid this we should use let


// let c = 300
// if (true) {
//     let a = 10
//     const b = 20
//     let c = 30
// }   
// console.log(c);  //300


// let c = 300
// if (true) {
//     let a = 10
//     const b = 20
//     let c = 30
//     console.log("Inner:", c);              //30 , Block Scope
// }
// console.log(c);                 //300 , Global Scope

// LECTURE 22
// // Example 1
// function one() {
//     const username = " Yash"

//     function two() {
//         const website = "www.roboflowsystem.com"
//         console.log(username);
//     }
//     // console.log(website);  //error
//     two()
// }
// one()

// // Example 2
// if (true) {
//     const username = "Yash"
//     if (username === "Yash") {
//         const website = " www.roboflowsystem.com"
//         console.log(username + website );
//     }
//     // console.log(website);    //error
// }
// // console.log(username);       //error



//-------------Example (interesting)-----------------

// two types of defining functions
// 1st
// function addone(num) {
//     return num + 1
// }
// console.log(addTwo(5))              //6


// // 2nd type
// const addTwo = function(num) {
//     return num + 2

// }
// console.log(addTwo(5))               //6


// Now change the function call in both the functions
// console.log(addone(5))      //6, it will be exicuted
// function addone(num) {
//     return num + 1
// }


// 2nd type
console.log(addTwo(5))          //error
const addTwo = function(num) {
    return num + 2
}
