@mitchallen/maze-generator-square
==
square maze generator
--

<p align="left">

  <a href="https://travis-ci.org/mitchallen/maze-generator-square">
    <img src="https://img.shields.io/travis/mitchallen/maze-generator-square.svg?style=flat-square" alt="Version">
  </a>
  
  <a href="https://codecov.io/gh/mitchallen/maze-generator-square">
    <img src="https://codecov.io/gh/mitchallen/maze-generator-square/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  
  <a href="https://npmjs.org/package/@mitchallen/maze-generator-square">
    <img src="http://img.shields.io/npm/v/@mitchallen/maze-generator-square.svg?style=flat-square" alt="Version">
  </a>
  
  <a href="https://npmjs.org/package/@mitchallen/maze-generator-square">
    <img src="https://img.shields.io/github/license/mitchallen/maze-generator-square.svg">
  </a>
  
</p>

## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/maze-generator-square --save
  
* * *

## Usage

```js
    "use strict";

    var mazeFactory = require("@mitchallen/maze-generator-square");

    let xSize = 5;
    let ySize = 6;

    var maze = mazeFactory.create({ x: xSize, y: ySize });
```
    
## Browser Usage:

Example:

```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Maze Generator Square Example</title>
        <meta name="description" content="Maze Generator Square Example">
        <script src="https://unpkg.com/@mitchallen/maze-generator-square@0.1.23/dist/maze-generator-square.min.js"></script>
        <script>
          var factory = window.MitchAllen.MazeGeneratorSquare;
          console.log(factory);
          var xSize = 10, ySize = 5;
          var sm = factory.create( { x: xSize, y: ySize } );
          console.log(sm);
          sm.generate();
          sm.printBoard(); 
        </script>
      </head>
      <body>
        <h1>Maze Generator Square Example</h1>
        <p>See JavaScript developer console for output.</p>
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

* [bitbucket.org/mitchallen/maze-generator-square.git](https://bitbucket.org/mitchallen/maze-generator-square.git)
* [github.com/mitchallen/maze-generator-square.git](https://github.com/mitchallen/maze-generator-square.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Verion 0.1.16

* Fixed broken build due to folder change

#### Version 0.1.12

* updated dependencies
* updated client example

#### Version 0.1.11

* integrated travis-ci and codecov.io
* updated test cases for 100% coverage
* updated .npmignore 
* change license to MIT
* updated dependencies

#### Version 0.1.10

* __afterGenerate__ now fails gracefully for border parameters that are out of range.

#### Version 0.1.9

* completed work on __afterGenerate__
* added new open parameter option to __generate/afterGenerate__ to open maze borders

#### Version 0.1.8

* updated dependencies
* added __afterGenerate__ method (work in progress)

#### Version 0.1.7

* updated @mitchallen/connection-grid-square to version 0.1.4

#### Version 0.1.6

* updated maze-generator-core to 0.1.4

#### Version 0.1.5

* removed template based doc

#### Version 0.1.4

* fixed type-o in usage

#### Version 0.1.3

* removed printBorder method
* added jsdoc info
* integrated jsdoc into README

#### Version 0.1.2

* fixed return issue in __create__ method

#### Version 0.1.1

* added mac server script to browser example

#### Version 0.1.0

* initial release

* * *

