@mitchallen/maze-generator-square
==
square maze generator
--

## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/maze-generator-square --save
  
* * *

## Usage

    "use strict";

    var mazeFactory = require("@mitchallen/maze-generator-square");

    let xSize = 5;
    let ySize = 6;

    var maze = mazeFactory.create({ x: xSize, y: ySize });
    
## Browser Usage:

Example:

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Maze Generator Square Example</title>
        <meta name="description" content="Maze Generator Square Example">
        <!-- either cdn should work -->
        <!--
        <script src="https://cdn.rawgit.com/mitchallen/maze-generator-square/v0.1.2/dist/maze-generator-square.min.js"></script>
        -->
        <script src="https://unpkg.com/@mitchallen/maze-generator-square@0.1.2/dist/maze-generator-square.min.js"></script>
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
    
* * *

# API Documentation

## Modules

<dl>
<dt><a href="#module_maze-generator-core">maze-generator-core</a></dt>
<dd><p>Maze Generator Core <a href="https://www.npmjs.com/package/@mitchallen/maze-generator-core">npm documentation</a></p>
</dd>
<dt><a href="#module_maze-generator-square">maze-generator-square</a> ⇐ <code><a href="#module_maze-generator-core">maze-generator-core</a></code></dt>
<dd><p>Square Maze Generator</p>
</dd>
<dt><a href="#module_maze-generator-square-factory">maze-generator-square-factory</a></dt>
<dd><p>A module for generating square mazes</p>
</dd>
</dl>

<a name="module_maze-generator-core"></a>

## maze-generator-core
Maze Generator Core [npm documentation](https://www.npmjs.com/package/@mitchallen/maze-generator-core)

<a name="module_maze-generator-square"></a>

## maze-generator-square ⇐ <code>[maze-generator-core](#module_maze-generator-core)</code>
Square Maze Generator

**Extends:** <code>[maze-generator-core](#module_maze-generator-core)</code>  
<a name="module_maze-generator-square+printBoard"></a>

### maze-generator-square.printBoard()
Print board to console. Review this method to discover how to draw a maze.
Drawing a square maze work like this:
<ul>
<li>Draw the top border</li>
<li>For each cell:</li>
                <ul>
    <li>if this is the first cell in the row, draw the western wall</li>
    <li>if the cell is NOT connected to it's eastern neighbor, draw the east wall</li>
    <li>if the cell is NOT connected to it's southern neighbor, draw the south wall</li>
    </ul>
</ul>

**Kind**: instance method of <code>[maze-generator-square](#module_maze-generator-square)</code>  
**Example** *(console output)*  
```js
              MAZE: 20, 20
     _______________________________________
    |_  |    ___  |___   _   _|  ___   _  | |
    | | | |___  | |   |_  |_____| |  _|  _| |
    |  _| |_  | |___| | |  _____  |_  | |_  |
    |_  |  ___|_  | | |  _|  _  |___| | |   |
    | | |_|  _____| | |_|  _| | |  ___|___| |
    | |_____|    ___|_  | |  _|___|     |  _|
    |_____   _|_|  _  | | |    _|  _| |_|_  |
    |  _____|  ___| |___| |_| |  _|  _|  ___|
    | |   |  _|_   _______|  _| | |_  | |   |
    |  _| | |   | |  ___    |  _| |  _| |_| |
    |_  |___| |___|  _|  _| | |_  |_  |_  | |
    | | |  ___  | | |   |___|_  |_  |_  |_  |
    | | |___  | | | | | |  _____|  ___|_____|
    |  _|   | | | | | | |_  | |  _  |  _   _|
    |_  | |___| | | | |_|  _| | |  _| | |_  |
    |  _|___  | |  _|_____|_  | |_____|  _| |
    |_  |  ___| |_  |   |   |___   ___  |  _|
    |  _|_|  ___| | | |___| |   |_|   | |_  |
    | |  ___| |   | | |  _| | |_  | | |___| |
    |___|_______|_____|_______|_____|_______|
```
<a name="module_maze-generator-square-factory"></a>

## maze-generator-square-factory
A module for generating square mazes

<a name="module_maze-generator-square-factory.create"></a>

### maze-generator-square-factory.create(options) ⇒ <code>[maze-generator-square](#module_maze-generator-square)</code>
Factory method that returns a square maze generator object.
It takes one spec parameter that must be an object with x and y values specifying the size of the maze.
If x and y size values are less than one (0) they will be normalized to 0.
You can call create multiple times to create multiple mazes.

**Kind**: static method of <code>[maze-generator-square-factory](#module_maze-generator-square-factory)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Named parameters for generating a square maze |
| options.x | <code>number</code> | Width of the maze |
| options.y | <code>number</code> | Height of the maze |

**Example** *(Creating a maze-generator-square)*  
```js
var mazeFactory = require("@mitchallen/maze-generator-square");
let xSize = 5;
let ySize = 6;
var maze = mazeFactory.create({ x: xSize, y: ySize });
```
**Example** *(Calling create mulitple times)*  
```js
var mazeFactory = require("@mitchallen/maze-generator-square");
var maze1 = mazeFactory.create( { x: 5, y: 10 } );
var maze2 = mazeFactory.create( { x: 7, y: 20 } );
maze1.generate();
maze2.generate();
```

* * *

## Additional Parent Methods
    
### maze.generate(spec = null);

Generates a maze by filling a connection grid with connection info. 

    maze.generate();
    
#### maze.generate(spec.mask = array)

Generates a maze with masked off cells.

    let spec = {
        mask: [
            { c: 2, r: 3 },
            { c: 2, r: 4 }
        ]
    };
    mazeGenerator.generate(spec);
    
#### maze.generate(spec.start = array)

Generates a maze starting at a cell other than 0,0. Useful when you want to mask off 0,0.

    let spec = {
        start: { c: 3, r: 3 },
        mask: [
            { c: 0, r: 0 },
            { c: 0, r: 1 },
            { c: 1, r: 0 },
            { c: 1, r: 1 }
        ]
    };
    mazeGenerator.generate(spec);

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
<!-- /include -->

