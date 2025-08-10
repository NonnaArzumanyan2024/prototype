function Person(name, age) {
  this.name = name;
  this.age = age;

  return {};
}

const p1 = Person("Nonna", 33);
console.log(p1);




/*
  This code demonstrates what happens when a constructor function explicitly returns an object
  and is called without the `new` keyword.

  1. The function `Person`:
     - Assigns `name` and `age` to `this`.
     - Returns an empty object `{}` explicitly.

  2. Since `Person` is called without `new`:
     - `this` refers to the global object (in non-strict mode).
     - Properties `name` and `age` are assigned to the global object.
     - The function returns `{}`, a new object.

  3. The return value of the function call is assigned to `p1`.
     - Because the function returns an object, `p1` becomes that object `{}`.
     - The properties assigned on the global object are not related to `p1`.

  4. Therefore, `console.log(p1)` prints `{}` — the empty object returned explicitly.

  Important notes:
  - When a constructor function is called with `new`, and it returns an object explicitly,
    that object replaces the newly created instance.
  - When called without `new`, `this` is the global object and the returned object is assigned to `p1`.
  - Assigning properties to the global object is generally undesirable.

  Output: {}
*/
