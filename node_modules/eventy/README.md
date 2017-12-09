eventy
==========

An object event injection.


## Installation
```bash
npm install eventy
```


## Quick Start
```javascript
var eventy = require('eventy');

function onUpdate(value) {
  console.log(value);
}

var user = {}
eventy(user);
user.on('update', onUpdate);
user.trigger('update', 'dead');
user.off('update', onUpdate);
```


## Global Uses
```javascript
var Eventy = require('eventy');

var Events = new Eventy();

function me() {
  Events.on('hi', function(message) {
    console.log(message);
  })  
}

function you() {
  Events.trigger('hi', 'from you');
}

me();
you();
```

---

Copyright (c) 2013 Shallker Wang - MIT License (enclosed)
