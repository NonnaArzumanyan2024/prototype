function Person(name, age){
  this.name = name;
  this.age = age;
}

const p1 = Person("Nonna", 33);
console.log(p1.name); 





/*
  This code defines a constructor function `Person` that sets:
    - `name` property from the parameter
    - `age` property from the parameter

  Then, it calls `Person("Nonna", 33)` without the `new` keyword and assigns the result to `p1`.

  Important points:
  1. When calling a constructor function without `new`, the function is executed as a normal function.
  2. Inside `Person`, `this` refers to the global object (in non-strict mode), so
     `this.name` and `this.age` set global variables, NOT properties on a new object.
  3. The function `Person` does NOT return anything explicitly, so `p1` is `undefined`.
  4. Therefore, `p1.name` throws a "TypeError" because `p1` is `undefined` and does not have properties.

  To fix this, call the constructor with `new`:
  `const p1 = new Person("Nonna", 33)`

  Output: TypeError: Cannot read property 'name' of undefined
*/





