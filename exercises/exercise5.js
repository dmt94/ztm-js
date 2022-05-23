// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
array.forEach(obj => console.log(obj.username + '!'));


//Create an array using map that has all the usernames with a "? to each of the usernames
const usernameQ = array.map(obj => obj.username + '?');
console.log(usernameQ);

//Filter the array to only include users who are on team: red
const teamRed = array.filter(obj => obj.team === 'red');
console.log(teamRed);

//Find out the total score of all users using reduce
const totalScore = array.map(obj => obj.score).reduce((acc, prev) => acc + prev);
console.log(totalScore);



// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newList = array.map(obj => {
  obj.items = obj.items.map(item => item + '!');
  return obj;
});

console.log(newList);