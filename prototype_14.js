function Person(name, age) {
  if (new.target) {
    return { a: name, b: age };
  }
  this.name = name;
  this.age = age;
}

const p1 = Person("Nonna", 33);
console.log(p1);




/*
  This code demonstrates the use of `new.target` to distinguish between calls
  made with or without the `new` keyword.

  1. Inside the constructor `Person`:
     - `new.target` is defined only when the function is called with `new`.
     - If called with `new`, the condition `if(new.target)` is true.
     - The function returns a new object `{a: name, b: age}` explicitly.

  2. If called without `new`:
     - `new.target` is undefined.
     - The function assigns `name` and `age` properties to `this`.
     - Without strict mode, `this` refers to the global object (e.g., `window` or `global`).
     - So it sets `globalThis.name` and `globalThis.age`.

  3. The variable `p1` stores the return value of the call.
     - Since `Person` is called **without** `new`, the return value is `undefined` (no explicit return),
       so `p1` is `undefined`.

  Side effect:
  - In non-strict mode, `globalThis.name` becomes `"Nonna"`.
  - `globalThis.age` becomes `33`.

  Important notes:
  - Using `new.target` is a good practice to detect constructor calls.
  - Always call constructor functions with `new` to get a new object instance.

    Output: undefined
*/
