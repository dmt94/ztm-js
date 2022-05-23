// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};


// Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
let firstName2 = 'Hunkle';
let city = 'Riverside';
let message = `Hello ${firstName2}! Have I met you before? I think we met in ${city} last summer, no?`;

console.log(message);


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"

let symbol = Symbol('This is my first symbol');
console.log(symbol);

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}