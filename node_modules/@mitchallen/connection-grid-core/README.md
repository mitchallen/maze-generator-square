
@mitchallen/connection-grid-core
==
Connection grid core
--

<p align="left">

  <a href="https://travis-ci.org/mitchallen/connection-grid-core">
    <img src="https://img.shields.io/travis/mitchallen/connection-grid-core.svg?style=flat-square" alt="Version">
  </a>
  
  <a href="https://codecov.io/gh/mitchallen/connection-grid-core">
    <img src="https://codecov.io/gh/mitchallen/connection-grid-core/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  
  <a href="https://npmjs.org/package/@mitchallen/connection-grid-core">
    <img src="http://img.shields.io/npm/v/@mitchallen/connection-grid-core.svg?style=flat-square" alt="Version">
  </a>
  
  <a href="https://npmjs.org/package/@mitchallen/connection-grid-core">
    <img src="https://img.shields.io/github/license/mitchallen/connection-grid-core.svg">
  </a>

  <a href="https://www.jsdelivr.com/package/npm/@mitchallen/connection-grid-core">
    <img src="https://data.jsdelivr.com/v1/package/npm/@mitchallen/connection-grid-core/badge" alt="jsdelivr">
  </a>
  
</p>

* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/connection-grid-core --save
  
* * *

## Usage

```js
"use strict";
    
let gridFactory = require("@mitchallen/connection-grid-core"),
    gridSquare = require('@mitchallen/grid-square')
    
let sourceGrid = gridSquare.create({ x: 5, y: 6 });
	
let _dirMap = { 
        "N": 0x010, 
        "S": 0x020, 
        "E": 0x040, 
        "W": 0x080 };

let _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };

let cg = gridFactory.create({  
        grid: sourceGrid,     
        dirMap: _dirMap,
        oppositeMap: _oppositeMap 
      });
```

## Browser Usage:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Connection-Grid-Core Example</title>
    <meta name="description" content="Connection Grid Core Example">
    <script src="https://cdn.jsdelivr.net/npm/@mitchallen/connection-grid-core@0.1.22/dist/connection-grid-core.min.js"></script>
    <script src="https://unpkg.com/@mitchallen/grid-square@0.1.8/dist/grid-square.min.js"></script>
    <script>
      var factory = window.MitchAllen.ConnectionGridCore;
      var squareFactory = window.MitchAllen.GridSquare;
      console.log(factory);
      var xSize = 10, ySize = 5;
      var sourceGrid = squareFactory.create({ x: xSize, y: ySize });
      var _dirMap = { 
        "N": 0x010, 
        "S": 0x020, 
        "E": 0x040, 
        "W": 0x080 };
    let _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };
    var cg = factory.create({ 
        grid: sourceGrid, 
        dirMap: _dirMap,
        oppositeMap: _oppositeMap 
      });
      console.log(cg); 
    </script>
  </head>
  <body>
    <h1>Connection Grid Core Example</h1>
  </body>
</html>
```
    
* * *

## Documentation

* [DOC-API.md](./DOC-API.md)

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/connection-grid-core.git](https://bitbucket.org/mitchallen/connection-grid-core.git)
* [github.com/mitchallen/connection-grid-core.git](https://github.com/mitchallen/connection-grid-core.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.12

* Added isDeadEnd method
* Added connectionCount method
* hasConnections accounts for VISITED flag

#### Version 0.1.11

* added experimental getMaxDistance and supporting functions

#### Version 0.1.10

* updated .npmignore

#### Version 0.1.9

* integrated travis-ci and codecov.io
* uses latest version of @mitchallen/shuffle
* updated license to MIT
* refactored test cases to bring code coverage to 100%

#### Version 0.1.8

* corrected reference to derived class in documentation

#### Version 0.1.7

* refactored documentation

#### Version 0.1.6

* fixed issue with documentation

#### Version 0.1.5

* fixed issue with documentation

#### Version 0.1.4

* added web-server to npm scripts
* added message in client example HTML to check JavaScript console

#### Version 0.1.3

* fixed issue with documentation tag

#### Version 0.1.2 

* added __open__ method
* integrated jsdoc
* updated documentation

#### Version 0.1.1 

* added browser example

#### Version 0.1.0 

* initial release

* * *
