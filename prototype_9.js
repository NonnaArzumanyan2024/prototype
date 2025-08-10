function Person(name, age) {
   this.name = name;
   this.age = age;

   return 42;
}

const p1 = Person("Nonna", 33);
console.log(p1);




/*
  This code demonstrates what happens when a constructor function is called **without** the `new` keyword
  and also explicitly returns a primitive value.

  1. A function `Person` is defined with two parameters: `name` and `age`.
  2. Inside the function:
     - `this.name = name` attempts to set the `name` property on `this`.
     - `this.age = age` attempts to set the `age` property on `this`.
     - The function then returns the primitive value `42`.
  3. The function is called as `Person("Nonna", 33)` without `new`:
     - In non-strict mode, `this` inside the function defaults to `globalThis` (the global object: `window` in browsers, `global` in Node.js).
     - The properties `name` and `age` are therefore assigned to the global object.
     - Returning a primitive value (`42`) from a regular function call just means `p1` will hold that primitive.
  4. Since the call was not made with `new`, there is no instance created — `p1` simply receives the return value of the function, which is `42`.

  Important notes:
  - If called with `new`, `this` would refer to a newly created object, and returning a primitive would be ignored — the new object would be returned instead.
  - Returning a primitive from a constructor has no effect when using `new`.
  - Calling without `new` but expecting a constructed object is a common mistake.

  Side effect:
  - In non-strict mode, `globalThis.name` is now `"Nonna"` and `globalThis.age` is `33`.

  Output in strict mode:
  - A `TypeError` would be thrown because `this` is `undefined` and property assignments on `undefined` are invalid.

  Output in non-strict mode: 42
  */
