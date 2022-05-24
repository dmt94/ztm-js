// ES10 (ES2019)
/* flat() method = used on arrays
returns new array - non-destructive
*/

const arr = [1, [2, ['apples', 'blueberries']], [4, [3, ['gold']]]];

console.log(arr.flat(50));


const entries = ['bob', 'sally',,,,,,'cindy'];
entries.flat(); // cleans up data with empty entries

// flatMap() allows flat and map function on array



const jurassicPark = [
  ['🦕', '🐊'],
  [[[['🦖']]]],
  ['🐊', '🐙', '🐋'], 
  [['🐢', '🐢', '🐢']],
  ['🦂', '🐍'],
];
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🦖');

console.log(jurassicParkChaos); //flattens to 1

// console.log(jurassicParkChaos.forEach(el => console.log(el)));

let usrProf = [['g00se21', 28], ['animalCrossing4ever', 18], ['coldHunk', 23]];

console.log(Object.fromEntries(usrProf));



// try catch block

try {
  console.log(bob + 'hi')
} catch (error) {
  console.log('boo failed. Error. ' + error)
}

