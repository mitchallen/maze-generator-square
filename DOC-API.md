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

* [maze-generator-square](#module_maze-generator-square) ⇐ <code>[maze-generator-core](#module_maze-generator-core)</code>
    * [.afterGenerate(spec)](#module_maze-generator-square+afterGenerate)
    * [.printBoard()](#module_maze-generator-square+printBoard)

<a name="module_maze-generator-square+afterGenerate"></a>

### maze-generator-square.afterGenerate(spec)
Called by base class after generate generates the maze.
Not meant to be called directly. The generate method will pass the spec on to this method.

**Kind**: instance method of <code>[maze-generator-square](#module_maze-generator-square)</code>  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>Object</code> | Object containing named parameters passed through generate method. |
| spec.open | <code>Array</code> | Array of objects specifying what borders to open |
| spec.open[i]. | <code>Object</code> | Item containing info on how to open border |
| spec.open[i].border | <code>string</code> | String representing border ("N","E","W","S") |
| spec.open[i].list[j]. | <code>number</code> | Zero-based id along border designating which cell to open |

**Example** *(open north border)*  
```js
// calls generate to pass spec on to afterGenerate
var xSize = 5, ySize = 6;
var mazeGenerator = factory.create({ x: xSize, y: ySize });
let spec = {
    open: [
        { border: "N", list: [0,2,xSize-1] }
    ]
};
mazeGenerator.generate(spec);
mazeGenerator.printBoard();
// example output
   __  __  
| |  _  | |
|___| |_  |
|  _|   | |
| |  _| | |
| |_  |___|
|_________|
```
**Example** *(open all border)*  
```js
// calls generate to pass spec on to afterGenerate
var xSize = 5, ySize = 6;
var mazeGenerator = factory.create({ x: xSize, y: ySize });
let spec = {
    open: [
        { border: "N", list: [0,2,xSize-1] },
        { border: "S", list: [0,2,xSize-1] },
        { border: "E", list: [0,2,ySize-1] },
        { border: "W", list: [0,2,ySize-1] }
    ]
};
mazeGenerator.generate(spec);
mazeGenerator.printBoard();
// example output
  __  __  
 _  |   |  
| | | |_  |
  |___| |  
|  _  |  _|
|   |_|_  |
  |_   _   
```
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
