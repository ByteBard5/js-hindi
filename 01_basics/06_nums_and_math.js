// LECTURE - 12

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);

// console.log(balance.toFixed(2)); //value after point


// const otherNumber = 11.982634
// console.log(otherNumber.toPrecision(2));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++
// console.log(Math);

// console.log(Math.abs(-4)); //convert the minus value in plus
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // Gives the upper value
// console.log(Math.floor(4.9)); //gives the lower value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.random() * 10);  //the output can also  be like 0.01 so to avoid it we do +1
console.log((Math.random()*5) + 1);
console.log(Math.floor(Math.random()*6)+1); 


const min = 10
const max = 20

console.log(Math.random() * (max-min + 1)) ;
console.log(Math.floor(Math.random() * (max - min + 1))); // it will give the output in single digit
console.log(Math.floor(Math.random() * (max - min + 1)) + min ); // if we want the which is bigger than the minimum value (which is 10 here) then we just add min in the last