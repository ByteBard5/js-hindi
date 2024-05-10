// lecture 17

// const tinderUser = new Object()   //singleton object
// const tinderUser1 = {}     //non-singleton object
// console.log(tinderUser);     //{}
// console.log(tinderUser1);    //{}


// const tinderUser = {}
// tinderUser.id = "123as"
// tinderUser.name = "Yash"
// tinderUser.isLoggedIn = false
// console.log(tinderUser);



// Onjects in object
// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: { 
//             firstname: "Yash",
//             lastname: "Maheshwari"
//         }
//     }
// }
// console.log(regularUser);
// console.log(regularUser.fullname);    //{ userfullname: { firstname: 'Yash', lastname: 'Maheshwari' } }
// console.log(regularUser.fullname.userfullname);    //{ firstname: 'Yash', lastname: 'Maheshwari' }
// console.log(regularUser.fullname.userfullname.firstname);     //Yash



// merging
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
// const obj3 = {obj1, obj2}
// console.log(obj3);     //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }  //not a right method

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);             //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2)      //adding a empty paranthesis is good to use
// console.log(obj3);     //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// alternative
// const obj3 = {...obj1, ...obj2}    //we will use this syntax most of the time
// console.log(obj3);      //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



// Data come from the database in this syntax
// const users = [
//     {
//         id: 1,
//         email: "abc@gmail.com"
//     }, 
//     {
//         firstname: "Yash",
//         lastname: "Maheshwari"
//     }
// ]
// users[1].email




const newObj = {
    name: "Aryan", 
    age: 19,
    id: "79Dy"
}
console.log(newObj);               //{ name: 'Aryan', age: 19, id: '79Dy' }
console.log(Object.keys(newObj));               //[ 'name', 'age', 'id' ]    (convert the keys in the array, now we can use them in many ways as array)
console.log(Object.values(newObj));         //[ 'Aryan', 19, '79Dy' ]
console.log(Object.entries(newObj));          //[ [ 'name', 'Aryan' ], [ 'age', 19 ], [ 'id', '79Dy' ] ]   //we will not use it as much

// for checking if it has the property or not
console.log(newObj.hasOwnProperty('isLoggedIn'));           //false

