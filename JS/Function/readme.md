# Function

* Function allows you to group together a code, give it a name, and reuse it later.
* It helps to follow DRY(Do not Repeat Yourself) rule.

## Function Declaration

* A function definition (also called a function declaration, or function statement) consists of the function keyword.
* It just one way to create a function in JS.

## Parts that make-up function:

1. Function keyword
2. Name of the function.
3. Function Parameter: A function can take any number of parameters or no parameters, seprated by comma.
4. Code block, also called as body.
5. The return statement, A function always returns a value. If it doesn't return a value explicitly, it implicitly returns the value *undefined*.

Syntax:
```
function square(number) {
  return number * number;
}
```


## Parameters:

1. When defining a function, you can specify what parameters the function expects to recieve when its called.

2. Functions may not require a parameter, but if it does, and you forget to pass them, JS will assign the undefined value to the ones you skipped.

3. If you pass more than the function expects, the extra one will be silently ignored.


## Function Argument:
* *arguments* is an array-like object accessible inside functions that contains the values of the arguments passed to that function.

* its an object but have properties of array.


## Calling a function:

* Defining a function does not execute it. Defining it names the function and specifies what to do when the function is called.

* Calling the function actually performs the specified actions with the indicated parameters.

Syntax:
```
add(arguments);
```


