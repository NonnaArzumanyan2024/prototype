function Foo(x) {
  this.x = x;
}

Foo.prototype.check = function() {
  console.log("YES");
};

function Qux(a) {
  Foo.call(this, a);
}

Qux.prototype = Foo.prototype;

const a = new Qux(12);
a.check();




/*
  1. `Foo` is a constructor function assigning property `x` to the instance.
  2. `Foo.prototype.check` is a method that logs "YES".
  3. `Qux` is another constructor calling `Foo` inside it to inherit `x`.
  4. `Qux.prototype = Foo.prototype` makes `Qux` and `Foo` share the exact same prototype object.
     - This means any methods or properties on `Foo.prototype` are shared by `Qux.prototype`.
  5. An instance `a` is created using `new Qux(12)`.
  6. Since `a`'s prototype is `Foo.prototype`, it has access to `check()` method.
  7. Calling `a.check()` logs "YES".

  Important Notes:
  - Assigning `Qux.prototype = Foo.prototype` shares the prototype object, which can cause problems.
  - Modifying `Qux.prototype` would also modify `Foo.prototype` because they are the same object.
  - The usual and safer way is to set up prototype inheritance via:

    Qux.prototype = Object.create(Foo.prototype);
    Qux.prototype.constructor = Qux;

    This way, `Qux.prototype` is a new object inheriting from `Foo.prototype`, allowing safe overrides.
  
  Output: YES
*/
