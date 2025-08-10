function Car(model, price) {
  this.model = model;
  this.price = price;

  this.info = () => {
    return this.model;
  };
}

const p1 = new Car("BMW", 24000);
const r = Object.hasOwn(p1, "info");
console.log(r);




/*
  This code demonstrates checking if an object has its own property (not inherited)
  using `Object.hasOwn`.

  1. The `Car` constructor:
     - Assigns `model` and `price` as properties directly on the new object created by `new`.
     - Defines `info` as an "arrow function" assigned directly to the instance 
       (not on `Car.prototype`).

  2. Creating `p1`:
     - `new Car("BMW", 24000)` creates an object with its own `model`, `price`, and `info` properties.

  3. `Object.hasOwn(p1, "info")`:
     - `Object.hasOwn(obj, prop)` returns `true` if `prop` exists "directly on `obj`" 
       and not via the prototype chain.
     - Since `info` was defined in the constructor, it’s a direct property of `p1`.
     - This check returns `true`.

  Key takeaway:
  - Methods defined in a constructor are "instance-specific".
  - Methods defined on the prototype are "shared" between instances.

  Output: true
*/
