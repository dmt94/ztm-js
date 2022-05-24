// ES8 (ES2017)

// string padding

console.log('Turtle'.padStart(10));
console.log('Turtle'.padEnd(10));

let obj = {
  username0: 'kirei',
  username1: 'mariesT',
  username2: 'alexJ',
  username3: 'hunky',
}

let newUsernames = Object.entries(obj).map(val => {
  return val[1] + '-' + val[0].replace('username', 'g00se');
});

console.log(newUsernames);

// a big es8 feature is Async Await 