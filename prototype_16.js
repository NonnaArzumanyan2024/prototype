const arr = [];
console.log(arr.__proto__ == Array.prototype);




/*
  This code checks the relationship between an array instance and its prototype.

  1. `arr` is an empty array created with `[]`.
  2. Every array instance in JavaScript inherits from `Array.prototype`.
  3. `arr.__proto__` accesses the internal [[Prototype]] of the `arr` object.
  4. `Array.prototype` is the object that provides all array methods like `push`, `pop`, etc.
  5. Comparing `arr.__proto__` with `Array.prototype` returns `true` because:
     - `arr.__proto__` is exactly the same object as `Array.prototype`.
  
  Important note:
  - Although `__proto__` is widely supported, the standard way to access the prototype is:
    `Object.getPrototypeOf(arr)`.
  
  Output: true
*/
