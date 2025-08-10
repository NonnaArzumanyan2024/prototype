class A {
  static foo() {
    console.log("OK");
  }
}

class B extends A {
}

B.foo();




/*
  1. `A` is a class with a static method `foo`.
     - Static methods belong to the class (constructor function) itself, not to instances.
  2. `B` is a class that extends `A`.
     - By using `extends`, `B` inherits both instance methods and static methods from `A`.
  3. Calling `B.foo()` invokes the static method `foo` inherited from `A`.
  4. This prints "OK" to the console.

  Output: OK
*/
