function Car(model, price) {
  this.model = model;
  this.price = price;

  this.info = () => {
    return this.model;
  }
}

const p1 = new Car("BMW", 24000);
const r = "info" in p1;
console.log(r);  




/*
  This code defines a constructor function `Car` that creates car objects with:
    - `model` property set from the parameter
    - `price` property set from the parameter
    - `info` method defined as an arrow function returning the `model`

  Key points:
  1. The `info` method is created inside the constructor for each instance,
     so each `Car` object gets its own separate copy of this function.
  2. The `"info" in p1` checks whether the property `info` exists in the `p1` object
     or anywhere in its prototype chain.
  3. Since `info` is an "own property" (defined directly on `p1`),
     `"info" in p1` returns `true`.
  
     The console logs `true`.
*/





