"use strict";

function foo() {
}

foo.name = "bar"; 
console.log(foo.name);




/*
  This code demonstrates a common mistake when trying to assign a value to a function's `name` property.

  1. The "use strict" directive enables strict mode, which enforces stricter parsing and error handling.
  2. A function `foo` is declared.
  3. The code attempts to assign `bar` to `foo.name` without quotes.
     - `bar` here is interpreted as an undefined variable (not a string).
  4. Because `bar` is not defined anywhere, this causes a ReferenceError.
  5. Additionally, the `name` property of functions is read-only and non-writable,
     so even if you try `foo.name = "bar"`, in strict mode it will not change the function's name,
     and may throw an error or silently fail depending on the environment.

  To correctly check or set the name, you should:
  - Use `foo.name` (read-only) to get the function's name.
  - You cannot directly change `foo.name` by assignment.

  Output: ReferenceError: bar is not defined
*/




