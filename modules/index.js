/**
    Module: @mitchallen/maze-generator-square/modules/index
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var cgFactory = require("@mitchallen/connection-grid-square"),
    baseGrid = require("@mitchallen/maze-generator-core");


/**
 * Maze Generator Core {@link https://www.npmjs.com/package/@mitchallen/maze-generator-core|npm documentation}
 * @module maze-generator-core
 */

/**
 * Square Maze Generator
 * @module maze-generator-square
 * @augments module:maze-generator-core
 */

/**
 * 
 * A module for generating square mazes
 * @module maze-generator-square-factory
 */

 /** 
 * Factory method that returns a square maze generator object.
 * It takes one spec parameter that must be an object with x and y values specifying the size of the maze.
 * If x and y size values are less than one (0) they will be normalized to 0.
 * You can call create multiple times to create multiple mazes.
 * @param {Object} options Named parameters for generating a square maze
 * @param {number} options.x Width of the maze
 * @param {number} options.y Height of the maze
 * @returns {module:maze-generator-square}
 * @example <caption>Creating a maze-generator-square</caption>
 * var mazeFactory = require("@mitchallen/maze-generator-square");
 * let xSize = 5;
 * let ySize = 6;
 * var maze = mazeFactory.create({ x: xSize, y: ySize });
 * @example <caption>Calling create mulitple times</caption>
 * var mazeFactory = require("@mitchallen/maze-generator-square");
 * var maze1 = mazeFactory.create( { x: 5, y: 10 } );
 * var maze2 = mazeFactory.create( { x: 7, y: 20 } );
 * maze1.generate();
 * maze2.generate();
 */
module.exports.create = (spec) => {
    
    spec = spec || {};

    let _x = spec.x || 0;
    let _y = spec.y || 0;

    let _gridSpec = {
        x: _x,
        y: _y
    };

    var connections = cgFactory.create(_gridSpec);
    if(!connections) {
        return null;
    }

    var obj = baseGrid.create( {
        grid: connections,
    });

    return Object.assign( obj, {

        /** Print board to console. Review this method to discover how to draw a maze.
          * Drawing a square maze work like this:
          * <ul>
          * <li>Draw the top border</li>
          * <li>For each cell:</li>
                <ul>
          *     <li>if this is the first cell in the row, draw the western wall</li>
          *     <li>if the cell is NOT connected to it's eastern neighbor, draw the east wall</li>
          *     <li>if the cell is NOT connected to it's southern neighbor, draw the south wall</li>
          *     </ul>
          * </ul>
          * @function
          * @instance
          * @memberof module:maze-generator-square
          * @example <caption>console output</caption>
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
          */
        printBoard: function() {
            console.log("MAZE: %d, %d", _x, _y);
            // print top north walls
            var border = "";
            var lim = _x  * 2;
            for( var i = 0; i < lim; i++ ) {
                border += i === 0 ? " " : "_";
            }
            console.log( border );
            // print maze east and south walls
            let dirMap = this.dirMap;
            for(var y = 0; y < _y; y++) {
                var row = "|";  // print west wall
                for(var x = 0; x < _x; x++) {
                    row += this.connects( x, y, "S" ) ? " " : "_";
                    if(this.connects( x, y, "E" )) {
                        row += ( ( ( this.get(x,y) | this.get(x+1,y) ) & dirMap.S ) !== 0) ? " " : "_";
                    } else {
                        row += "|";
                    }
                }
                console.log( row );
            }
        }
    });
};