const arr = [];
const p = Object.getPrototypeOf(arr);
console.log(p == Array.prototype);




/*
  This code checks the prototype of an array instance.

  1. `arr` is an empty array created using `[]`.
  2. `Object.getPrototypeOf(arr)` returns the internal prototype (`[[Prototype]]`) of the `arr` object.
  3. For arrays, this prototype is `Array.prototype`, which contains methods like `push`, `pop`, etc.
  4. The comparison `p == Array.prototype` checks if the prototype of `arr` is exactly `Array.prototype`.
  5. Since it is true, this confirms that all arrays inherit from `Array.prototype`.

  Output: true
*/
