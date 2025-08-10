
function Foo() {
}

Foo.prototype.bar = () => {};

const c1 = new Foo();
const c2 = new Foo();

console.log(c1.bar === c2.bar); 





/*
  This code demonstrates sharing a method via the prototype.

  1. Define a constructor function `Foo`.
  2. Add a method `bar` to `Foo.prototype`. The method is an arrow function.
  3. Create two instances `c1` and `c2` using `new Foo()`.
  4. Compare if `c1.bar` and `c2.bar` reference the same function.

  Explanation:
  - Since `bar` is added to `Foo.prototype`, both instances inherit this exact same function.
  - Arrow function does NOT create a new function per instance here, it is shared on the prototype.
  - Therefore, `c1.bar === c2.bar` is `true`.

  Important note about arrow functions on prototypes:
  - Arrow functions do not have their own `this`.
  - When used on a prototype, `this` inside the arrow function is lexically bound to
    the scope where the prototype was defined (usually the global scope or module scope),
    which can cause unexpected behavior if you expect `this` to refer to the instance.

  Output: true
*/



