//Evaluate these:
//#1
// [2] === [2] // false
// {} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 5
const object2 = object1; // 5
const object3 = object2; // 5
const object4 = { a: 5}; // 5, but this is a different object from object1 and all the variables that ref object1
object1.a = 4; // object1-3 : a: 4  //  object4 : a: 5


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
};


class mammal extends animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  personality() {
    let personality = [
      ['sassy', `I'm the next sensation, baby`], 
      ['normal', `Moooo...i guess`], 
      ['snobby', `Mooooove it or lose it, bucko.`], 
    ['friendly', `Do you have time to talk about grass?`]
    ];

    let rand = Math.floor(Math.random() * personality.length);
    return personality[rand][1];
  }

  sound() {
    console.log(`The name is ${this.name}. ${this.personality()}`);
  }
}

const firstCow = new mammal('Mirabelle', 'cow', 'pale brown with pink spots');
const secondCow = new mammal('Lunaria', 'cow', 'dark brown with light brown spots');

console.log(firstCow.sound());
console.log(secondCow.sound());
