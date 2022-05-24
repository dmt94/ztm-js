// BigInt

// Max_safe_int

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// higher than this number means calculation gets off
/* There is a limit on how much we can store in memory
There is a certain number it can hold.

BigInt is used when we want to calculate numbers bigger than max_safe_int
 */

console.log(9007199254740991n + 10n); // works
console.log(9007199254740991 + 10); // wonky



// Chaining operator ?
let kirei = {
  primarina: {
    type: ['fairy', 'water'],
    name: 'Sirena',
    color: 'aquamarine',
    // hidden_ability: 'liquid voice',
    hidden_ability: ''
  },
  zacian: {
    type: ['fairy', 'steel'],
    name: 'Zacharian',
    color: 'light blue' 
  },
  latios: {
    type: ['dragon', 'psychic'],
    name: 'Helios',
    color: 'lavender' 
  },
  cinderace: {
    type: 'fire',
    name: 'Rengoku',
    color: 'white and crimson red' 
  },
  sprigatito: {
    type: 'grass',
    name: 'Aiah',
    color: 'green' 
  },
};

let hunkle = {
  luxray: {
    type: 'electric',
    name: 'Smokes',
    color: 'black and dark blue',
    hidden_ability: ''
    // power: 0,
  },

  blaziken: {
    type: ['fire', 'fighting'],
    name: 'Kiro',
    color: 'cream, black, and red' 
  },
};

// Can check for existence of properties with '?' es2020

let kHasLuxray = kirei?.luxray?.name;
console.log(kHasLuxray); //undefined

let hHasLuxray = hunkle?.luxray?.name;
console.log(hHasLuxray); //Smokes



// Nullish Coalescing Operator ?? - checks if null or undefined, not truthy
let kHasPrimarinaHidden = kirei?.primarina?.hidden_ability || 'no hidden ability';
// if not truthy, then false. Empty string and 0 is falsy.

console.log(kHasPrimarinaHidden);

let hHasLuxrayHidden = hunkle?.luxray?.hidden_ability ?? 'no hidden ability';
console.log(hHasLuxrayHidden); //empty string

let hLuxrayPower = hunkle?.luxray?.power ?? '[power stat not available]';
console.log(`Luxray power stat is: ${hLuxrayPower}`); //0