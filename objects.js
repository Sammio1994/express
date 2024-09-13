// step 1

const { model } = require("mongoose")

// const myObj = {
//     name: "A",
//     age: 30, 
//     isAwesome: true,
//     details: {
//         computer_course: "Software",
//         Studied: "virtual",
//         attire: "casj",
//     }
// }

// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj.isAwesome);
// console.log(myObj.details.Studied);

// step 2

// const someObj = {
//     key: "value",
//     name: "Hercules",
//     codingIsFun: true,
// }
// console.log(someObj);
// console.log(someObj.name);
// console.log(someObj.key);

// step 3

// const favCharacter = "Robin Hood";

// const fav = {
//     fav: 123,
//     key: "value",
//     character: favCharacter,
//     codingIsFun: true,
//     details: {
//         Attire: "GreenCloak",
//         Outlaw: true,
//         Crime: "Robbing the rich feeding the the poor",
//     },
//     friends: ["banner", "cap", "LittleJohn"]
// };

// console.log(fav.fav);
// // console.log(fav.character);
// // console.log(fav.codingIsFun);
// // console.log(fav.details.Attire);
// // console.log(fav.details.Outlaw);
// // console.log(fav.details.Crime);
// console.log(fav.friends[2]);

// dynamic objects 

    // const value1 = "s"
    // const awesomeObj = {
    //     name: value1,
    //     age: "30",
    //     isAwesome: true,
    // }
const value1 = "alfa";
const value2 = "romeo";

const key1 = "car";
const key2 = "make";

const car = {
    [key1]: value1,
    key2: value2,
};

console.log(car);