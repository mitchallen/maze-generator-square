
@mitchallen/grid-core
==
Grid core
--

<p align="left">

  <a href="https://travis-ci.org/mitchallen/grid-core">
    <img src="https://img.shields.io/travis/mitchallen/grid-core.svg?style=flat-square" alt="Version">
  </a>
  
  <a href="https://codecov.io/gh/mitchallen/grid-core">
    <img src="https://codecov.io/gh/mitchallen/grid-core/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  
  <a href="https://npmjs.org/package/@mitchallen/grid-core">
    <img src="http://img.shields.io/npm/v/@mitchallen/grid-core.svg?style=flat-square" alt="Version">
  </a>
  
  <a href="https://npmjs.org/package/@mitchallen/grid-core">
    <img src="https://img.shields.io/github/license/mitchallen/grid-core.svg">
  </a>
</p> 

* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/grid-core --save 
  
* * *

## Usage

Create a new folder and do the following at the command line:

    $ npm init
    $ npm install @mitchallen/grid-core --save

In the same folder create a file called __index.js__ with the content below:

```js
    "use strict";

    var gridFactory = require("@mitchallen/grid-core");

    var rows = 5;

    var grid = gridFactory.create( { rows: rows } );

    if(!grid) {
        console.error("couldn't create grid");
    }

    var i = rows - 1,
        j = 3,
        value = 999;

    if(! grid.set( i, j, value )) {
        console.error("couldn't set grid value");
    }

    grid.log();

    if(! grid.isCell( i, j ) ) {
        console.error("parameters not within grid");
    }

    let result = grid.get( i, j );

    if(! result) {
        console.error("couldn't get grid value");
    } else {
        console.log("grid value: ", result );
    }
```
    
At the command line, execute the following:

    $ node index.js
    
Output:

    size: 5: 
    [ [], [], [], [], [ , , , 999 ] ]
    grid value:  999
  
An example similar to this exists on the __examples__ folder out on the repo.


## Browser Usage

```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Grid Core Example</title>
        <meta name="description" content="Grid Core Example">
        <script src="https://unpkg.com/@mitchallen/grid-core@0.1.10/dist/grid-core.min.js"></script>
        <script>
          var factory = window.MitchAllen.GridCore;
          console.log(factory);
          var rows = 5;
          var gc = factory.create( { rows: rows } );
          gc.set(rows-1,6,"alpha");
          console.log(gc);
          gc.log(); 
        </script>
      </head>
      <body>
        <h1>Grid Core Example</h1>
        <p>See JavaScript developer console for output.</p>
      </body>
    </html>
```
    
* * *

## Methods

### create( spec )

Factory method that returns a sparse grid object.

It takes one spec parameter that must be an object with a __rows__ value specifying the size of the number of rows in the grid.


You can call __create__ multiple times to create multiple grids.

    var gridFactory = require("@mitchallen/grid-core");
    
    var grid1 = gridFactory.create( { rows: 5 } );
    var grid2 = gridFactory.create( { rows: 10 } );
    
	if(!grid1 || !grid2) ...
	
### rows

Returns the number for rows in the grid.

	grid.rows.should.eql(5);
	
### rowsSize(rowId)

Returns the number of items in the array in row __rowId__.

	grid.rowSize(3).should.eql(10);
	
A row size is determined by the highest zero-based position inserted into that row.


### grid.isCell( row, pos )

The __row__ and __pos__ parameters should be zero-based coordinates ranging from  zero (0) to axis size minus one. 
 

The method is called internally by __get__.

    if(! grid.isCell( i, j ) ) {
    	console.error("parameters not within grid");
    }

### grid.set( row, pos, value )

The __row__ and __pos__ values must be greater than zero. If the parameters fail validation then a value of __false__ is returned. Otherwise __true__ is returned.

The __value__ parameter can be a number, a string or even an object.

    if(! grid.set( i, j, value )) {
    	console.error("couldn't set grid value");
    }
    
Only the row needs to exist. If the position in the row does not exist it will be created.

### grid.get( row, pos )

The __row__ and __pos__ values are passed to the __isCell__ method internally for validation. If the parameters fail validation then a __*null*__ object is returned. Otherwise the value of the cell (grid location) is returned.

The returned value can be a number, a string or even an object.

    let result = grid.get( i, j );
    
    if(! result) {
    	console.error("couldn't get grid value");
    } else {
    	console.log("grid value: ", result );
    }

### grid.fill(value)

Fills the grid with whatever is passed in as __value__. Value can be a number, a string or even an object. Any existing values in the grid will be replaced with the new fill value.

    let fillValue = "foo";
    
    var result = grid.fill(fillValue);
    
### grid.cloneArray()

Returns a clone of the internal array. This is not a reference. So changes to the cloned array should not change the original.

	let tX = 0;
	let tY = 0;
	let gridValue = 100;
	let cloneValue = 500;
	
	// Set a value in the original grid
	grid.set(tX,tY,gridValue);

	// Clone the grid	
	let arr = grid.cloneArray();
	
	// Verify value exists in clone
	arr[tX][tY].should.eql(gridValue);
	
	// Change value in clone
	arr[tX][tY] = cloneValue;
	
	// Verify new value is set in clone
	arr[tX][tY].should.eql(cloneValue);
	
	// Ensure that value does not alter original grid
	grid.get(tX,tY).should.eql(gridValue);
	

### grid.log()

Logs the size and contents of the internal array.

    grid.log();
    
Example output:
      
    size: 5: 
    [ 
      [], 
      [], 
      [], 
      [], 
      [ , , , 999 ] ]

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/grid-core.git](https://bitbucket.org/mitchallen/grid-core.git)
* [github.com/mitchallen/grid-core.git](https://github.com/mitchallen/grid-core.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.9

* updated .npmignore
* updated client dist version

#### Version 0.1.8

* added test cases for 100% code coverage

#### Version 0.1.7

* updated badge links

#### Version 0.1.6

* changed license to MIT
* integrated travis-ci and codecov.io
* added badges to readme

#### Version 0.1.5

* removed unused dependency

#### Version 0.1.4

* added examples

#### Version 0.1.3

* Removed dist from .npmignore

#### Version 0.1.2 

* fixed browserify standalone setting
* used __window.MitchAllen.GridCore__ to access from the browser

#### Version 0.1.1 

* removed obsolete file

#### Version 0.1.0 

* initial release

* * *
