# url-equal
Check if URLs are functionally equal (allowing for any order of the query string).

## Installation
```sh
npm install url-equal
```

## Usage
```js
const urlEqual = require('url-equal')

console.log(urlEqual('/foo', '/bar')) // => false
console.log(urlEqual('http://foo.com/?user=foo&pass=bar', 'http://foo.com/?pass=bar&user=foo')) // => true
```
