function Person(name, age) {
  this.name = name;
  this.age = age;

  return 42;
}

const p1 = new Person("Nonna", 33);
console.log(p1);




/*
  This code demonstrates what happens when a constructor function explicitly returns
  a primitive value.

  1. `Person` is called with `new`, which:
     - Creates a new empty object.
     - Sets `this` to that new object.
     - Links it to `Person.prototype`.

  2. Inside `Person`:
     - `this.name` and `this.age` are set on the new object.
     - `return 42` tries to return a primitive value.

  3. Constructor return behavior:
     - If a constructor function explicitly returns an "object", that object replaces the default `this`.
     - If it returns a "primitive" (number, string, boolean, null, undefined, symbol, bigint),
       the return value is ignored and the newly created object is used instead.

  4. In this case:
     - `42` is a primitive number, so it is ignored.
     - The newly created object with `name` and `age` is returned.

  Output: Person { name: 'Nonna', age: 33 }
*/
