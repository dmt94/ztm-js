const first = () => {
  const greet = 'hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
// newFunc();

// Closures - same concept as scopes 
// inner scopes have access to outer scopes (variables declared), but not the other way around
// function runs , function excecuted, necer going to execute again,
// but it is going to remember that there are references to those variables
// so that the child scope always have access to the parent scope

// Currying (changing function to accept one parameter at a time)
/* is a process of converting a function that takes multiple arguments
that takes them one at a time 

Why? 
- it allows the function to be more "extendable"
const multiplyBy5 = curriedMultiply(5);
*/
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3); // returns (b) => a * b;
curriedMultiply(3)(4); // returns 12;

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5); // 25
multiplyBy5(10); // 50




//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); // 7


// Avoiding Side Effects, functional purity
// something that a function is doing that affects the external
// need return, by avoiding side-effects and always returning
// we are creating DETERMINISTIC action
// simple. minimize side-effects and have functional purity

