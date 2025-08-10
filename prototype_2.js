let p1 = new Array(1, 2, 3);
const r = Object.hasOwn(p1, "push");
console.log(r); 





/*
  This code demonstrates the difference between an object's own properties
  and properties inherited through the prototype chain.

  1. We create an array instance `p1` with elements [1, 2, 3] using `new Array(1, 2, 3)`.
  2. We use `Object.hasOwn()` to check if `p1` has its own property named `push`.
     - `push` is a method used to add elements to an array.
  3. Arrays inherit their methods like `push` from `Array.prototype`.
  4. Since `push` is NOT an own property of `p1` but inherited through the prototype,
     `Object.hasOwn(p1, 'push')` returns `false`.
  5. We log the result.

  Key points:
  - Own properties belong directly to the object itself.
  - Inherited properties come from the prototype chain.
  - `push` is inherited from `Array.prototype`, so it is NOT an own property of `p1`.

  Output: false
*/




