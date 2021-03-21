
@mitchallen/connection-grid-square
==
Connection grid for square array
--

<p align="left">

  <a href="https://travis-ci.org/mitchallen/connection-grid-square">
    <img src="https://img.shields.io/travis/mitchallen/connection-grid-square.svg?style=flat-square" alt="Version">
  </a>
  
  <a href="https://codecov.io/gh/mitchallen/connection-grid-square">
    <img src="https://codecov.io/gh/mitchallen/connection-grid-square/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  
  <a href="https://npmjs.org/package/@mitchallen/connection-grid-square">
    <img src="http://img.shields.io/npm/v/@mitchallen/connection-grid-square.svg?style=flat-square" alt="Version">
  </a>
  
  <a href="https://npmjs.org/package/@mitchallen/connection-grid-square">
    <img src="https://img.shields.io/github/license/mitchallen/connection-grid-square.svg">
  </a>
  
</p>


* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/connection-grid-square --save
  
* * *

## Usage

```js
"use strict";
    
let gridFactory = require("@mitchallen/connection-grid-square");
    
let xSize = 5;
let ySize = 6;

let grid = gridFactory.create({ x: xSize, y: ySize });
```

## Browser Usage:

```html
<!DOCTYPE html>
  <html>
      <head>
        <meta charset="utf-8">
        <title>Connection-Grid-Square Example</title>
        <meta name="description" content="Connection Grid Square Example">
        <script src="https://unpkg.com/@mitchallen/connection-grid-square@0.1.17/dist/connection-grid-square.min.js"></script>
        <script>
          var factory = window.MitchAllen.ConnectionGridSquare;
          console.log(factory);
          var xSize = 10, ySize = 5;
          var sg = factory.create( { x: xSize, y: ySize } );
          console.log(sg);
          sg.log(); 
        </script>
      </head>
      <body>
        <h1>Connection Grid Square Example</h1>
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

* [bitbucket.org/mitchallen/connection-grid-square.git](https://bitbucket.org/mitchallen/connection-grid-square.git)
* [github.com/mitchallen/connection-grid-square.git](https://github.com/mitchallen/connection-grid-square.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

### Version 0.1.9

* updated .npmignore
* updated dependencies

### Version 0.1.8

* updated to latest version of grid-square and connection-grid-core
* updated test coverage to 100%

### Version 0.1.7

* integrated travis-ci and codecov.io

### Version 0.1.6

* installed latest version of __@mitchallen/connection-grid-core__ 

### Version 0.1.5

* installed latest version of __@mitchallen/connection-grid-core__ 
* refactored documentation

#### Version 0.1.4

* corrected version history

#### Version 0.1.3

* installed latest version of __@mitchallen/connection-grid-core__ 
* updated npm scripts
* updated client example
* integrated jsdoc 

#### Version 0.1.2

* error while publishing, trying again

#### Version 0.1.1 

* added missing package dependency for __@mitchallen/connection-grid-core__

#### Version 0.1.0 

* initial release

* * *
