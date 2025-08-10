function Foo() {
  this.count = 0;
}

Foo.prototype.put = function() {
  this.count++;
}

function Qux() {
  this.count = 10;
}

Qux.prototype.put = function() {
  this.count--;
}

const p1 = new Qux();
Object.setPrototypeOf(p1, Foo.prototype);
p1.put();
console.log(p1.count);




/*
  1. `Foo` constructor sets `count` to 0; its prototype has a method `put` that increments `count`.
  2. `Qux` constructor sets `count` to 10; its prototype has a method `put` that decrements `count`.
  3. `p1` is created as an instance of `Qux`, so initially:
     - `p1.count` is 10
     - `p1`'s prototype is `Qux.prototype` which has the `put` method that decrements `count`.
  4. `Object.setPrototypeOf(p1, Foo.prototype)` changes the prototype of `p1` to `Foo.prototype`.
     Now, when `p1.put()` is called, it uses `put` from `Foo.prototype`, which increments `count`.
  5. Calling `p1.put()` increments `count` from 10 to 11.

  Important notes:
  - Changing the prototype of an existing object at runtime is generally discouraged because it can hurt performance.
  - The method called depends on the prototype chain of the instance at call time.
  - `p1.count` is own property of the object, unaffected by prototype change.

  Output: 11
*/
