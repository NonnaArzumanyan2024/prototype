function Person(name, age){
  this.name = name;
  this.age = age;
}

const p1 = Person("Nonna", 33);
console.log(globalThis.name);




/*
  This code defines a constructor function `Person` that sets:
    - `name` property on `this` from the parameter
    - `age` property on `this` from the parameter

  Then, `Person("Nonna", 33)` is called without the `new` keyword,
  so it runs as a normal function, not a constructor.

  Important points:
  1. Without `new`, `this` inside `Person` refers to the global object (`globalThis` in modern JS).
  2. So `this.name = name` sets `globalThis.name` to `"Nonna"`.
  3. Similarly, `this.age = age` sets `globalThis.age` to `33`.
  4. The function does not return anything explicitly, so `p1` is `undefined`.
  5. `console.log(globalThis.name)` prints `"Nonna"` because the global `name` property was set.

  Summary:
  - Calling constructor functions without `new` assigns properties to the global object,
    which can cause bugs and unexpected behavior.
  - Always use `new` when calling constructor functions.

  Output: Nonna
*/





