function Foo(x){
  this.x = x;
  this.check = function(){
     console.log("YES");
  }
}

function Qux(a){
  Foo.call(this, a);
}

const a = new Qux(12);
a.check();




/*
  1. `Foo` is a constructor function that assigns property `x` and defines method `check` directly on the instance.
  2. `check` is created inside the constructor, so each instance gets its own copy of this function.
  3. `Qux` is another constructor that calls `Foo.call(this, a)` to inherit the properties and methods.
  4. Since `check` is assigned inside the constructor, instances of `Qux` also get `check` method.
  5. When `a.check()` is called, it logs "YES" as expected.

  Output: YES
*/
