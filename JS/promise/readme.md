# Promise:

* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

* Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

### Chaining Promise:
* The API design of promises makes this great, because callbacks are attached to the returned promise object, instead of being passed into a function.

* Here's the magic: the then() function returns a new promise, different from the original:
```
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

* A Promise is in one of these states:
1. pending: initial state, neither fulfilled nor rejected.

2. fulfilled: meaning that the operation was completed successfully.

3. rejected: meaning that the operation failed.



