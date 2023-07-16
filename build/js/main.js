"use strict";
//------------------BASIC TYPES ---------------------------------
// let myName: string;
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: any;
// myName = 'Milan';
// isLoading = true;
// album = 3211
// const sum = (a: number, b: string) => {
//   return a + b;
// };
// let postId: string | number
// let isActive: number | boolean
// let re: RegExp = /\w+/g
//--------------------ARRAY AND OBJECTS----------------------------
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 4122];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Milan';
stringArr.push('AAA');
guitars[0] = 321;
// guitars = stringArr
let test = [];
let bands = [];
bands.push('Nepal');
// Tuple
let myTuple = ['Nepal', 42, true, 'China'];
let mixed = ['Jhon', 1, false];
// console.log(myTuple);
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Alex',
    prop2: 22,
    prop3: true,
};
let evh = {
    name: 'Rahul',
    active: false,
    albums: ['Nepal', 221, 'China', 21],
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'III'],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(evh));
