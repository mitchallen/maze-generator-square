"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// node_modules/@mitchallen/grid-square/dist/grid-square.js
var require_grid_square = __commonJS({
  "node_modules/@mitchallen/grid-square/dist/grid-square.js"(exports2, module2) {
    "use strict";
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __commonJS2 = (cb, mod) => function __require() {
      try {
        return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
      } catch (e) {
        throw mod = 0, e;
      }
    };
    var require_grid_core = __commonJS2({
      "node_modules/@mitchallen/grid-core/dist/grid-core.js"(exports22, module22) {
        (function(f) {
          if (typeof exports22 === "object" && typeof module22 !== "undefined") {
            module22.exports = f();
          } else if (typeof define === "function" && define.amd) {
            define([], f);
          } else {
            var g;
            if (typeof window !== "undefined") {
              g = window;
            } else if (typeof global !== "undefined") {
              g = global;
            } else if (typeof self !== "undefined") {
              g = self;
            } else {
              g = this;
            }
            (g.MitchAllen || (g.MitchAllen = {})).GridCore = f();
          }
        })(function() {
          var define2, module3, exports3;
          return (/* @__PURE__ */ (function() {
            function r(e, n, t) {
              function o(i2, f) {
                if (!n[i2]) {
                  if (!e[i2]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i2, true);
                    if (u) return u(i2, true);
                    var a = new Error("Cannot find module '" + i2 + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                  }
                  var p = n[i2] = { exports: {} };
                  e[i2][0].call(p.exports, function(r2) {
                    var n2 = e[i2][1][r2];
                    return o(n2 || r2);
                  }, p, p.exports, r, e, n, t);
                }
                return n[i2].exports;
              }
              for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
              return o;
            }
            return r;
          })())({ 1: [function(_dereq_, module4, exports4) {
            "use strict";
            module4.exports.create = function() {
              var spec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              var _spec$rows = spec.rows, _rows = _spec$rows === void 0 ? 0 : _spec$rows;
              _rows = Math.max(_rows, 0);
              var _array = [];
              while (_array.push([]) < _rows) {
              }
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
                  while (_clone.push([]) < _rows) {
                  }
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
          }, {}] }, {}, [1])(1);
        });
      }
    });
    var coreGrid = require_grid_core();
    module2.exports.create = (spec = {}) => {
      let {
        x: _x = 0,
        y: _y = 0
      } = spec;
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
  }
});

// node_modules/@mitchallen/shuffle/dist/shuffle.cjs.js
var require_shuffle_cjs = __commonJS({
  "node_modules/@mitchallen/shuffle/dist/shuffle.cjs.js"(exports2, module2) {
    "use strict";
    module2.exports.create = (a) => {
      if (!a || !a.array) return null;
      var r = a.array.slice(0);
      return { shuffle: function() {
        var t = 0, n = 0, e = null;
        for (t = r.length - 1; t > 0; t -= 1) n = Math.floor(Math.random() * (t + 1)), e = r[t], r[t] = r[n], r[n] = e;
        return r;
      } };
    };
  }
});

// node_modules/@mitchallen/connection-grid-core/src/index.js
var require_src = __commonJS({
  "node_modules/@mitchallen/connection-grid-core/src/index.js"(exports2, module2) {
    "use strict";
    var shuffleFactory = require_shuffle_cjs();
    module2.exports.create = (spec) => {
      spec = spec || {};
      var _grid = spec.grid;
      var _DIR_MAP = spec.dirMap || {};
      var _OPPOSITE = spec.oppositeMap || {};
      if (!_grid) {
        return null;
      }
      let VISITED = 1;
      let MASKED = 2;
      let RED = 4;
      let GREEN = 8;
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
        isDir: function(dir) {
          if (typeof dir === "string") {
            return _DIR_MAP[dir] !== void 0;
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
        getOppositeDir: function(dir) {
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
        getNeighbor: function(x, y, dir) {
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
        getNeighborDirs: function(x, y) {
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
        getShuffledNeighborDirs: function(x, y) {
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
        setFlag: function(x, y, flag) {
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
        clearFlag: function(x, y, flag) {
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
        isFlagSet: function(x, y, flag) {
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
        markVisited: function(x, y) {
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
        clearVisited: function(x, y) {
          return this.clearFlag(x, y, VISITED);
        },
        /** Clear all visited flag from grid
          * @function
          * @instance
          * @memberof module:connection-grid-core
          * @example <caption>usage</caption>
          * core.clearAllVisited();
         */
        clearAllVisited: function() {
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
        visited: function(x, y) {
          if (!this.isCell(x, y)) {
            return false;
          }
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
        mask: function(x, y) {
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
        clearMask: function(x, y) {
          return this.clearFlag(x, y, MASKED);
        },
        /** Clear all mask flags from grid
          * @function
          * @instance
          * @memberof module:connection-grid-core
          * @example <caption>usage</caption>
          * core.clearAllMasks();
         */
        clearAllMasks: function() {
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
        isMasked: function(x, y) {
          if (!this.isCell(x, y)) {
            return false;
          }
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
        markRed: function(x, y) {
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
        clearRed: function(x, y) {
          return this.clearFlag(x, y, RED);
        },
        /** Clear all red flags from grid
          * @function
          * @instance
          * @memberof module:connection-grid-core
          * @example <caption>usage</caption>
          * core.clearAllRed();
         */
        clearAllRed: function() {
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
        isRed: function(x, y) {
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
        markGreen: function(x, y) {
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
        clearGreen: function(x, y) {
          return this.clearFlag(x, y, GREEN);
        },
        /** Clear all green flags from grid
          * @function
          * @instance
          * @memberof module:connection-grid-core
          * @example <caption>usage</caption>
          * core.clearAllGreen();
         */
        clearAllGreen: function() {
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
        isGreen: function(x, y) {
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
        hasConnections: function(x, y) {
          let cell = this.get(x, y);
          if (cell === null) {
            return false;
          }
          cell = cell & ~(VISITED | MASKED | RED | GREEN);
          if (cell === 0) {
            return false;
          }
          let list = this.getNeighborDirs(x, y);
          for (let sDir of list) {
            if (!this.isDir(sDir)) {
              console.error("hasConnections unknown direction: ", sDir);
              return false;
            }
            var iDir = _DIR_MAP[sDir];
            if ((cell & iDir) !== 0) {
              return true;
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
        open: function(x, y, dir) {
          if (!this.isDir(dir)) {
            return false;
          }
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
        close: function(x, y, dir) {
          if (!this.isDir(dir)) {
            return false;
          }
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
        connect: function(x, y, dir) {
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
        disconnect: function(x, y, dir) {
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
        connectUndirected: function(x, y, sDir) {
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
        disconnectUndirected: function(x, y, sDir) {
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
        connects: function(x, y, sDir) {
          if (!this.isDir(sDir)) {
            console.error("connects unknown direction: ", sDir);
            return false;
          }
          let cell = this.get(x, y);
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
        connectsAny: function(x, y, list) {
          var connects = false;
          list.forEach((el) => {
            if (this.connects(x, y, el)) {
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
        getMaxDistance(x, y) {
          this.clearAllVisited();
          this.maxDistance = {
            x: 0,
            y: 0,
            distance: 0
          };
          this.getDistance(x, y, 0);
          this.clearAllVisited();
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
        getDistance(x, y, distance) {
          if (this.visited(x, y)) {
            return;
          }
          this.markVisited(x, y);
          if (this.maxDistance.distance < distance) {
            this.maxDistance.x = x;
            this.maxDistance.y = y;
            this.maxDistance.distance = distance;
          }
          if (!this.hasConnections(x, y)) return;
          let cell = this.get(x, y);
          let list = this.getNeighborDirs(x, y);
          for (let sDir of list) {
            if (!this.isDir(sDir)) {
              console.error("getDistance unknown direction: ", sDir);
              return;
            }
            let iDir = _DIR_MAP[sDir];
            if ((cell & iDir) != 0) {
              let neighbor = this.getNeighbor(x, y, sDir);
              if (neighbor.x == -1) return;
              this.getDistance(
                neighbor.x,
                neighbor.y,
                /* ++distance */
                distance + 1
              );
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
        connectionCount(x, y) {
          if (!this.hasConnections(x, y)) return;
          let cell = this.get(x, y);
          let list = this.getNeighborDirs(x, y);
          let connections = 0;
          for (let sDir of list) {
            if (!this.isDir(sDir)) {
              console.error("connectionCount unknown direction: ", sDir);
              return 0;
            }
            let iDir = _DIR_MAP[sDir];
            if ((cell & iDir) != 0) {
              connections++;
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
        isLeaf(x, y) {
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
        reset(x, y) {
          if (!this.isCell(x, y)) {
            return false;
          }
          let list = this.getNeighborDirs(x, y);
          for (let sDir of list) {
            if (!this.isDir(sDir)) {
              console.error(".reset unknown direction: ", sDir);
              return false;
            }
            this.disconnectUndirected(x, y, sDir);
          }
          this.clearMask(x, y);
          this.clearVisited(x, y);
          this.clearRed(x, y);
          this.clearGreen(x, y);
          return true;
        }
      });
    };
  }
});

// node_modules/@mitchallen/connection-grid-square/src/index.js
var require_src2 = __commonJS({
  "node_modules/@mitchallen/connection-grid-square/src/index.js"(exports2, module2) {
    "use strict";
    var gridFactory = require_grid_square();
    var baseGrid2 = require_src().create;
    module2.exports.create = (spec = {}) => {
      let { x: _x = 0, y: _y = 0 } = spec;
      var _grid = gridFactory.create(spec);
      _grid.fill(0);
      var _dirMap = {
        "N": 16,
        "S": 32,
        "E": 64,
        "W": 128
      };
      let _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };
      var obj = baseGrid2({
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
        getNeighbor: function(x, y, dir) {
          if (!this.isCell(x, y)) {
            return null;
          }
          if (!this.isDir(dir)) {
            return null;
          }
          let _DX = { "E": 1, "W": -1, "N": 0, "S": 0 };
          let _DY = { "E": 0, "W": 0, "N": -1, "S": 1 };
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
        getNeighborDirs: function(x, y) {
          return ["N", "S", "E", "W"];
        }
      });
      return obj;
    };
  }
});

// node_modules/@mitchallen/maze-generator-core/dist/maze-generator-core.js
var require_maze_generator_core = __commonJS({
  "node_modules/@mitchallen/maze-generator-core/dist/maze-generator-core.js"(exports2, module2) {
    "use strict";
    module2.exports.create = (spec) => {
      spec = spec || {};
      let _grid = spec.grid;
      if (!_grid) {
        return null;
      }
      return Object.assign(_grid, {
        solve: function(points) {
          if (points.length < 1) return;
          let { x: startX, y: startY } = points[0];
          for (let point of points) {
            let { x = -1, y = -1 } = point;
            this.markGreen(x, y);
          }
          let maxDepth = this.xSize * this.ySize;
          this.clearAllVisited();
          this.solveNode(startX, startY, 0, maxDepth);
        },
        solveNode: function(x, y, depth, maxDepth) {
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
          let dirs = this.getShuffledNeighborDirs(x, y);
          for (let sDir of dirs) {
            let n = this.getNeighbor(x, y, sDir);
            if (n === null) {
              continue;
            }
            if (!this.connects(x, y, sDir)) continue;
            if (this.isRed(n.x, n.y)) {
              continue;
            }
            this.solveNode(n.x, n.y, depth + 1, maxDepth);
          }
          let connectionCount = 0;
          let redCount = 0;
          for (let sDir of dirs) {
            let n = this.getNeighbor(x, y, sDir);
            if (n === null) {
              continue;
            }
            if (!this.connects(x, y, sDir)) continue;
            connectionCount++;
            if (this.isRed(n.x, n.y)) {
              redCount++;
              continue;
            }
          }
          const diff = connectionCount - redCount;
          if (diff === 1) {
            if (!this.isGreen(x, y)) {
              this.markRed(x, y);
            }
          } else {
            this.markGreen(x, y);
          }
        },
        // leave undocumented for now
        carveMaze: function(x, y, depth, maxDepth, depthFunction) {
          if (depthFunction(depth, maxDepth)) {
            return;
          }
          if (!this.isCell(x, y)) {
            return;
          }
          let dirs = this.getShuffledNeighborDirs(x, y);
          for (let key in dirs) {
            let sDir = dirs[key];
            let n = this.getNeighbor(x, y, sDir);
            if (n === null) {
              continue;
            }
            if (this.isMasked(n.x, n.y)) {
              continue;
            }
            if (this.isCell(n.x, n.y) && !this.hasConnections(n.x, n.y)) {
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
        afterGenerate: function(spec2) {
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
        generate: function(spec2) {
          spec2 = spec2 || {};
          let aMask = spec2.mask || [], start = spec2.start || {}, x = start.c || 0, y = start.r || 0;
          let depthFunction = spec2.depthFunction || ((depth, maxDepth2) => {
            depth >= maxDepth2;
          });
          this.fill(0);
          for (let mKey in aMask) {
            let mask = aMask[mKey];
            this.mask(mask.c, mask.r);
          }
          let maxDepth = this.xSize * this.ySize;
          this.carveMaze(x, y, 0, maxDepth, depthFunction);
          this.afterGenerate(spec2);
        }
      });
    };
  }
});

// src/index.js
var cgFactory = require_src2();
var baseGrid = require_maze_generator_core();
module.exports.create = (spec = {}) => {
  let {
    x: _x = 0,
    y: _y = 0
  } = spec;
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
    afterGenerate: function(spec2 = {}) {
      let {
        open: aOpen = []
      } = spec2;
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
    printBoard: function(spec2 = {}) {
      console.log("MAZE: %d, %d", _x, _y);
      let { target = {} } = spec2;
      let { x: tX = -1, y: tY = -1 } = target;
      var border = "";
      for (var i = 0; i < _x; i++) {
        border += i === 0 ? " " : "";
        border += this.connects(i, 0, "N") ? "  " : "__";
      }
      console.log(border);
      let dirMap = this.dirMap;
      for (var my = 0; my < _y; my++) {
        var row = this.connects(0, my, "W") ? " " : "|";
        for (var mx = 0; mx < _x; mx++) {
          let isTarget = tX == mx && tY == my;
          let isGreen = this.isGreen(mx, my);
          let southClosed = isTarget ? "\u23C2" : isGreen ? "\u235C" : "_";
          let southOpen = isTarget ? "\u25BC" : isGreen ? "\u233E" : " ";
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
