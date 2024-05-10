// Lecture 16

// we can declare abjects by two methods- 1- Literals    2- Constructor
// with constructor, it will be a singleton onject. With literals, it creates a multiple instances of the object


// Declaration with Constructor
// Object.create   //Discuss another time


// Declaration with literals

// const JsUser = {        //Behind the scene this "name", "age", "location", "email" ..... is track as a STRING
//     name: "Yash",
//     "full name": "Yash Maheshwari",
//     age: 22,
//     location: "Delhi",
//     email: "yash@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(JsUser.email);
// // Here we can not access "full name" with this dot method 
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// declare a Symbol and add it in the object's key and print it
// const mySymbol = Symbol("Key1")
// const JsUser = {        
//         name: "Yash",
//         mySymbol: "myKey1",
// }
// console.log(JsUser.mySymbol);    //mykey1
// console.log(typeof JsUser.mySymbol);     //string   (This is not accessing as a symbol so this is not the right way to add a symbol as a key in any object)
// to make it right just add square brackets to the symbol variable, [mySymbol]: "myKey1"

// const mySymbol = Symbol("Key1")
// const JsUser = {        
//         name: "Yash",
//         [mySymbol]: "myKey1",
// }
// console.log(JsUser[mySymbol]);   
// console.log(typeof JsUser[mySymbol]);

// Changing the value in object
// JsUser.name = "Yash Maheshwari"
// console.log(JsUser["name"]);

// We can also lock the value so that no one can change it
// Object.freeze(JsUser)
// JsUser.name = "Aryan"      //It will not change now as we freeze the Object
// console.log(JsUser["name"]);


// adding function in object
const JsUser = {        
    name: "Yash",
    age: 22
}

JsUser.greeting = function(){
    console.log("Hello, Yash");
}
console.log(JsUser.greeting());  //Hello, Yash

JsUser.greetingTwo = function(){
    console.log(`Hyy there, ${this.name}`);
}
console.log(JsUser.greetingTwo());  //Hyy there, Yash

