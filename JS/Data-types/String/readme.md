
# String

* JavaScript strings are for storing and manipulating text.

* A JavaScript string is zero or more characters written inside quotes.


```
let text = "John Doe";  // John Doe
```

## Escape Characters used in String:
* The backslash (\) escape character turns special characters into string characters:

| Code | Result | Description
| ---- | ----- | -------- |
| \'   |   '   | Single Quote |
| \"   |   "   | Double Quote |
|  \\\  |  \    | Backslash   |

```
let text= 'It\'s alright.';
output:  It's alright.
```


## Built-in Methods:

### 1. String Length:
The length property returns the length of a string.

### 2.String Slice:
slice() extracts a part of a string and returns the extracted part in a new string. 
The method takes 2 parameters: start position, and end position.


### 3. String toUpperCase:
A string is converted to upper case with toUpperCase()

### 4. String LowerCase:
A string is converted to lower case with toLowerCase()

### 5. String Replace:
The replace() method replaces a specified value with another value in a string.


### 6. Concat:
The concat() glues strings together, in the same way in which the + operator does for primitive strings.


### Split:
The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

Syntax:
```
split(separator)
split(separator, limit)
```









