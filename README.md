
@mitchallen/maze-generator-square
==
square maze generator
--
* * *
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
        <script src="https://cdn.rawgit.com/mitchallen/maze-generator-square/v0.1.0/dist/maze-generator-square.min.js"></script>
        -->
        <script src="https://unpkg.com/@mitchallen/maze-generator-square@0.1.0/dist/maze-generator-square.min.js"></script>
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

* * *

## Methods

### gridFactory = factory.create(spec)

Factory method that returns a __square__ maze generator object. 

It takes one spec parameter that must be an object with x and y values specifying the size of the maze.

If x and y size values are less than one (0) they will be normalized to 0.

You can call __create__ multiple times to create multiple mazes.

    var mazeFactory = require("@mitchallen/maze-generator-square");

    var maze1 = mazeFactory.create( { x: 5, y: 10 } );
    var maze2 = mazeFactory.create( { x: 7, y: 20 } );

    maze1.generate();
    maze2.generate();
    
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

### maze.printBoard()

Logs to the console the generated maze. You should examine the source for this method to determine other ways to display the generated maze.

    maze.generate();
    maze.printBoard();

Example:

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

#### Version 0.1.0 

* initial release

* * *
