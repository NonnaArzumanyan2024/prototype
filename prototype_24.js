class A {
}

class B {
  foo() {
    console.log("YES");
  }
}

A.prototype = B.prototype;

let a = new A();
a.foo();




/*
  ran this code in Node.js: TypeError: a.foo is not a function

  Why?

  - `A.prototype = B.prototype`, both classes share the same prototype object.
  - But class declarations in JavaScript automatically create a prototype with a non-configurable 'constructor' property.
  - Assigning `A.prototype = B.prototype` breaks the internal class prototype setup.
  - Also, after this assignment, the `constructor` property on `A.prototype` points to `B`, but that’s a minor issue.
  - The main issue is that Node.js (and modern JS engines) enforce that class instances have a special internal slot.
  - When you create `a = new A()`, it expects `foo` to be defined properly on `A.prototype`.
  - However, due to how classes are implemented, simply assigning `A.prototype = B.prototype` does not properly link the prototype chain internally.
  - This leads to the instance `a` not having access to the `foo` method, resulting in the error.

  How to fix it?

  - Instead of direct assignment, use `Object.setPrototypeOf` or `Object.create` to set up inheritance properly.
  - For example:

    ```
    class A {}
    class B {
      foo() {
        console.log("YES");
      }
    }
    A.prototype = Object.create(B.prototype);
    A.prototype.constructor = A;

    let a = new A();
    a.foo(); // Works correctly
    ```
*/
