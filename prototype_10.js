const source = Object.getPrototypeOf(Array);
const target = Object.getPrototypeOf([1, 2, 3]);
console.log(source == target);




/*
  This code demonstrates that the prototype chains of JS "constructor functions" 
  and "instances" are different, and comparing them directly often yields `false`.

  1. `Object.getPrototypeOf(Array)`:
     - `Array` here is the built-in "constructor function" for arrays.
     - The prototype of a function (constructor) is usually `Function.prototype`.
     - So, `source` will be `Function.prototype`.

  2. `Object.getPrototypeOf([1, 2, 3])`:
     - `[1, 2, 3]` is an "array instance".
     - The prototype of an array instance is `Array.prototype` — 
       the object where all array instance methods like `push`, `pop`, `map`, etc. are defined.
     - So, `target` will be `Array.prototype`.

  3. When we compare `source == target`:
     - `Function.prototype` is "not" the same object as `Array.prototype`.
     - Therefore, the comparison is `false`.

  Key takeaway:
  - "Constructor function's prototype chain" starts from `Function.prototype`.
  - "Instance's prototype chain" starts from that constructor’s `.prototype` object.

  Output: false
*/
