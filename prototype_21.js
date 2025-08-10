let p1 = new Array(1, 2, 3);
let p2 = new Array(4, 5, 6);
console.log(p1.push == p2.push);




/*
  This code checks whether the `push` method is the same function for two different array instances.

  1. `p1` and `p2` are two separate arrays created with `new Array(...)`.
  2. Both arrays inherit methods from `Array.prototype`, including `push`.
  3. When accessing `p1.push` or `p2.push`, the method is not stored directly on the arrays,
     but looked up via the prototype chain on `Array.prototype`.
  4. Since both `p1.push` and `p2.push` refer to the exact same function on `Array.prototype`,
     the comparison `p1.push == p2.push` returns `true`.

  Key takeaway:
  - Methods are shared via prototypes, not duplicated on every instance.
  - This saves memory and ensures consistent behavior across instances.

  Output: true
*/
