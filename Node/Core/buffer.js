//Buffer:

// The Buffer class was introduced as part of the Node.js API to make it possible to manipulate or interact with streams of binary data.
// BUFFER is a temporary holding spot for data being moved from one place to another.

// Stream

// Stream in Node.js simply means a sequence of data being moved from one point to the other over time. The whole concept is, you have a huge amount of data to process, but you don’t need to wait for all the data to be available before you start processing it.

// New Ways to create buffer


// You can create using uninitiated Buffer of n octets like this.

var buf = Buffer.alloc(10);

console.log(Buffer.isBuffer(buf));     //true

//You can also create a buffer using an array.
//This initializes the buffer to the contents of this array. Keep in mind that the contents of the array are integers representing bytes.

const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0, 9]);   


// let arr = Uint8Array

console.log(arr)