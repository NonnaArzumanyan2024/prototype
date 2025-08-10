
class A {
}

class B extends A {
}

let source = Object.getPrototypeOf(A.prototype);
let target = B.prototype;
console.log(source == target); 




/*
  This code demonstrates prototype inheritance between ES6 classes.

  1. We define an empty class `A`.
  2. We define class `B` that `extends` (inherits from) class `A`.
  3. `A.prototype` is the prototype object of instances created by `A`.
  4. `B.prototype` is the prototype object of instances created by `B`.
  5. `Object.getPrototypeOf(A.prototype)` gets the prototype of `A.prototype`.
     - Since `A` is a base class without an explicit parent,
       `Object.getPrototypeOf(A.prototype)` is `Object.prototype`.
  6. The variable `source` stores `Object.getPrototypeOf(A.prototype)`.
  7. The variable `target` stores `B.prototype`.
  8. We compare `source == target` and log the result.

  What happens here:
  - `B.prototype`’s prototype is `A.prototype` because `B` extends `A`.
  - `Object.getPrototypeOf(A.prototype)` returns `Object.prototype`.
  - Therefore, `source` (which is `Object.prototype`) is NOT equal to `target` (`B.prototype`).
  - So the console.log prints `false`.

  Summary:
  - The prototype chain looks like this:
    B.prototype --> A.prototype --> Object.prototype --> null
  - `Object.getPrototypeOf(A.prototype)` gives the next step above `A.prototype`, which is `Object.prototype`.
  - Comparing `Object.getPrototypeOf(A.prototype)` and `B.prototype` returns false, because they are different objects.

  This example helps understand how ES6 class inheritance sets up the prototype chain.
  Output: false
*/




