node-http
==========

Unify http interface in Node.

## Installation
```shell
npm install node-http
```

## API
```javascript
var NodeHttp = require('node-http');
var nodeHttp = new Http;
```

#### .url(String address)

#### .header(String name, String value)

#### .data(Mix data)

#### .method(String name)

#### .on(String event, Function callback)

#### .off(String event, Function callback)

#### .complete(Function callback)

#### .success(Function callback)

#### .fail(Function callback)

#### .GET(String address, [Function onComplete], [Function onError])

#### .POST(String address, Mix data, [Function onComplete], [Function onError])

#### .request(Object options, [Function onComplete], [Function onError])

## Events
#### 'complete'
#### 'success'
#### 'fail'

#### 'buffer'
```javascript
nodeHttp.on('buffer', function (buffer) {

});
```

#### status code
```javascript
nodeHttp.on(200, function (response) {
  
});
```

#### status name
```javascript
nodeHttp.on('Ok', function (response) {

});

nodeHttp.on('Not Found', function (response) {

});
```

## Todo
- parse `charset` from html and content-type header

## License

  MIT
