function Person(name, age) {
  if (new.target) {
    return 42;
  }

  this.name = name;
  this.age = age;
}

const p1 = new Person("Nonna", 33);
console.log(p1);




/*
  This code demonstrates the behavior of constructor functions using `new.target`
  and returning a primitive value explicitly.

  1. `new.target` is defined only if the function is called with `new`.
     - If called with `new`, the condition `if(new.target)` is true.
     - The function returns the primitive number `42`.

  2. When a constructor returns a primitive value explicitly, it is ignored,
     and the newly created object is returned instead.

  3. Therefore, even though `42` is returned inside the constructor,
     the value assigned to `p1` is the newly created object (with no properties set,
     since `this.name` and `this.age` assignments are skipped after the return).

  4. In this case, `p1` is an empty object, an instance of `Person`.
  
  Important notes:
  - Returning a primitive from a constructor is ignored.
  - Returning an object would replace the newly created instance.
  - The constructor’s property assignments after `return` are skipped.

  Output: Person {}
*/
