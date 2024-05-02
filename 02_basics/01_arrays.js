//Arrays  lecture 14
// const myArr = [0, 1, 2, 3, 4, 5, true, "yash"]
// console.log(myArr[0]);

// const myHeros = ["Ironman", "Thor"]
// const myArr2 = new Array(1, 2, 3, 4)

//array methods
// myArr.push(6)
// console.log(myArr);  

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);   

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));    
// console.log(myArr.indexOf("ausd"));  //-1      if the value is not present then it just ives the negative index
// console.log(myArr.indexOf(4));   //4


// const newArr = myArr.join()    //it just converted the value into string
// console.log(newArr);    
// console.log(myArr);

//slice, splice
const newArray = [0, 1, 2, 3, 4, 5]
console.log("A", newArray);        //A [0, 1, 2, 3, 4, 5]
const myn1 = newArray.slice(1, 3)  //it will slice the array from 1 and it doesnot include 3
console.log(myn1);               //[1, 2]
console.log("B", newArray);      //B [0, 1, 2, 3, 4, 5]  //Slice does not change the original array

const myn2 = newArray.splice(1, 3)      //splice manipulate/change the original array too and it includes the range(3) as well
console.log("C", newArray);       // C [0, 4, 5]
console.log(myn2);       //[1, 2, 3]
 

