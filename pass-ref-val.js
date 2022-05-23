// Shallow Copy

/* Copy of nested objects will reflect on original and other copies */
let obj = {
  a: [['a', 'bc', 'cd'], 'b', 'c', {z: 'x'}],
  b:'b',
  c:'c',
  d: {name: 'hunkle'}
};

// deep copy
let superClone = JSON.parse(JSON.stringify(obj)); // declared before shallow copy edit
// deep cloning is not common, it takes long to copy everything.

//turn argument into a string, then parse it back into an object

console.log(superClone);

// Object.assign() (shallow copy)
let objCopy = Object.assign({}, obj);

// spread syntax (shallow copy)
let objCopy2 = {...obj};

objCopy.a = [['bbb', 'bc', 'cd'], 'b', 'c', {x: 'z'}];
objCopy.d.name = 'kirei';

console.log(objCopy);
console.log(obj);
console.log(objCopy2);
console.log(superClone); // hunkle

/* Copy of nested arrays will reflect on original */

let arr = [['a'], ['b'], ['c']];
let copyOfArr = arr.slice();

copyOfArr[1].push('d');

console.log(arr);
console.log(copyOfArr);

