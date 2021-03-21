(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).MazeGeneratorSquare = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
(function (global){(function (){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).ConnectionGridSquare = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof _dereq_&&_dereq_;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof _dereq_&&_dereq_,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
(function (global){(function (){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).ConnectionGridCore = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof _dereq_&&_dereq_;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof _dereq_&&_dereq_,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
(function (global){(function (){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).Shuffle = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/shuffle
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

module.exports.create = function (spec) {
    if (!spec) {
        return null;
    }
    if (!spec.array) {
        return null;
    }
    var _array = spec.array.slice(0);
    return {
        shuffle: function shuffle() {
            var i = 0,
                j = 0,
                temp = null;
            for (i = _array.length - 1; i > 0; i -= 1) {
                j = Math.floor(Math.random() * (i + 1));
                temp = _array[i];
                _array[i] = _array[j];
                _array[j] = temp;
            }
            return _array;
        }
    };
};

},{}]},{},[1])(1)
});
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/connection-grid-core/src/index.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var shuffleFactory = _dereq_("@mitchallen/shuffle");

/**
 * Grid Core
 * @external @mitchallen/grid-core
 * @see {@link https://www.npmjs.com/package/@mitchallen/grid-core|@mitchallen/grid-core}
 */

/**
 * Connection Grid Core generated by {@link module:connection-grid-core-factory|create}
 * @module connection-grid-core
 * @extends external:@mitchallen/grid-core
 */

/**
 * 
 * A factory for generating connection grid core objects
 * @module connection-grid-core-factory
 */

/** 
* Factory method that returns a connection grid core object.
* It takes one spec parameter that must be an object with named parameters.
* @param {Object} options Named parameters for generating a connection grid core
* @param {grid} options.grid Grid based on {@link external:@mitchallen/grid-core|@mitchallen/grid-core}
* @param {dirMap} options.dirMap Direction map containing bit map flags for directions
* @param {oppositeMap} options.oppositeMap Opposite direction map
* @returns {module:connection-grid-core}
* @example <caption>Creating a connection-grid-core</caption>
* "use strict";
* var gridFactory = require("@mitchallen/connection-grid-core"),
*     gridSquare = require('@mitchallen/grid-square')
* var sourceGrid = gridSquare.create({ x: 5, y: 6 });
* var _dirMap = { 
*     "N": 0x010, 
*     "S": 0x020, 
*     "E": 0x040, 
*     "W": 0x080 };
* let _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };
* var cg = gridFactory.create({  
*     grid: sourceGrid,     
*     dirMap: _dirMap,
*     oppositeMap: _oppositeMap 
* });
*/
module.exports.create = function (spec) {

  spec = spec || {};
  var _grid = spec.grid;
  var _DIR_MAP = spec.dirMap || {};
  var _OPPOSITE = spec.oppositeMap || {};

  if (!_grid) {
    return null;
  }

  // bit masks
  var VISITED = 0x01;
  var MASKED = 0x02;
  var RED = 0x04;
  var GREEN = 0x08;

  Object.defineProperties(_grid, {
    "dirMap": {
      writeable: false,
      value: _DIR_MAP,
      enumerable: true,
      configurable: true
    }
  });

  return Object.assign(_grid, {

    /** Returns true if string is found in DIR_MAP array.
      * @param {string} dir A string representing a direction
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @returns {boolean}
      * @example <caption>usage</caption>
      * if(core.isDir("N")) ...
     */
    isDir: function isDir(dir) {
      if (typeof dir === 'string') {
        return _DIR_MAP[dir] !== undefined;
      }
      return false;
    },
    /** Returns opposite direction based on OPPOSITE array.
      * @param {string} dir A string representing a direction
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @returns {string}
      * @example <caption>usage</caption>
      * core.getOppositeDir("N").should.eql("S");
     */
    getOppositeDir: function getOppositeDir(dir) {
      if (!this.isDir(dir)) {
        return null;
      }
      return _OPPOSITE[dir];
    },
    /** Returns the neighbor in a particular direction for a cell at x,y.
      * <b>This should be overriden by derived class</b>
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @param {string} dir A string representing a direction
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @returns {string}
      * @example <caption>usage</caption>
      * var neighbor = core.getNeighbor(1,2,"N");
     */
    getNeighbor: function getNeighbor(x, y, dir) {
      // derived should override
      console.log("getNeighbor should be overriden by derived class");
      return null;
    },
    /** Returns the neighbor directions for a cell at x,y.
      * <b>This should be overriden by derived class</b>.
      * Classic square grids ignore x and y, but other derived classes, like hexagon, may not.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * var neighbors = core.getNeighborDirs(1,2);
     */
    getNeighborDirs: function getNeighborDirs(x, y) {
      // derived should override
      // Classic ignores x and y, but other derived classes may not
      console.log("getNeighborDirs should be overriden by derived class");
      return [];
    },
    /** Returns a shuffled list of neighbors for a cell at x,y.
      * Useful for generating random mazes.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * var neighbors = core.getShuffledNeighborDirs(1,2);
     */
    getShuffledNeighborDirs: function getShuffledNeighborDirs(x, y) {
      var shuffler = shuffleFactory.create({ array: this.getNeighborDirs(x, y) });
      return shuffler.shuffle();
    },

    /** Sets a flag in a cell at x,y
        * @param {number} x The x coordinate
        * @param {number} y The y coordinate
        * @function
        * @instance
        * @returns {boolean}
        * @memberof module:connection-grid-core
        * @example <caption>usage</caption>
        * core.setFlag(1,2,VISITED);
       */
    setFlag: function setFlag(x, y, flag) {
      if (!this.isCell(x, y)) {
        return false;
      }
      return this.set(x, y, this.get(x, y) | flag);
    },

    /** Clears a flag from cell
       * @param {number} x The x coordinate
       * @param {number} y The y coordinate
       * @function
       * @instance
       * @returns {boolean}
       * @memberof module:connection-grid-core
       * @example <caption>usage</caption>
       * core.clearFlag(1,2,flag);
      */
    clearFlag: function clearFlag(x, y, flag) {
      if (!this.isCell(x, y)) {
        return false;
      }
      return this.set(x, y, this.get(x, y) & ~flag);
    },

    /** Returns true if a cell at x,y exists and flag has been set.
    * @param {number} x The x coordinate
    * @param {number} y The y coordinate
    * @function
    * @instance
    * @returns {boolean}
    * @memberof module:connection-grid-core
    * @example <caption>usage</caption>
    * if(core.isFlagSet(x,y,VISITED)) ...
    */
    isFlagSet: function isFlagSet(x, y, flag) {
      if (!this.isCell(x, y)) {
        return false;
      }
      return (this.get(x, y) & flag) !== 0;
    },

    /** Marks a cell at x,y as visited.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.markVisited(1,2);
     */
    markVisited: function markVisited(x, y) {
      // return this.set(x, y, this.get(x, y) | VISITED);
      return this.setFlag(x, y, VISITED);
    },
    /** Clears visit flag from cell
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.clearVisited(1,2);
     */
    clearVisited: function clearVisited(x, y) {
      // return this.set(x, y, this.get(x, y) & ~VISITED);
      return this.clearFlag(x, y, VISITED);
    },
    /** Clear all visited flag from grid
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.clearAllVisited();
     */
    clearAllVisited: function clearAllVisited() {
      // return this.set(x, y, this.get(x, y) & ~VISITED);
      for (var row = 0; row < this.rows; row++) {
        var rs = this.rowSize(row);
        for (var pos = 0; pos < rs; pos++) {
          this.clearVisited(row, pos);
        }
      }
    },
    /** Returns true if a cell at x,y exists and it has been marked as visited.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.visited(x)) ...
     */
    visited: function visited(x, y) {
      if (!this.isCell(x, y)) {
        return false;
      }
      // return ((this.get(x, y) & VISITED) !== 0);
      return this.isFlagSet(x, y, VISITED);
    },
    /** Marks a cell at x,y as masked.
      * Useful for maze generators to mark cells to skip
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.mask(1,2)
     */
    mask: function mask(x, y) {
      // return this.set(x, y, this.get(x, y) | MASKED);
      return this.setFlag(x, y, MASKED);
    },
    /** Clear the mask flag from cell at x,y.
      * Useful for maze generators to mark and clear cells to skip
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.clearMask(1,2)
     */
    clearMask: function clearMask(x, y) {
      // return this.set(x, y, this.get(x, y) & ~MASKED);
      return this.clearFlag(x, y, MASKED);
    },
    /** Clear all mask flags from grid
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.clearAllMasks();
     */
    clearAllMasks: function clearAllMasks() {
      for (var row = 0; row < this.rows; row++) {
        var rs = this.rowSize(row);
        for (var pos = 0; pos < rs; pos++) {
          this.clearMask(row, pos);
        }
      }
    },
    /** Returns true if a cell at x,y has been marked using [mask]{@link module:connection-grid-core#mask}.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.isMasked(1,2)) ...
     */
    isMasked: function isMasked(x, y) {
      if (!this.isCell(x, y)) {
        return false;
      }
      // return ((this.get(x, y) & MASKED) !== 0);
      return this.isFlagSet(x, y, MASKED);
    },

    /** Marks a cell at x,y as red.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.markRed(1,2)
     */
    markRed: function markRed(x, y) {
      return this.setFlag(x, y, RED);
    },
    /** Clear the red flag from cell at x,y.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.clearRed(1,2)
     */
    clearRed: function clearRed(x, y) {
      return this.clearFlag(x, y, RED);
    },
    /** Clear all red flags from grid
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.clearAllRed();
     */
    clearAllRed: function clearAllRed() {
      for (var row = 0; row < this.rows; row++) {
        var rs = this.rowSize(row);
        for (var pos = 0; pos < rs; pos++) {
          this.clearRed(row, pos);
        }
      }
    },
    /** Returns true if a cell at x,y has been set red using [markRed]{@link module:connection-grid-core#markRed}.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.isRed(1,2)) ...
     */
    isRed: function isRed(x, y) {
      if (!this.isCell(x, y)) {
        return false;
      }
      return this.isFlagSet(x, y, RED);
    },

    /** Marks a cell at x,y as green.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.markGreen(1,2)
     */
    markGreen: function markGreen(x, y) {
      return this.setFlag(x, y, GREEN);
    },
    /** Clear the green flag from cell at x,y.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.clearGreen(1,2)
     */
    clearGreen: function clearGreen(x, y) {
      return this.clearFlag(x, y, GREEN);
    },
    /** Clear all green flags from grid
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.clearAllGreen();
     */
    clearAllGreen: function clearAllGreen() {
      for (var row = 0; row < this.rows; row++) {
        var rs = this.rowSize(row);
        for (var pos = 0; pos < rs; pos++) {
          this.clearGreen(row, pos);
        }
      }
    },
    /** Returns true if a cell at x,y has been set green using [markGreen]{@link module:connection-grid-core#markGreen}.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.isGreen(1,2)) ...
     */
    isGreen: function isGreen(x, y) {
      if (!this.isCell(x, y)) {
        return false;
      }
      return this.isFlagSet(x, y, GREEN);
    },

    /** Returns true if a cell at x,y has connections.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.hasConnections(1,2)) ...
     */
    hasConnections: function hasConnections(x, y) {
      var cell = this.get(x, y);
      if (cell === null) {
        return false;
      }
      // Discount non-dir connection flags
      cell = cell & ~(VISITED | MASKED | RED | GREEN);
      if (cell === 0) {
        return false;
      }
      var list = this.getNeighborDirs(x, y);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var sDir = _step.value;

          if (!this.isDir(sDir)) {
            console.error("hasConnections unknown direction: ", sDir);
            return false;
          }
          var iDir = _DIR_MAP[sDir];
          if ((cell & iDir) !== 0) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return false;
    },

    /** Maps a connection for a cell at x,y in a particular direction.
      * Unlike [connect]{@link module:connection-grid-core#connect} a cell in the direction does not have to exist.
      * Useful for mazes that need to open up border walls.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @param {string} dir A string representing a direction
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.open(0,0,"N");
     */
    open: function open(x, y, dir) {
      // dir must be string
      if (!this.isDir(dir)) {
        return false;
      }
      // return this.set(x, y, this.get(x, y) | _DIR_MAP[dir]);
      return this.setFlag(x, y, _DIR_MAP[dir]);
    },

    /** Removes a connection for a cell at x,y in a particular direction.
      * Unlike [connect]{@link module:connection-grid-core#connect} a cell in the direction does not have to exist.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @param {string} dir A string representing a direction
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * core.close(0,0,"N");
     */
    close: function close(x, y, dir) {
      // dir must be string
      if (!this.isDir(dir)) {
        return false;
      }
      // return this.set(x, y, this.get(x, y) & ~_DIR_MAP[dir]);
      return this.clearFlag(x, y, _DIR_MAP[dir]);
    },

    /** Maps a connection for a cell at x,y in a particular direction.
      * Returns false if the cell in the target direction does not exist.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @param {string} dir A string representing a direction
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.connect(1,2,"N")) ...
     */
    connect: function connect(x, y, dir) {
      // dir must be string
      // Connect cell to neighbor (one way)}
      if (!this.getNeighbor(x, y, dir)) return false;
      return this.open(x, y, dir);
    },
    /** Removes connection for a cell at x,y in a particular direction.
      * Returns false if the cell in the target direction does not exist.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @param {string} dir A string representing a direction
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.disconnect(1,2,"N")) ...
     */
    disconnect: function disconnect(x, y, dir) {
      // dir must be string
      // Disconnect cell from neighbor (one way)}
      if (!this.getNeighbor(x, y, dir)) return false;
      return this.close(x, y, dir);
    },

    /** Maps a connection for a cell at x,y in a particular direction.
      * Also maps a connection from the target cell back to the source cell.
      * Returns false if the cell in the target direction does not exist.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @param {string} dir A string representing a direction
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.connectUndirected(1,2,"N")) ...
     */
    connectUndirected: function connectUndirected(x, y, sDir) {
      // dir must be a string
      if (!this.connect(x, y, sDir)) {
        return false;
      }
      var n = this.getNeighbor(x, y, sDir);
      if (!this.connect(n.x, n.y, _OPPOSITE[sDir])) {
        return false;
      }
      return true;
    },

    /** Removes a connection for a cell at x,y in a particular direction.
      * Also removes a connection from the target cell back from the source cell.
      * Returns false if the cell in the target direction does not exist.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @param {string} dir A string representing a direction
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.disconnectUndirected(1,2,"N")) ...
     */
    disconnectUndirected: function disconnectUndirected(x, y, sDir) {
      // dir must be a string
      if (!this.disconnect(x, y, sDir)) {
        return false;
      }
      var n = this.getNeighbor(x, y, sDir);
      if (!this.disconnect(n.x, n.y, _OPPOSITE[sDir])) {
        return false;
      }
      return true;
    },

    /** Returns true if a cell connects to a neighbor cell in a particular direction.
      * It does not matter if a the target cell exists such as when [open]{@link module:connection-grid-core#open} maps a connection to a non-existant cell.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @param {string} dir A string representing a direction
      * @returns {boolean}
      * @function
      * @instance
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.connects(1,2,"N")) ...
     */
    connects: function connects(x, y, sDir) {
      if (!this.isDir(sDir)) {
        console.error("connects unknown direction: ", sDir);
        return false;
      }
      var cell = this.get(x, y);
      if (cell === null) {
        return false;
      }
      var iDir = _DIR_MAP[sDir];
      return (cell & iDir) !== 0;
    },
    /** Returns true if a cell connects to a neighbor cell in any direction in the list.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @param {array} list An array of strings that each represent a direction
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * if(core.connectsAny(1,2,["N","W"]) ...
     */
    connectsAny: function connectsAny(x, y, list) {
      var _this = this;

      var connects = false;
      list.forEach(function (el) {
        if (_this.connects(x, y, el)) {
          connects = true;
        }
      });
      return connects;
    },
    /** Returns cell that is max distance from x,y.
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {MaxDistance}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * let d = core.getMaxDistance(1,2)
      * console.log( "DISTANCE: " + d.x + ", " + d.y + " = " + d.distance );
     */
    getMaxDistance: function getMaxDistance(x, y) {
      this.clearAllVisited();
      // create new internal distance trackker
      this.maxDistance = {
        x: 0,
        y: 0,
        distance: 0
      };
      this.getDistance(x, y, 0);
      this.clearAllVisited(); // Reset for next routine to use
      // maxDistance.PrintMaxDistance();
      return this.maxDistance;
    },

    /** Internal recursive function that update internal maxDistance 
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {MaxDistance}
      * @memberof module:connection-grid-core
     */
    getDistance: function getDistance(x, y, distance) {
      // console.log( `DISTANCE:  ${x}, ${y} = ${distance}`);
      if (this.visited(x, y)) {
        // console.log(`RETURN - VISITED: ${x}, ${y}`);
        return;
      }
      // console.log(`markVisited: ${x},${y}`);
      this.markVisited(x, y);
      if (this.maxDistance.distance < distance) {
        this.maxDistance.x = x;
        this.maxDistance.y = y;
        this.maxDistance.distance = distance;
        // console.log(`UPDATING MAX DISTANCE: ${this.maxDistance.distance}`)
      }
      // console.log(this.maxDistance);
      if (!this.hasConnections(x, y)) return;
      var cell = this.get(x, y);
      var list = this.getNeighborDirs(x, y);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var sDir = _step2.value;

          // console.log(`SCANNING: ${sDir}`);
          if (!this.isDir(sDir)) {
            console.error("getDistance unknown direction: ", sDir);
            return;
          }
          var iDir = _DIR_MAP[sDir];
          if ((cell & iDir) != 0) {
            // console.log(`# CONNECTS NEIGHBOR: ${sDir} `);
            var neighbor = this.getNeighbor(x, y, sDir);
            if (neighbor.x == -1) return;
            this.getDistance(neighbor.x, neighbor.y, /* ++distance */distance + 1);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },

    /** Returns number of connections for cell
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {number}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * let count = core.connectionCount(1,2)
      */
    connectionCount: function connectionCount(x, y) {
      if (!this.hasConnections(x, y)) return;
      var cell = this.get(x, y);
      var list = this.getNeighborDirs(x, y);
      var connections = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var sDir = _step3.value;

          // console.log(`DEBUG: connectionCount - scanning: ${sDir}`)
          if (!this.isDir(sDir)) {
            console.error("connectionCount unknown direction: ", sDir);
            return 0;
          }
          var iDir = _DIR_MAP[sDir];
          if ((cell & iDir) != 0) {
            connections++;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return connections;
    },

    /** Returns true or false if cell is a dead end / leaf node (only one connection)
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * let flag = core.isLeaf(1,2);
      */
    isLeaf: function isLeaf(x, y) {
      return this.connectionCount(x, y) == 1;
    },

    /** Clears all connections and flags from cell 
      * @param {number} x The x coordinate
      * @param {number} y The y coordinate
      * @function
      * @instance
      * @returns {boolean}
      * @memberof module:connection-grid-core
      * @example <caption>usage</caption>
      * let isCell = core.reset(1,2);
      */
    reset: function reset(x, y) {
      if (!this.isCell(x, y)) {
        return false;
      }
      var list = this.getNeighborDirs(x, y);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = list[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var sDir = _step4.value;

          if (!this.isDir(sDir)) {
            console.error(".reset unknown direction: ", sDir);
            return false;
          }
          this.disconnectUndirected(x, y, sDir);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this.clearMask(x, y);
      this.clearVisited(x, y);
      this.clearRed(x, y);
      this.clearGreen(x, y);
      return true;
    }
  });
};

},{"@mitchallen/shuffle":1}]},{},[2])(2)
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
(function (global){(function (){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).GridSquare = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof _dereq_&&_dereq_;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof _dereq_&&_dereq_,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
(function (global){(function (){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).GridCore = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof _dereq_&&_dereq_;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof _dereq_&&_dereq_,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/grid-core/src/index.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

module.exports.create = function () {
    var spec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _spec$rows = spec.rows,
        _rows = _spec$rows === undefined ? 0 : _spec$rows;

    _rows = Math.max(_rows, 0);

    var _array = [];
    while (_array.push([]) < _rows) {}

    var obj = Object.create({}, {
        "rows": {
            writeable: false,
            value: _rows,
            enumerable: true
        }
    });

    return Object.assign(obj, {

        log: function log() {
            console.log("size: %d: ", _rows);
            console.log(_array);
        },
        rowSize: function rowSize(row) {
            if (row < 0 || row >= _rows) {
                return 0;
            }
            return _array[row].length;
        },
        isCell: function isCell(a, b) {
            var rs = this.rowSize(a);
            return a >= 0 && a < _rows && b >= 0 && b < rs;
        },
        set: function set(a, b, value) {
            // problem for sparse arrays
            // if(!this.isCell(a,b)) { return false; }
            if (a < 0 || b < 0) return false;
            _array[a][b] = value;
            return true;
        },
        get: function get(a, b) {
            if (!this.isCell(a, b)) {
                return null;
            }
            return _array[a][b];
        },
        fill: function fill(value) {
            for (var row = 0; row < _rows; row++) {
                var rs = this.rowSize(row);
                for (var pos = 0; pos < rs; pos++) {
                    _array[row][pos] = value;
                }
            }
        },
        cloneArray: function cloneArray() {
            var _clone = [];
            while (_clone.push([]) < _rows) {}
            for (var row = 0; row < _rows; row++) {
                var rs = this.rowSize(row);
                for (var pos = 0; pos < rs; pos++) {
                    _clone[row][pos] = _array[row][pos];
                }
            }
            return _clone;
        }
    });
};

},{}]},{},[1])(1)
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/grid-square/src/index.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var coreGrid = _dereq_('@mitchallen/grid-core');

module.exports.create = function () {
    var spec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _spec$x = spec.x,
        _x = _spec$x === undefined ? 0 : _spec$x,
        _spec$y = spec.y,
        _y = _spec$y === undefined ? 0 : _spec$y;

    _x = Math.max(_x, 0);
    _y = Math.max(_y, 0);

    var obj = coreGrid.create({ rows: _x });

    for (var row = 0; row < _x; row++) {
        for (var col = 0; col < _y; col++) {
            obj.set(row, col, 0);
        }
    }

    Object.defineProperties(obj, {
        "xSize": {
            writeable: false,
            value: _x,
            enumerable: true
        },
        "ySize": {
            writeable: false,
            value: _y,
            enumerable: true
        }
    });

    return obj;
};

},{"@mitchallen/grid-core":1}]},{},[2])(2)
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/connection-grid-square/src/index.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = _dereq_("@mitchallen/grid-square"),
    baseGrid = _dereq_("@mitchallen/connection-grid-core").create;

/**
 * Connection Grid Core
 * @external @mitchallen/connection-grid-core
 * @see {@link https://www.npmjs.com/package/@mitchallen/connection-grid-core|@mitchallen/connection-grid-core}
 */

/**
* Connection Grid Square generated by {@link module:connection-grid-square-factory|create}
* @module connection-grid-square
* @extends external:@mitchallen/connection-grid-core
*/

/**
* 
* A factory for generating connection grid square objects
* @module connection-grid-square-factory
*/

/** 
* Factory method that returns a connection grid square object.
* It takes one spec parameter that must be an object with named parameters.
* @param {Object} options Named parameters for generating a connection grid square
* @param {number} options.x The size along the x axis
* @param {number} options.y The size along the y axis
* @returns {module:connection-grid-square}
* @example <caption>Creating a connection-grid-square</caption>
* "use strict";
* var gridFactory = require("@mitchallen/connection-grid-square");
* let xSize = 5;
* let ySize = 6;
* var grid = gridFactory.create({ x: xSize, y: ySize });
*/
module.exports.create = function () {
    var spec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _spec$x = spec.x,
        _x = _spec$x === undefined ? 0 : _spec$x,
        _spec$y = spec.y,
        _y = _spec$y === undefined ? 0 : _spec$y;

    var _grid = gridFactory.create(spec);

    _grid.fill(0);

    var _dirMap = {
        "N": 0x010,
        "S": 0x020,
        "E": 0x040,
        "W": 0x080 };

    var _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };

    var obj = baseGrid({
        grid: _grid,
        dirMap: _dirMap,
        oppositeMap: _oppositeMap
    });

    Object.assign(obj, {
        /** Returns neighbor for direction
          * @param {string} dir A string representing a direction
          * @function
          * @instance
          * @memberof module:connection-grid-square
          * @returns {string}
          * @example <caption>usage</caption>
          * var cell = grid.getNeighbor(1,1,"S"); 
         */
        getNeighbor: function getNeighbor(x, y, dir) {
            if (!this.isCell(x, y)) {
                return null;
            }
            // dir must be string and in dirmap
            if (!this.isDir(dir)) {
                return null;
            }
            var _DX = { "E": 1, "W": -1, "N": 0, "S": 0 };
            var _DY = { "E": 0, "W": 0, "N": -1, "S": 1 };
            var nx = x + _DX[dir];
            var ny = y + _DY[dir];
            if (!this.isCell(nx, ny)) {
                return null;
            }
            return { x: nx, y: ny };
        },
        /** Returns an array of neighbors for the cell at x,y
          * @param {number} x X coordinate of cell
          * @param {number} y Y coordinate of cell
          * @function
          * @instance
          * @memberof module:connection-grid-square
          * @returns {array} 
          * @example <caption>usage</caption>
          * var list = grid.getNeighborDirs(1,1); 
         */
        getNeighborDirs: function getNeighborDirs(x, y) {
            // Classic ignores x and y, but other derived classes may not
            return ["N", "S", "E", "W"];
        }
    });

    return obj;
};

},{"@mitchallen/connection-grid-core":1,"@mitchallen/grid-square":2}]},{},[3])(3)
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
(function (global){(function (){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).MazeGeneratorCore = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof _dereq_&&_dereq_;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof _dereq_&&_dereq_,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/maze-generator-core/modules/index
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

/**
 * Connection Grid Core
 * @external @mitchallen/connection-grid-core
 * @see {@link https://www.npmjs.com/package/@mitchallen/connection-grid-core|@mitchallen/connection-grid-core}
 */

/**
 * Maze Generator Core generated by {@link module:maze-generator-core-factory|create}
 * @module maze-generator-core
 * @extends external:@mitchallen/connection-grid-core
 */

/**
 * 
 * A factory for generating maze generator core objects
 * @module maze-generator-core-factory
 */

/** 
* Factory method that returns a maze generator core object.
* It takes one spec parameter that must be an object with named parameters.
* @param {Object} options Named parameters for generating a maze generator core
* @param {grid} options.grid Grid based on {@link external:@mitchallen/connection-grid-core|@mitchallen/connection-grid-core}
* @returns {module:maze-generator-core}
* @example <caption>Creating a maze-generator-core</caption>
* let cgFactory = require("@mitchallen/connection-grid-square"),
*     mazeCore = require("@mitchallen/maze-generator-core"),
*     connectionGrid = cgFactory.create( { x: 5, y: 6 } );
*     maze = mazeCore.create( {
*          grid: connectionGrid,
*     });
*/

module.exports.create = function (spec) {

  spec = spec || {};
  var _grid = spec.grid;

  if (!_grid) {
    return null;
  }

  return Object.assign(_grid, {

    solve: function solve(points) {
      if (points.length < 1) return;
      var _points$ = points[0],
          startX = _points$.x,
          startY = _points$.y;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var point = _step.value;
          var _point$x = point.x,
              x = _point$x === undefined ? -1 : _point$x,
              _point$y = point.y,
              y = _point$y === undefined ? -1 : _point$y;

          this.markGreen(x, y);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var maxDepth = this.xSize * this.ySize;
      this.clearAllVisited();
      this.solveNode(startX, startY, 0, maxDepth);
    },

    solveNode: function solveNode(x, y, depth, maxDepth) {

      if (depth >= maxDepth) {
        console.warn("MAXIMUM DEPTH REACHED: %d", maxDepth);
        return;
      }

      if (this.isLeaf(x, y) && !this.isGreen(x, y)) {
        this.markRed(x, y);
        return;
      }

      if (this.visited(x, y)) return;
      if (this.markVisited(x, y)) ;

      var dirs = this.getShuffledNeighborDirs(x, y);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = dirs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var sDir = _step2.value;

          var n = this.getNeighbor(x, y, sDir);
          if (n === null) {
            continue;
          }
          if (!this.connects(x, y, sDir)) continue;
          if (this.isRed(n.x, n.y)) {
            continue;
          }

          this.solveNode(n.x, n.y, depth + 1, maxDepth);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var connectionCount = 0;
      var redCount = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = dirs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _sDir = _step3.value;

          var _n = this.getNeighbor(x, y, _sDir);
          if (_n === null) {
            continue;
          }
          if (!this.connects(x, y, _sDir)) continue;
          connectionCount++;
          if (this.isRed(_n.x, _n.y)) {
            redCount++;
            continue;
          }
        }

        // redCount = neighbors marked as red
        // connectionCount = neighbors connected
        // diff = connectionCount - redCount
        // if diff == 1
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var diff = connectionCount - redCount;
      // console.log(`[${x}, ${y}] connections: ${connectionCount}, red: ${redCount}`)
      if (diff === 1) {
        if (!this.isGreen(x, y)) {
          this.markRed(x, y);
        }
      } else {
        this.markGreen(x, y);
      }
    },

    // leave undocumented for now
    carveMaze: function carveMaze(x, y, depth, maxDepth, depthFunction) {

      // if (depth >= maxDepth) {
      //   console.warn("MAXIMUM DEPTH REACHED: %d", maxDepth);
      //   return;
      // }

      if (depthFunction(depth, maxDepth)) {
        return;
      }

      if (!this.isCell(x, y)) {
        return;
      }
      var dirs = this.getShuffledNeighborDirs(x, y);
      for (var key in dirs) {
        var sDir = dirs[key];
        var n = this.getNeighbor(x, y, sDir);
        if (n === null) {
          continue;
        }

        if (this.isMasked(n.x, n.y)) {
          continue;
        }

        if (this.isCell(n.x, n.y) && !this.hasConnections(n.x, n.y)) {
          // Connect cell to neighbor
          this.connectUndirected(x, y, sDir);
          this.carveMaze(n.x, n.y, depth + 1, maxDepth, depthFunction);
        }
      }
    },

    /**
      * Method called after [generate]{@link module:maze-generator-core#generate} generates a maze.
      * <b>This should be overriden by derived class</b>.
      * The spec parameter will be passed on to this method after the maze has been generated.
      * The derived method should parse spec for needed values.
      * @param {Object} spec Named parameters for method
      * @function
      * @instance
      * @memberof module:maze-generator-core
      * @example <caption>possible usage</caption>
      * // A derived object would have an afterGenerate method that parses spec.open
      * let spec = {
      *    open: [
      *      { border: "N", list: [ 0, 2 ] },
      *      { border: "S", list: [ 3 ] }
      *    ]
      * };
      * mazeGenerator.generate(spec);
      */
    afterGenerate: function afterGenerate(spec) {
      // derived class should override
    },

    /** Generators a maze
      * @param {Object} options Named parameters for generating a maze
      * @param {Array} options.mask An array of cells to mask off from maze generation
      * @param {Array} options.open An array of objects designation what borders to open after generation
      * @param {Object} opions.start An object containing the x and y parameter of a cell to start maze generation from.
      * @function
      * @instance
      * @memberof module:maze-generator-core
      * @returns {boolean}
      * @example <caption>generate</caption>
      * maze.generate();
      * @example <caption>mask</caption>
      * let spec = {
      *    mask: [
      *      { c: 2, r: 3 },
      *      { c: 2, r: 4 }
      *    ]
      * };
      * mazeGenerator.generate(spec);
      * @example <caption>start and mask</caption>
      * let spec = {
      *    start: { c: 3, r: 3 },
      *    mask: [
      *      { c: 0, r: 0 },
      *      { c: 0, r: 1 },
      *      { c: 1, r: 0 },
      *      { c: 1, r: 1 }
      *    ]
      * };
      * mazeGenerator.generate(spec);
      */
    generate: function generate(spec) {

      spec = spec || {};

      var aMask = spec.mask || [],
          start = spec.start || {},
          x = start.c || 0,
          y = start.r || 0;

      var depthFunction = spec.depthFunction || function (depth, maxDepth) {
        depth >= maxDepth;
      };

      this.fill(0);

      for (var mKey in aMask) {
        var mask = aMask[mKey];
        this.mask(mask.c, mask.r);
      }

      var maxDepth = this.xSize * this.ySize;

      this.carveMaze(x, y, 0, maxDepth, depthFunction);

      // derived class can parse extra spec parameters

      this.afterGenerate(spec);
    }
  });
};

},{}]},{},[1])(1)
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/maze-generator-square/modules/index
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var cgFactory = _dereq_("@mitchallen/connection-grid-square"),
    baseGrid = _dereq_("@mitchallen/maze-generator-core");

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
module.exports.create = function () {
  var spec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _spec$x = spec.x,
      _x = _spec$x === undefined ? 0 : _spec$x,
      _spec$y = spec.y,
      _y = _spec$y === undefined ? 0 : _spec$y;

  var connections = cgFactory.create(spec);

  var obj = baseGrid.create({
    grid: connections
  });

  return Object.assign(obj, {

    /**
      * Called by base class after generate generates the maze.
      * Not meant to be called directly. The generate method will pass the spec on to this method.
      * @param {Object} spec Object containing named parameters passed through generate method.
      * @param {Array} spec.open Array of objects specifying what borders to open
      * @param {Object} spec.open[i]. Item containing info on how to open border
      * @param {string} spec.open[i].border String representing border ("N","E","W","S")
      * @param {number} spec.open[i].list[j]. Zero-based id along border designating which cell to open
      * @function
      * @instance
      * @memberof module:maze-generator-square
      * @example <caption>open north border</caption>
      * // calls generate to pass spec on to afterGenerate
      * var xSize = 5, ySize = 6;
      * var mazeGenerator = factory.create({ x: xSize, y: ySize });
      * let spec = {
      *     open: [
      *         { border: "N", list: [0,2,xSize-1] }
      *     ]
      * };
      * mazeGenerator.generate(spec);
      * mazeGenerator.printBoard();
      * // example output
      *    __  __  
      * | |  _  | |
      * |___| |_  |
      * |  _|   | |
      * | |  _| | |
      * | |_  |___|
      * |_________|
      * @example <caption>open all border</caption>
      * // calls generate to pass spec on to afterGenerate
      * var xSize = 5, ySize = 6;
      * var mazeGenerator = factory.create({ x: xSize, y: ySize });
      * let spec = {
      *     open: [
      *         { border: "N", list: [0,2,xSize-1] },
      *         { border: "S", list: [0,2,xSize-1] },
      *         { border: "E", list: [0,2,ySize-1] },
      *         { border: "W", list: [0,2,ySize-1] }
      *     ]
      * };
      * mazeGenerator.generate(spec);
      * mazeGenerator.printBoard();
      * // example output
      *   __  __  
      *  _  |   |  
      * | | | |_  |
      *   |___| |  
      * |  _  |  _|
      * |   |_|_  |
      *   |_   _   
      */
    afterGenerate: function afterGenerate() {
      var spec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _spec$open = spec.open,
          aOpen = _spec$open === undefined ? [] : _spec$open;


      if (aOpen.length === 0) {
        return;
      }

      var borders = ["N", "E", "W", "S"];

      for (var oKey in aOpen) {
        var open = aOpen[oKey];
        if (borders.indexOf(open.border) >= 0) {

          var list = open.list;

          if (!list) {
            console.error("ERROR: open border requires list parameter.");
            continue;
          }

          for (var key in list) {
            var id = list[key];
            if (open.border === "N") {
              if (id >= 0 && id < _x) {
                this.open(id, 0, "N");
              }
            }
            if (open.border === "S") {
              if (id >= 0 && id < _x) {
                this.open(id, _y - 1, "S");
              }
            }
            if (open.border === "W") {
              if (id >= 0 && id < _y) {
                this.open(0, id, "W");
              }
            }
            if (open.border === "E") {
              if (id >= 0 && id < _y) {
                this.open(_x - 1, id, "E");
              }
            }
          }
        } else {
          console.error("ERROR: open.border ('%s') not found", open.border);
        }
      }
    },

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
      * MAZE: 20, 20
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
    printBoard: function printBoard() {
      var spec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      console.log("MAZE: %d, %d", _x, _y);
      var _spec$target = spec.target,
          target = _spec$target === undefined ? {} : _spec$target;
      var _target$x = target.x,
          tX = _target$x === undefined ? -1 : _target$x,
          _target$y = target.y,
          tY = _target$y === undefined ? -1 : _target$y;
      // print top north walls

      var border = "";
      for (var i = 0; i < _x; i++) {
        border += i === 0 ? " " : "";
        border += this.connects(i, 0, "N") ? "  " : "__";
      }
      console.log(border);
      // print maze east and south walls
      var dirMap = this.dirMap;
      for (var my = 0; my < _y; my++) {
        var row = this.connects(0, my, "W") ? " " : "|";
        for (var mx = 0; mx < _x; mx++) {
          var isTarget = tX == mx && tY == my;
          var isGreen = this.isGreen(mx, my);
          // See Unicode characters: https://jrgraphix.net/r/Unicode/2300-23FF
          // https://jrgraphix.net/r/Unicode/2500-257F
          var southClosed = isTarget ? "\u23C2" : isGreen ? "\u235C" : "_";
          var southOpen = isTarget ? "\u25BC" : isGreen ? "\u233E" : " ";
          row += this.connects(mx, my, "S") ? southOpen : southClosed;
          if (this.connects(mx, my, "E")) {
            row += ((this.get(mx, my) | this.get(mx + 1, my)) & dirMap.S) !== 0 ? " " : "_";
          } else {
            row += "|";
          }
        }
        console.log(row);
      }
    }
  });
};

},{"@mitchallen/connection-grid-square":1,"@mitchallen/maze-generator-core":2}]},{},[3])(3)
});
