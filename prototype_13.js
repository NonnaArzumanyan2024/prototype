function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Nonna", 33);
console.log(p1.name);




/*
  This code defines a constructor function `Person` that creates objects with `name` and `age` properties.

  1. When `new Person("Nonna", 33)` is called:
     - A new empty object is created.
     - `this` inside the constructor points to the new object.
     - The `name` and `age` properties are assigned to this new object.
     - The new object is returned implicitly.

  2. `p1` now holds this new object with properties:
     - `name: "Nonna"`
     - `age: 33`

  3. `console.log(p1.name)` outputs the `name` property of the new object.

  Output: Nonna
*/
