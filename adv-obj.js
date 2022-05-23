// reference type

let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 }; 

// context
// this = what is the current object environment
/* this = Window
this = what object it is inside of
*/

const object4 = {
  a: function() {
    console.log(this);
  }
}

// instantiation
/* make a copy of object and reuse code 

every time you make a copy of Player, constructor function 
gets run first and create properties on Player object

constructor = all the properties and methods you want
the "player"/class to have

super = runs the constructor function. you are not able to access "this"
before running super
*/

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }

  articles(category) {
    let vowels = ['a','e','i','o','u'];
    return vowels.includes(category[0].toLowerCase()) ? 'an' : 'a';
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm ${this.articles(this.type)} ${this.type}`);
  }
}

/* want Wizard to extend class Player */
class Wizard extends Player {
  constructor(name, type) {
    /* use super with properties you want to pass to constructor 
    will have access to this.name , this.type, etc.*/
    super(name, type)
  }
  play() {
    console.log(`WEEEEE I'm ${wizard1.articles(this.type)} ${this.type}`);
  }
}

const wizard1 = new Wizard('Kirei', 'Earth Healer');
const wizard2 = new Wizard('Hunkle', 'Air Mage');

wizard1.play();
wizard2.play();
wizard1.introduce();
wizard2.introduce();