function Foo(x) {
  this.x = x;
}

Foo.prototype.check = function() {
  console.log("YES");
};

function Qux(a) {
  Foo.call(this, a);
}

const a = new Qux(12);
a.check();




/*
  1. `Foo` is a constructor function that assigns property `x` to the instance.
  2. `Foo.prototype.check` is a method that logs "YES".
  3. `Qux` is another constructor function that calls `Foo.call(this, a)` to inherit properties.
  4. However, `Qux.prototype` is NOT set to inherit from `Foo.prototype`.
  5. Therefore, instances created with `new Qux()` do NOT inherit methods from `Foo.prototype`.
  6. When calling `a.check()`, JavaScript looks for `check` on `a` and its prototype chain.
  7. Since `a`’s prototype is `Qux.prototype`, which has no `check` method, this throws:
     `TypeError: a.check is not a function`.

  How to fix:

  - Set up inheritance so `Qux.prototype` inherits from `Foo.prototype`:

    ```
    Qux.prototype = Object.create(Foo.prototype);
    Qux.prototype.constructor = Qux;
    // or
    Object.setPrototypeOf(Qux.prototype, Foo.prototype);
    ```

  Then calling `a.check()` will work as expected.

  Output: TypeError: a.check is not a function
*/