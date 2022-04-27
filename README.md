# to-type-string

[![Build Status](https://github.com/mgenware/to-type-string/workflows/Build/badge.svg)](https://github.com/mgenware/to-type-string/actions)
[![npm version](https://img.shields.io/npm/v/to-type-string.svg?style=flat-square)](https://npmjs.com/package/to-type-string)
[![Node.js Version](http://img.shields.io/node/v/to-type-string.svg?style=flat-square)](https://nodejs.org/en/)

Get type description of a JavaScript variable

## Installation

```sh
npm install to-type-string
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
