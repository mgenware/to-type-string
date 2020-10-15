# to-type-string

Get type description of a JavaScript variable

## Installation

```sh
yarn add to-type-string
```

## Usage

```js
import toTypeString from 'to-type-string';

class MyClass {}

toTypeString(null); // null
toTypeString(undefined); // undefined
toTypeString(new MyClass()); // MyClass
toTypeString([1, 3, 2]); // Array
toTypeString(() => 'haha'); // function
toTypeString(/abc/); // RegExp
toTypeString(NaN); // number
toTypeString(new Uint16Array(10)); // Uint16Array
toTypeString(new Date()); // Date
toTypeString(new Object()); // Object
```
