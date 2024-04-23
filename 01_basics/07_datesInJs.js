//Date   lecture = 13

// let myDate = new Date()
// console.log(myDate);  //2024-04-23T12:14:13.176Z

// let myDate = new Date()
// console.log(myDate.toDateString()); //Tue Apr 23 2024 12:15:27 GMT+0000 (Coordinated Universal Time)

// let myDate = new Date()
// console.log(myDate.toISOString()); //2024-04-23T12:18:29.816Z

// let myDate = new Date()
// console.log(myDate.toJSON());  //2024-04-23T12:18:50.134Z

// let myDate = new Date()
// console.log(myDate.toLocaleDateString()); //4/23/2024

// let myDate = new Date()
// console.log(myDate.toLocaleString());  //4/23/2024, 12:19:52 PM

// let mydate = new Date()
// console.log(typeof mydate);   //Object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());   //Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());  //1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());   //1/14/2023, 12:00:00 AM

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); //1/14/2023, 12:00:00 AM

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);  //1713876557212

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.getTime()); //1673654400000

// console.log(Date.now()/1000);  // divide by 1000 to convert in seconds but it will give the decimal value too //1713876944.737
//to remove this decimal value we do 
// console.log(Math.floor(Date.now()/1000));  //1713877075

let newDate = new Date()
// console.log(newDate) //2024-04-23T12:58:56.156Z
//If we want only month or date then
// console.log(newDate.getMonth() );   //3    (april) 0=january, 1=february, 2=march, 3=april
// console.log(newDate.getMonth() + 1); //For the better understanding for end user   //4(april)
// console.log(newDate.getDay());   //2

newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate);