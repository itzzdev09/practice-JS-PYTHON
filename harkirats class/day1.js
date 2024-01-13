// console.log("hello world!");
// console.log(a);


// var a = 1
// console.log(a);


// let a = 1;
// a = 2
// console.log(a);

// const a = 1;
// a = 2
// console.log(a);

// throws Error

// data types- strings const and bool

// let firstname = "Tesla";
// let age = 21;
// let ismarried = false;

// console.log("this persons name is " + firstname + " and his age is " + age)

// if (ismarried == false) {
//     console.log(firstname + " is not married);
// }
// if (ismarried == true) {
//     console.log(firstname + "is married");
// }


// loops

// let answer = 0;
// for(let i = 0; i <= 100; i++) {
//     answer = answer + i
// }
// console.log(answer);




// print the even ages in array


// const ages = [21,22,23,24,25,26,27,28,29,29]

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] % 2 == 0)
//     console.log(ages[i]);
// }


// const person1 = "dev"
// const gender1 = "male"

// const person2 = "Tesla"
// const gender2 = "male"

// const person3 = "devi"
// const gender3 = "female"

// const person4 = "dev"
// const gender4 = "male"


// or 

// const allusers = [{
//     firstname: "devraj",
//     gender: "male" 
// },{
//     firstname: "raman",
//     gender: "male",
//     metadata: {
//         age: 21,
//         address: ""
// }}, {
//     firstname: "mohini",
//     gender: "female"
// }]
// for(let i = 0; i < allusers.length; i++){
//     if(allusers[i] ["gender" ] == "male"){
//         console.log(allusers[i] ["firstname"])
// }
// }


function adds(n){
    let result = 0;
    for(let i = 1;i < n; i++){
        result += i }
    return result;
}
let result = adds(100)
console.log(result);

