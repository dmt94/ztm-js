// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
// turtle will look like it is speeding ahead. trim removes whitespace. 
// the addition of the second argument "=" for the padEnd method will add the string '=' after the turtle
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// to this:
'my name is Rudolf the raindeer'

/*
[[my, name], [is, rudolf], [the, reindeer]]
*/

let sentence = Object.entries(obj).map(arr => arr.join(' ')).join(' ');
console.log(sentence);