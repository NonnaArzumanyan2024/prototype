function Foo(x){
  this.x = x;
}

Foo.bar = function(){
  console.log("OK");
}

function Qux(a){
  Foo.call(this, a);
}

Object.setPrototypeOf(
  Qux.prototype,
  Foo.prototype
);

Qux.bar();




/*
  1. `Foo` is a constructor function that assigns `x` to instances.
  2. `Foo.bar` is a static method defined on the `Foo` function object itself, logging "OK".
  3. `Qux` is a constructor that calls `Foo` to inherit instance properties.
  4. `Object.setPrototypeOf(Qux.prototype, Foo.prototype)` sets the prototype chain for instances of `Qux` to inherit from `Foo.prototype`.
     This means instances of `Qux` inherit prototype methods from `Foo`.
  5. However, static methods like `bar` belong to the constructor function itself, not to its prototype.
  6. `Qux.bar()` tries to call `bar` on the `Qux` function object, but `Qux` does NOT inherit from `Foo` function object.
  7. This causes a TypeError: Qux.bar is not a function, because static inheritance is not set up.
  
  How to fix static inheritance:

  - Set the prototype of the constructor function `Qux` itself to `Foo`:

    ```
    Object.setPrototypeOf(Qux, Foo);
    ```

  This makes `Qux` inherit static methods like `bar` from `Foo`.

  Output: TypeError: Qux.bar is not a function
*/
