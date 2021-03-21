/**
    Module: @mitchallen/grid-core/src/index.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

module.exports.create = (spec = {}) => {

    let { rows: _rows = 0} = spec;
    _rows = Math.max( _rows, 0 );

    var _array = [];
    while(_array.push([]) < _rows);

    var obj = Object.create({}, {
        "rows": {
            writeable: false,
            value: _rows,
            enumerable: true
        },
    });

    return Object.assign( obj, {

        log: function() { 
            console.log("size: %d: ", _rows );
            console.log(_array); 
        },
        rowSize: function(row) {
            if( row < 0 || row >= _rows ) {
                return 0;
            }
            return _array[row].length;
        },
        isCell: function(a,b) {
            var rs = this.rowSize(a);
            return a >= 0 && a < _rows && b >= 0 && b < rs;
        },
        set: function(a,b,value) {
            // problem for sparse arrays
            // if(!this.isCell(a,b)) { return false; }
            if(a < 0 || b < 0 ) return false;
            _array[a][b] = value;
            return true;
        },
        get: function(a,b) {
            if(!this.isCell(a,b)) { return null; }
            return _array[a][b];
        },
        fill: function(value) {
            for(var row = 0; row < _rows; row++) {
                var rs = this.rowSize(row);
                for(var pos = 0; pos < rs; pos++) {
                    _array[row][pos] = value;
                }
            }
        },
        cloneArray: function() {
            var _clone = [];
            while(_clone.push([]) < _rows);
            for(var row = 0; row < _rows; row++) {
                var rs = this.rowSize(row);
                for(var pos = 0; pos < rs; pos++) {
                    _clone[row][pos] = _array[row][pos];
                }
            }
            return _clone;
        }
    });

};