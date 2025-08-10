function Foo(x) {
  this.x = x;
}

Foo.prototype.check = function() {
  console.log("YES");
};

function Qux(a) {
  Foo.call(this, a);
}

Qux.prototype.check = function() {
  console.log("NO");
};

Qux.prototype = Foo.prototype;

const a = new Qux(12);
a.check();




/*
  1. `Foo` is a constructor function that assigns `x` to the instance.
  2. `Foo.prototype.check` is a method logging "YES".
  3. `Qux` is another constructor calling `Foo` inside it to inherit properties.
  4. `Qux.prototype.check` is initially assigned a function logging "NO".
  5. Then `Qux.prototype = Foo.prototype` reassigns `Qux.prototype` to be exactly `Foo.prototype`.
     - This overwrites the previous `Qux.prototype.check` method with the one on `Foo.prototype`.
  6. So after the assignment, both `Qux.prototype` and `Foo.prototype` are the same object.
  7. Creating `a` with `new Qux(12)` produces an instance linked to `Foo.prototype`.
  8. Calling `a.check()` calls `Foo.prototype.check` which logs "YES".

  Important points:
  - Assigning `Qux.prototype = Foo.prototype` means both share the same prototype object.
  - The method `Qux.prototype.check` defined earlier is lost.
  - This is generally a mistake — if you want inheritance, you should set up prototype chaining properly:
    
    Qux.prototype = Object.create(Foo.prototype);
    Qux.prototype.constructor = Qux;
    Qux.prototype.check = function() {
      console.log("NO");
    };
    
  - This way, `Qux` inherits from `Foo`, but can override methods safely.

  Output: YES
*/
