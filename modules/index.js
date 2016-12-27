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
 * Factory method that returns a square maze generator
 * @param {Object} options Named parameters for generating a square maze
 * @param {number} options.x Width of the maze
 * @param {number} options.y Height of the maze
 * @returns {module:maze-generator-square}
 * @example <caption>Example creating a maze-generator-square</caption>
 * var mazeFactory = require("@mitchallen/maze-generator-square");
 * let xSize = 5;
 * let ySize = 6;
 * var maze = mazeFactory.create({ x: xSize, y: ySize });
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
        /** 
          * Print a boarder to the console
          * @function
          * @instance
          * @memberof module:maze-generator-square
          */
        printBorder: function() {
            var row = "";
            var lim = _x  * 2;
            for( var i = 0; i < lim; i++ ) {
                row += i === 0 ? " " : "_";
            }
            console.log( row );
        },
        /** Print board to console
          * @function
          * @instance
          * @memberof module:maze-generator-square
          */
        printBoard: function() {
            console.log("MAZE: %d, %d", _x, _y);
            this.printBorder();
            let dirMap = this.dirMap;
            for(var y = 0; y < _y; y++) {
                var row = "|";
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