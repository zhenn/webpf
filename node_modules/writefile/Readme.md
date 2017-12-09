
# writefile

  safer file writing for node

## Getting Started

_With npm_  

	$ npm install writefile --save

then in your app:

```js
var writefile = require('writefile')
```

## API

- [fromBuffer()](#fromBuffer)
- [fromStream()](#fromStream)

both these function return [Results](//github.com/jkroso/result) though they expose their internal callback based APIs as `fn.plain`. Feel free to use those functions instead.

### fromBuffer(path:String, text:String)

  fs.writeFile() but makes parent directories if required

### fromStream(path:String, text:Stream)

  as above but accepts a `Stream` instead of a `String`

## Running the tests

```bash
$ npm install
$ node test
```