function Person(name, age) {
  this.name = name;
  this.age = age;

  return {};
}

const p1 = new Person("Nonna", 33);
console.log(p1);




/*
  This code demonstrates what happens when a constructor function explicitly returns an object,
  and it is called with the `new` keyword.

  1. The `Person` constructor is called with `new`:
     - A new object is created.
     - `this` inside the function refers to the new object.
     - `name` and `age` properties are assigned to `this`.
  2. The constructor explicitly returns an object (`{}`).
  3. When a constructor returns an object, that object replaces the newly created instance.
  4. Therefore, `p1` is assigned the returned empty object `{}`, not the object with `name` and `age`.
  5. The properties assigned on `this` (`name` and `age`) are effectively discarded.
    
  Important notes:
  - Returning a primitive value from a constructor is ignored, but returning an object replaces the instance.
  - This behavior allows constructors to override the created object if needed.

  Output: {}
  */
