// REVIEW

// Declaring variables

// standard variable 
let letVariable = 234;
// global variable 
var varVariable = "Hi!"
// constant we cannot change (through)
const constVariable = false;
// seems to behave like let
noVariable = 590n;

// const and let at the same but can't change const once declared 

// data types
/**
 * Number
 * String
 * Boolean
 * null undefined
 * BigIng
 * Symbol
 * 
 * Object
 * Array (still actually an object)
 */

let myArray = ['Biff', 123, true, null, undefined, 990n, Symbol('key'), {name: 'Lois'}, [123, 456, 789]];

let my2DArray = [ [1, 2, 3, ], [4, 5, 6], [7, 8, 9]];
console.log(my2DArray[1][1]);

// objects
let myObject = {
    name: 'My name',
    age: 123,
    favoriteSongs: ['in the club', 'get it'],
    favoriteColors: ['Black', 'Blue'],
    favoritePerson: {
        name: 'Amberose',
        alive: false
    }
}

console.log(myObject.favoriteSongs[1] + ' ' + myObject.favoritePerson.alive)
console.log(myObject.favoriteSongs[1], myObject.favoritePerson.alive)

// creating a function
// no return type, no typing of paramater
function myFunction(x, y, z) {
    // var aaa gets hoisted to the top, no matter how buried it is, prints undefined here because it is not yet initialized
    console.log(aaa);
    if (true) {
        if (true) {
            if (true) {
                while (true) {
                    // DONT USE VAR
                    // this create a function-scoped (global for the function) variable
                    var aaa = 3;
                    break;
                }
            }
        }
    }
    // still accessible throughout the function, even though the block in which its was created is gone
    console.log(aaa);
    // moral of the story don't use var

}

myFunction();
console.log();

function rectangleArea(height = 1, width = height) {
    console.log(height * width);
}

// CAN NOT DO THIS!!

// function rectangleArea(height, width, color) {
//    console.log(height, width, color);
// }
// we have "overloaded" this function to accect zero, one, the other, or both parameters
// we used default values and assigning values based on other values 
rectangleArea(2, 6);
rectangleArea(4);
rectangleArea();
rectangleArea(undefined, 6);

console.log();

const myCar = {
    make: 'Lamborghini',
    model: 'Diablo',
    color: 'Azure',

}

console.log(myCar);
myCar.topspeed = '200 mph';
myCar.features = ['Butterfly Doors', 'Quad Exhaust Tips', 'Heated Ejector Seats', 'Shift Gates', 'Second Mortage'];
console.log(myCar)

// deletes a properity 
delete myCar.topspeed;

console.log(myCar);
myCar.topspeed = '200 mph';

// when splicing and array (removing an item )
// the first number chooses the part to start at and second number means the amount to remove after
myCar.features.splice(2, 1);
console.log(myCar);


myCar.features.splice(2, 0, 'Heated Ejector Seats');
console.log(myCar);

// Array methods
/**
 * 
 * add something to the end = push
 * delete something from the end = pop
 * add something to the beginning = unshift
 * deletes something from the beginning = shift
 * clip something out and/or instert something = splice
 * copy all or some to a new array = slice
 */
myCar.features.shift(); // removes the first item completely
console.log(myCar);

myCar.features.unshift('15 inch Subs'); // 

console.log(myCar);





