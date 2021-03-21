
@mitchallen/shuffle
==
Uses Fisher-Yates to shuffle an array.
--

<p align="left">

  <a href="https://travis-ci.org/mitchallen/shuffle">
    <img src="https://img.shields.io/travis/mitchallen/shuffle.svg?style=flat-square" alt="Version">
  </a>
  
  <a href="https://codecov.io/gh/mitchallen/shuffle">
    <img src="https://codecov.io/gh/mitchallen/shuffle/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  
  <a href="https://npmjs.org/package/@mitchallen/shuffle">
    <img src="http://img.shields.io/npm/v/@mitchallen/shuffle.svg?style=flat-square" alt="Version">
  </a>
  
  <a href="https://npmjs.org/package/@mitchallen/shuffle">
    <img src="https://img.shields.io/github/license/mitchallen/shuffle.svg">
  </a>
  
</p>


* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/shuffle --save
  
* * *

## Usage 

    "use strict";
    
    var shuffleFactory = require("@mitchallen/shuffle");
    
	var list = [1, 2, 3, 4, 5];
	
    var shuffler = shuffleFactory.create({ array: list });
    
    var shuffled = shuffler.shuffle();
    
    console.log(shuffled);
    
## Browser Usage:

You can reference a minimized client version inside an HTML script tag using one of these URL's:

* https://cdn.rawgit.com/mitchallen/shuffle/v0.1.4/dist/shuffle.min.js
* https://unpkg.com/@mitchallen/shuffle@0.1.4/dist/shuffle.min.js

Adjust for the version that you wish to use.

The __rawgit.com__ URL will pull based on the version from GitHub.

The __unpkg.com__ URL will pull based on the version in npmjs.com.

See http://rawgit.com and https://unpkg.com for other ways to retrieve the file.

The factory function can be retrieved from __window.MitchAllen.Shuffle__:

    var factory = window.MitchAllen.Shuffle;
    var list = [1, 2, 3, 4, 5];
    var obj = factory.create({ array: list });
    var shuffled = obj.shuffle();

Example:

    <!DOCTYPE html>
    <html>
      <head>
    <meta charset="utf-8">
        <title>Shuffle Example</title>
        <meta name="description" content="Shuffle Example">
        <!-- either cdn should work -->
        <!--
        <script src="https://cdn.rawgit.com/mitchallen/shuffle/v0.1.10/dist/shuffle.min.js"></script>
        -->
        <script src="https://unpkg.com/@mitchallen/shuffle@0.1.10/dist/shuffle.min.js"></script>
        <script>
          var factory = window.MitchAllen.Shuffle;
          var list = [1, 2, 3, 4, 5];
          var obj = factory.create({ array: list });
          var shuffled = obj.shuffle();
          console.log(shuffled); 
        </script>
      </head>
      <body>
        <h1>Shuffle Example</h1>
        <p>See the JavaScript console for results.</p>
      </body>
    </html>
    
* * * 
   
## Methods

### create( spec )

Factory method that returns a shuffle object.

It takes one spec parameter that must be an object an array value specifying the array to be shuffled.

The method will return null if create fails, such as with bad parameters.

You can call create multiple times to create multiple shuffle objects.

	var shuffleFactory = require("@mitchallen/shuffle");

	var s1 = shuffleFactory.create( { array: [ 1, 2, 3, 4, 5 ] } );
	var s2 = shuffleFactory.create( { array: [ 6, 7, 8, 9, 10 ] }  );

    if(!s1 || !s2) ...
    
### shuffle()

Returns a shuffled version of the array passed to the create method. It does not affect the original but instead returns a shuffled copy. You can call __shuffle__ multiple times and it will keep shuffling it's internal copy.

	var shuffleFactory = require("@mitchallen/shuffle");

	var s1 = shuffleFactory.create( { array: [ 1, 2, 3, 4, 5 ] } );
	
	console.log( s1.shuffle() );
	console.log( s1.shuffle() );

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/shuffle.git](https://bitbucket.org/mitchallen/shuffle.git)
* [github.com/mitchallen/shuffle.git](https://github.com/mitchallen/shuffle.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.10

* updated .npmignore

#### Version 0.1.9

* updated test cases for 100% code coverage

#### Version 0.1.8

* integrated travis-ci and codecov.io

#### Version 0.1.4

* Added namespace requirement for browser: changed window.SHUFFLE to window.MitchAllen.Shuffle

#### Version 0.1.3

* updated CDN URL

#### Version 0.1.2

* added client example

#### Version 0.1.1

* added client side distribution

#### Version 0.1.0 

* initial release

* * *
