function Car(model, price) {
  this.model = model;
  this.price = price;

  this.info = () => {
    return this.model;
  };
}

const p1 = new Car("BMW", 24000);
const p2 = new Car("Jeep", 42000);
console.log(p1.info == p2.info);




/*
  This code defines a constructor function `Car` that creates car objects with properties:
  - `model`
  - `price`
  and a method `info` defined as an arrow function inside the constructor.

  Explanation:
  1. Each time `Car` is called with `new`, a new object is created.
  2. Inside the constructor, the `info` method is created as a new arrow function per instance.
  3. Therefore, `p1.info` and `p2.info` are two different function instances.
  4. Comparing them with `p1.info == p2.info` returns `false` because they are distinct functions.

  Key point:
  - Defining methods inside the constructor creates a new function each time, increasing memory usage.
  - To share methods among all instances, methods should be defined on the prototype instead.

  Output: false
*/
