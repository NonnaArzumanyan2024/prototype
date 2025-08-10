class A {
}

class B extends A {
}

let source = Object.getPrototypeOf(B.prototype);
let target = A.prototype;
console.log(source == target); 




/*
  This code demonstrates how JS sets up the prototype chain when using `extends` in class declarations.

  1. A class `A` is declared. By default, `A.prototype` is created and inherits from `Object.prototype`.
  2. A class `B` is declared with `extends A`, meaning:
     - `B.prototype` is created and its internal [[Prototype]] is set to `A.prototype`.
     - This allows instances of `B` to inherit methods and properties from `A.prototype`.
  3. `Object.getPrototypeOf(B.prototype)` is called:
     - This function returns the object that is the [[Prototype]] of `B.prototype`.
     - In this case, it returns `A.prototype`.
  4. A direct reference to `A.prototype` is stored in `target`.
  5. The code compares `source` (result of `Object.getPrototypeOf(B.prototype)`) with `target` (`A.prototype`).
     - They reference the exact same object in memory.
     - Therefore, the comparison returns `true`.

  Output: true
*/
