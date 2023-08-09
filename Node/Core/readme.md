# Global Node Objects:

* These objects are modules, functions, strings and object.

### __filename:
* The __filename represents the filename of the code being executed. This is the resolved absolute path of this code file.


### __dirname:

* The __dirname represents the name of the directory that the currently executing script resides in.

### setTimeout(cb, ms):
* The setTimeout(cb, ms) global function is used to run callback cb after at least ms milliseconds.

### clearTimeout(t):
* The clearTimeout(t) global function is used to stop a timer that was previously created with setTimeout(). Here t is the timer returned by the setTimeout() function.


### setInterval(cb, ms):
* The setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds. 


# Buffer:

* Generally, Buffer refers to the particular memory location in memory. Buffer and array have some similarities, but the difference is array can be any type, and it can be resizable. Buffers only deal with binary data, and it can not be resizable.

## Methods to perform the operations on Buffer:

1. Buffer.alloc(size) : It creates a buffer and allocates size to it.

2. Buffer.from(initialization) : It initializes the buffer with given data.

3. Buffer.write(data) :	It writes the data on the buffer.

4. toString() : It read data from the buffer and returned it.

5. Buffer.isBuffer(object):	It checks whether the object is a buffer or not.

6.	Buffer.length:	It returns the length of the buffer.


