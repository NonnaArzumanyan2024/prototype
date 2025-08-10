function foo() {
}

console.log(foo.__proto__.__proto__);




/*
  This code explores the prototype chain of a function object in JS.

  1. `foo` is a regular function declaration.
  2. In JavaScript, functions are objects, so `foo` has a prototype:
     - `foo.__proto__` is the prototype of the function `foo` itself.
     - Since all functions inherit from `Function.prototype`, `foo.__proto__` is `Function.prototype`.
  3. `foo.__proto__.__proto__` accesses the prototype of `Function.prototype`.
  4. `Function.prototype` itself is an object, and its prototype is `Object.prototype`.
  5. Therefore, `foo.__proto__.__proto__` is `Object.prototype`.

  Output:
  [Object: null prototype] {}
  (or simply the representation of `Object.prototype`)
*/
