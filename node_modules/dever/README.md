dever
==========

A dev helper.


## Installation
```bash
npm install dever
```

## Quick Start
```javascript
var debug = require('dever').debug('Controller/Users')
var error = require('dever').error('Controller', 'Users')
debug('hey, I got something here')
return error('opps, something goes wrong')
```

## Silent Mode
Turn off the output:
```javascript
var debug = require('dever').debug('/api/users').off
var error = require('dever').error('/api/users').off
```

## Log levels
* 0 [EMERGENCY] system is unusable  
* 1 [ALERT] action must be taken immediately  
* 2 [CRITICAL] the system is in critical condition  
* 3 [ERROR] error condition  
* 4 [WARNING] warning condition  
* 5 [NOTICE] a normal but significant condition  
* 6 [INFO] a purely informational message  
* 7 [DEBUG] messages to debug an application  

## dev.json
A config file to control output in development:
```json
{
  "output": {
    "EMERGENCY": true,
    "ALERT": true,
    "CRITICAL": true,
    "ERROR": true,
    "WARNING": true,
    "NOTICE": true,
    "INFO": true,
    "DEBUG": true 
  },
  "throw": true
}
```

## pro.json
A config file to control output in production:
```json
{
  "output": {
    "EMERGENCY": false,
    "ALERT": false,
    "CRITICAL": false,
    "ERROR": false,
    "WARNING": false,
    "NOTICE": false,
    "INFO": false,
    "DEBUG": false 
  },
  "throw": false
}
```

## Todo
* readFileJSON() to require()

---

Copyright (c) 2013 Shallker Wang - MIT License (enclosed)
