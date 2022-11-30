// BOOLEANS in JAVASCRIPT

/**
 * Many of our established pieces of syntax from Java work exactly the same in JavaScript
 * 
 * ... with an interesting exception
 */

if (true) {
    console.log("Print this if true.");
}

// we do not get errors for unreachable code
if (false) {
    console.log('Print: nope!');
}

if ((3 + 2) * 5 / 2 == 12.5) {
}

// this prints true...why?
if (2 == '2') {
    console.log('Print this if 2 is the answer');
}

/**
 * What happens is that JavaScript does something called 'coercion' to force values into comparable states when applicable 
 * 
 * This CAN make certain things easier, like comparing an input string from a web form to a balue sotred as a number 
 */

 if (2 === '2') {
    console.log('Print this if 2 is the answer');
}

/**
 * JS STRICT EQUALITY OPERATOR
 * 
 * = defines the value 
 * 
 * == just compares the values not the datatypes 
 * 
 * The third = compares the data types (===)
 * 
 * This does two things:
 * 
 * is 2 == '2'? (YES)
 * is typeof 2 == type of '2'
 */

// booleans are not coerced from strings
if (true == 'true') {
    console.log('Print this if ture == "true"');
}
// string not equeals operator is !==
if (true !== 'true') {
    console.log('Print this if ture == "true" ');
}

// not operator works just like it does in Java
if (true === !false) {
    console.log( 'Gotcha bitch!')
}

// will not print as they as null not === undefined as they are different datatypes
if (null === undefined) {
    console.log('Print this if null === undefined');
}
// but null DOES == undefined...because null is basically undefined 
if (null == undefined) {
    console.log('Print this if null == undefined');
}

console.log();

let testVariable = null;

if (testVariable) {
    console.log(`${testVariable} is true`);
} else {
    console.log(`${testVariable} is false`)
}

/**
 * TRUTHY AND FALSY
 * 
 * JavaScript processes booleans as you wold expect.
 * 
 * But it also safeguards against breaking the app given certain input paramaters by assigning a boolean value to just about everything
 * 
 * Falsy Values: values that will always comeback as false
 * false
 * 0
 * 0.0
 * -0
 * ''
 * undefined
 * null
 * NaN (not a number)
 * !true (or not anything that's truthy)
 * 
 * Truthy Values: anything thats not falsy (false)
 * 
 * true 
 * !false
 * any number that isn't some variant of 0
 * 'asdfsf'
 * '0', 'false', etc -- any string that isn't empty
 * [] -- all arrays, empty or otherwise
 * {} -- all objects, empty or otherwise
 * 
 */

/**
 * EXPLICIT CASTING
 * 
 * we can use Number(), String() and Boolean() to explicity cast values as those types
 * 
 */

//this cast the string '5' as the number 5
let five = Number('5');
console.log(five);

// this casts the number 10 as the string '10'
let ten = String(10);
console.log(ten);

// this cast a truthy value as the boolean true
let booleanTrue = Boolean('0'); //truhty value just 0 would return false
console.log(booleanTrue);

// this cast a falsy value as the boolean false
let booleanFalse = Boolean(NaN); //prints true !(not)NaN NaN would print false
console.log(booleanFalse);

console.log();

/**
 * The ternary operator exists in JS and functions the same as in Java
 * 
 * But there is another shorthand which can be useful
 * 
 *
 * The ternary operator exists in JS and functions the same as in Java
 * 
 * But there is another shorthand which can be useful
 */

// same syntax -- boolean statement ? if true use this : if false use this
let ternaryValue = ( (2 < 4) ? true : false );
console.log(ternaryValue);


// if the first statement evaluates to something truthy, assign that value to the variable
// if not, assign the second value to the variable
let shorthandValue = ( (2 - 1) || (2 + 1) );

// same thing longhand
let longHandValue = ( ((2-1) == true) ? (2 - 1) : (2 + 1) )

console.log(shorthandValue);
console.log(longHandValue);

console.log();

function dosage(mgOfCaffeine) {
    // we COULD do this
    // if (mgOfCaffeine == null)

    // this takes our function-scoped variable mgOfCaffeine and either assigns in the input value if it's truthy or 0 if it's not
    mgOfCaffeine = (mgOfCaffeine || 0);
    console.log(`I'm gonna need ${mgOfCaffeine}mg of caffeine for this lecture.`)
}

dosage(300);

/**
 * A NOTE ABOUT TEMPLATE STRINGS
 * 
 * You can run logic, including calling other functions, from with in the ${} of a template string.
 */

function printArray(myArray) {
    // this reassigns the input array to myArray if it exists (empty array is still truthy) or the default array if it doesn't
    myArray = (myArray || [1, 2, 3]);
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

// printArray();
// printArray([]);
printArray([4, 5, 6]);
// prints nothing
printArray(10);
// prints the characters since a string is an array of characters
printArray('Hello World!');