const basket = ['apples', 'oranges', 'grapes'];

const picnic = {
  meals: [
    'monte cristo sandwich', 
    'mango salad', 
    'vegan chicken lettuce wraps'
  ],
  appetizer: [
    'sausage rolls', 
    'deviled eggs',
    'mini bruschetta'
  ],
  fruits: [
    'blueberries', 
    'oranges', 
    'apples'
  ],
  sweets: 'chocolate eclairs',
  drinks: [
    {juice: ['lemonade', 'peach mint iced tea']},
    {dairy: 'strawberry milk tea'}, 
    {other: [
        'water', 
        'english garden cocktail'
      ]
    }
  ]
};

for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

basket.forEach(item => {
  console.log(item);
});

// iterating - arrays, string (object properties are NOT iterable)

for (let char of 'basket') {
  console.log(char);
}

//array - iterable
for (let item in basket) {
  console.log(item);
}

//object - enumerate , bc properties of an object are "enumerable"
for (let item in picnic) {
  if (!Array.isArray(picnic[item])) {
    console.log(picnic[item]);
  }
}


