bupper
==========

A Nodejs Buffer helper.

## Installation
Use npm:
```shell
npm install bupper
```

Or add to your package dependencies:
```json
{
  "dependencies": {
    "bupper": "*"
  }
}
```

## Quick Start
Concat buffer chunks with `.add(chunk)` and output them together using `.combine()`
```javascript
var Bupper = require('bupper');
var http = require('http');
http.createServer(function(req, res) {
  req.on('data', function(chunk) {
    Bupper.add(chunk);
  });
  req.on('end', function() {
    console.log( Bupper.combine().toString() )
  })
}).listen(80);
```

## APIs
Concat chunks:
```javascript
Bupper.add(chunk)
```

Output chunks:
```javascript
Bupper.combine()
```

## Todo
* write a test
