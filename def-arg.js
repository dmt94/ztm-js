
let choiceA = ['majestic', 'awful', 'scary', 'beautiful', 'powerful'];
let rand = Math.floor(Math.random() * choiceA.length); 
let choice = choiceA[rand];

function greet(name='', age=28, pet='dragon', word) {
  return `Greetings from the Other World, ${name}... You are ${age} years old! 
  Wow. That's ancient. And your ${pet} looks absolutely ${word}...`;
}


