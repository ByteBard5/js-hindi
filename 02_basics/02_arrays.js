// lecture 15

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]
// marvel_heros.push(dc)         //push, pushes the element{ which is dc here} on the exiciting array
// console.log(marvel_heros);    //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]    Here thor = index 0, ironman = 1, spiderma = 2 and [ 'superman', 'flash', 'batman' ] = index 3 
// console.log(marvel_heros[3][1]);    //flash

// const allHeros = marvel_heros.concat(dc)     //concat return the new array. It does not pushes on the exiciting array
// console.log(allHeros);      //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc]
// console.log(all_new_heros);              //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// This is the spread operator which is same as concat but more useful. We can add one value in concat at a time but in spread we can add more value with [...(value1), ...(value2), ...(value3)]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// flat combines all the array in one single array
// const real_another_array = another_array.flat(Infinity)   //flat(we have to define deapth here),deapth = how many arrays in array do you want to combine in a single array
// console.log(real_another_array);    //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
                    // OR  //
// const real_another_array = another_array.flat(1)
// console.log(real_another_array);        //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]



// console.log(Array.isArray("Yash"));      //false     //it will check if "Yash" is present in the array or not
// console.log(Array.from("Yash"));         //[ 'Y', 'a', 's', 'h' ]    //it will just convert it in array
// console.log(Array.from({name: "Yash"}));    //[]   //it can not converted in array. and if it is not able to onvert it in array then it will gives the empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))     //[ 100, 200, 300 ]    