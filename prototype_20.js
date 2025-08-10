function Person(name, age) {
  if (new.target) {
    // Called with 'new', so returns this new object instead of default instance
    return { a: name, b: age };
  }
  this.name = name;
  this.age = age;
}

const p1 = new Person("Nonna", 33);
console.log(p1);




/*
  This code demonstrates using `new.target` inside a constructor to detect if the function 
  was called with `new` and returning a custom object.

  1. `new.target` is truthy if the function is called with `new`.
  2. When called with `new`:
     - The constructor returns an object explicitly: `{ a: name, b: age }`.
     - When a constructor returns an object, that object replaces the default newly created instance.
     - So, `p1` is assigned to `{ a: "Nonna", b: 33 }`.
  3. If called without `new`:
     - `new.target` is `undefined`.
     - The function assigns properties `name` and `age` to `this`.
     - Without strict mode, `this` refers to the global object, so properties are assigned there.
     - Since the function doesn't return anything explicitly, `p1` will be `undefined`.

  Important notes:
  - Returning an object from a constructor called with `new` replaces the created instance.
  - Using `new.target` is useful to detect constructor calls and behave differently.
  - Always call constructors with `new` to avoid unexpected behavior.

  Output: { a: 'Nonna', b: 33 }
*/
