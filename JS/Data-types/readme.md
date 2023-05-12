# Data Types in JS:

## Primary Data Types

* Boolean
* Number
* String

## Comosite Data Types

* Array
* Objects

## Special Data Types

* Undefined
* Null

## Numbers

The simplest number is an integer. If you assign 1 to a variable, and then use the typeof operator, it returns the string number.

```
 var a = 1;
 typeof a;   // Number
 ```

 Numbers can also be floating point (decimals), for example:

 ```
 var b = 123.45;
 typeof b;   // Number
 ```

 ## Octal, Hexadecimal and binary:

 * When a number starts with a 0, it's considered an octal number. For example, the octal 0377 is the decimal 255.

* You can put 0x before a hexadecimal value. Example 0xff

* You can use 0b (or 0B) prefix to represent binary integers.

## Exponent literals:

1e1 (also written as 1e+1 or 1E1 or 1E+1) represents the number 1 with a 0 after it, or in other words, 10.


## Infinity:

There is a special value in JavaScript called Infinity. It represents a number too big for JavaScript to handle.


## NaN:
Not a Number, NaN is a special value that is also a number. You get NaN when you try to perform an operation that assumes numbers, but the operation fails. For example, if you try to multiply 10 by the character "f", the result is NaN.


## String:

A string is a sequence of characters used to represent text. In JavaScript, any value placed between single or double quotes is considered a string. This means that 1 is a number, but "1" is a string.
```
var s = "some characters";

typeof s;  // String
```

## Special Characters:

There are also strings with special meanings, as listed in the following table:

| String | Meaning |
| --- | --- |
| `\` | The \ is the escape character. When you want to have quotes inside your string, you can escape them so that JavaScript doesn't think they mean the end of the string. |
| `\n` | End of line. |
| `\t` | Tab |
| `\u` | The \u followed by a character code allows you to use Unicode. ex: "\u0421\u0442\u043E\u044F\u043D"; |


## Concatenation:
As you already know, when you use the plus sign with two numbers, this is the arithmetic addition operation. However, if you use the plus sign with strings, this is a string concatenation operation, and it returns the two strings glued together:
```
var s = 'web'+'site';
console.log(s)   //website
```

### Template Literals:

Template literals are string literals allowing embedded expressions.
 > Forget using double or single quotes to represent string and say 'hi' to backticks

 ```
 var myStr = ` Hello World `;
 ```

 ### Expressions/Variables interpolation (of course):

 Template literals can contain placeholders -- which are indicated as ${expression};

 ```
 let var a = 10;
let myStr = ` Addition with variable ${a + 10} `
```

## Coercion:

1. If you add a number and a string, the number is coerced to a string.

2. If you add a Boolean and a string, the Boolean is coerced to a string.

3. If you add a number and a Boolean, the Boolean is coerced to a number.

## Booleans:

There are only two values that belong to the Boolean data type-the true and false values used without quotes.

```
> var b = true; 
> typeof b; "boolean"
> var b = false; 
> typeof b; "boolean"
```

## Falsy Values:

These six values are referred to as falsy.

* The empty string ""

* null

* undefined

* The number 0

* The number NaN

* The Boolean false

## Undefined:

If you try to use a non-existing variable, you'll get the following error:

```
> foo;
ReferenceError: foo is not defined
```

Using the typeof operator on a non-existing variable is not an error. You will get the "undefined" string back, as follows:

```
 typeof foo; "undefined"
 ```

 If you declare a variable without giving it a value, this is, of course, not an error. But, the typeof still returns "undefined":

 ```
 > var somevar;
> somevar;
> typeof somevar; "undefined"
```

This is because, when you declare a variable without initializing it, JavaScript automatically initializes it with the undefined value, as shown in the following lines of code:

```
> var somevar;
> somevar === undefined; true
```

## Null:

The null value, is not assigned by JavaScript behind the scenes; it's assigned by your code, which is as follows:

```
> var somevar = null; null
> somevar;
null
```