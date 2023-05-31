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



# Function are data

* Functions are data, which means you can create a function and assign it to a variable
* This way of defining a function is sometimes referred to as function literal notation.
* A function expression can optionally have a name, in which case it becomes a named function expression(NFE).


# Anonymous Function:
* As you know function expression can be defined without name, this is also often called an anonymous function, especially when such a function expression used even without assigning it to a variable.

* There can be two elegant uses for such anonymous function.

### 1. Self Executing or Immediate Functions
* You can define an anonymous function and use it right away.
### 2. Callbacks
* As a function is just like any other data assigned to a variable, it can be defined, copied and also passed as an argument to other functions.


# Scoping
*  It is a region of the program where a variable can be accessed. In other words, scope determines the accessibility/visibility of a variable.

* There’re 3 kinds of scopes in JavaScript:

* 1. **Global scope:**   Variables declared outside of all functions are known as global variables and in the global scope. Global variables are accessible anywhere in the program.

* 2. **Function scope:** Variables that are declared inside a function are called local variables and in the function scope. Local variables are accessible anywhere inside the function. 

* 3. **Block scope:** Variable that is declared inside a specific block & can’t be accessed outside of that block. In order to access the variables of that specific block, we need to create an object for it.

* The code inside a function has access to:

(i)  _the function’s arguments._

(ii)_local variables declared inside the function._

(iii)_variables declared in its parent function’s scope._

(iv) _global variables._

***Note: Block scope is related to variables declared with `let` and `const` only. Variables declared with `var` do not have block scope.***

Example:

```
{
    let a = 3;
    var b = 2;
}

console.log(a);   //Uncaught ReferenceError
console.log(b);   // 2
```


