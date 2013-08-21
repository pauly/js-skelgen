/**
 * generated by node,/home/paul/vows-skelgen/skelgen.js,lib/skelgen.js,--output,test/skelgen.js
 * https://github.com/pauly/vows-skelgen
 * Wed Aug 21 2013 10:06:32 GMT+0000 (UTC)
 */

var assert = require( 'assert' );
var vows = require( 'vows' );
var file = '../lib/skelgen.js';
var skelgen = require( file );

vows.describe( 'skelgen' ).addBatch( {
  'skelgen.sanitise': {
    'handles good input': function ( ) {
      assert.deepEqual( skelgen.sanitise( 'foo' ), 'foo' );
      assert.deepEqual( skelgen.sanitise( 66 ), '66' );
      assert.deepEqual( skelgen.sanitise( 'foo \'bar\'' ), 'foo bar' );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.sanitise( 'foo' );
          skelgen.sanitise( 66 );
          skelgen.sanitise( undefined );
          skelgen.sanitise( null );
          skelgen.sanitise( [] );
          skelgen.sanitise( {} );
          skelgen.sanitise( new Date( ) );
          skelgen.sanitise( function( ){ } );
        }
      );
    }
  },
  'skelgen.uninstantiate': {
    'handles good input': function ( ) {
      assert.deepEqual( skelgen.uninstantiate( 'foo' ), 'foo' );
      assert.deepEqual( skelgen.uninstantiate( 66 ), '66' );
      assert.deepEqual( skelgen.uninstantiate( 'new foo( )' ), 'foo' );
      assert.deepEqual( skelgen.uninstantiate( 'new foo()' ), 'foo' );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.uninstantiate( 'foo' );
          skelgen.uninstantiate( 66 );
          skelgen.uninstantiate( undefined );
          skelgen.uninstantiate( null );
          skelgen.uninstantiate( [] );
          skelgen.uninstantiate( {} );
          skelgen.uninstantiate( new Date( ) );
        }
      );
    }
  },
  'skelgen.baseName': {
    'handles good input': function ( ) {
      assert.deepEqual( skelgen.baseName( 'foo/bar.js' ), 'bar' );
      assert.deepEqual( skelgen.baseName( 'foo/bar' ), 'bar' );
      assert.deepEqual( skelgen.baseName( 'foo.js' ), 'foo' );
      assert.deepEqual( skelgen.baseName( 'foo' ), 'foo' );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.baseName( 'foo' );
          skelgen.baseName( 66 );
          skelgen.baseName( undefined );
          skelgen.baseName( null );
          skelgen.baseName( [] );
          skelgen.baseName( {} );
          skelgen.baseName( new Date( ) );
          skelgen.baseName( function( ){ } );
        }
      );
    }
  },
  'skelgen.writeTests': {
    'handles good input': function ( ) {
      // var result = skelgen.writeTests( method,obj );
      // var expect = { };
      // assert.deepEqual( result, expect );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.writeTests( 'foo','foo' );
          skelgen.writeTests( 66,66 );
          skelgen.writeTests( undefined,undefined );
          skelgen.writeTests( null,null );
          skelgen.writeTests( [],[] );
          skelgen.writeTests( {},{} );
          skelgen.writeTests( new Date( ),new Date( ) );
          skelgen.writeTests( function( ){ },function( ){ } );
        }
      );
    }
  },
  'skelgen.stringify': {
    'handles good input': function ( ) {
      assert.deepEqual( skelgen.stringify( 66 ), '66' );
      assert.deepEqual( skelgen.stringify( 'foo' ), '\'foo\'' );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.stringify( 'foo' );
          skelgen.stringify( 66 );
          skelgen.stringify( undefined );
          skelgen.stringify( null );
          skelgen.stringify( [] );
          skelgen.stringify( {} );
          skelgen.stringify( new Date( ) );
          skelgen.stringify( function( ){ } );
        }
      );
    }
  },
  'skelgen.map': {
    'handles good input': function ( ) {
      // var result = skelgen.map( args );
      // var expect = { };
      // assert.deepEqual( result, expect );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.map( 'foo' );
          skelgen.map( 66 );
          skelgen.map( undefined );
          skelgen.map( null );
          skelgen.map( [] );
          skelgen.map( {} );
          skelgen.map( new Date( ) );
          skelgen.map( function( ){ } );
        }
      );
    }
  },
  'skelgen.asyncTests': {
    'handles good input': function ( ) {
      // var result = skelgen.asyncTests( method,args );
      // var expect = { };
      // assert.deepEqual( result, expect );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.asyncTests( 'foo','foo' );
          skelgen.asyncTests( 66,66 );
          skelgen.asyncTests( undefined,undefined );
          skelgen.asyncTests( null,null );
          skelgen.asyncTests( [],[] );
          skelgen.asyncTests( {},{} );
          skelgen.asyncTests( new Date( ),new Date( ) );
          skelgen.asyncTests( function( ){ },function( ){ } );
        }
      );
    }
  },
  'skelgen.commentBefore': {
    'handles good input': function ( ) {
      // var result = skelgen.commentBefore( method );
      // var expect = { };
      // assert.deepEqual( result, expect );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.commentBefore( 'foo' );
          skelgen.commentBefore( 66 );
          skelgen.commentBefore( undefined );
          skelgen.commentBefore( null );
          skelgen.commentBefore( [] );
          skelgen.commentBefore( {} );
          skelgen.commentBefore( new Date( ) );
          skelgen.commentBefore( function( ){ } );
        }
      );
    }
  },
  'skelgen.assertsFrom': {
    'handles good input': function ( ) {
      assert.deepEqual( skelgen.assertsFrom( ' * @assert (1) == 1' ), [ [ '1', '==', '1' ] ] );
      assert.deepEqual( skelgen.assertsFrom( ' * @assert (2) === 2' ), [ [ '2', '===', '2' ] ] );
      assert.deepEqual( skelgen.assertsFrom( ' * @assert ( 3 ) == 3' ), [ [ '3', '==', '3' ] ] );
      assert.deepEqual( skelgen.assertsFrom( ' * @assert ( 4) == 4\n * @assert (5 ) == 5' ), [ [ '4', '==', '4' ], [ '5', '==', '5' ], ] );
      assert.deepEqual( skelgen.assertsFrom( ' * @assert (\'seven\') == \'seven\'' ), [ [ '\'seven\'', '==', '\'seven\'' ] ] );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.assertsFrom( 'foo' );
          skelgen.assertsFrom( 66 );
          skelgen.assertsFrom( undefined );
          skelgen.assertsFrom( null );
          skelgen.assertsFrom( [] );
          skelgen.assertsFrom( {} );
          skelgen.assertsFrom( new Date( ) );
          skelgen.assertsFrom( function( ){ } );
        }
      );
    }
  },
  'skelgen.goodInputTests': {
    'handles good input': function ( ) {
      // var result = skelgen.goodInputTests( method,params );
      // var expect = { };
      // assert.deepEqual( result, expect );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.goodInputTests( 'foo','foo' );
          skelgen.goodInputTests( 66,66 );
          skelgen.goodInputTests( undefined,undefined );
          skelgen.goodInputTests( null,null );
          skelgen.goodInputTests( [],[] );
          skelgen.goodInputTests( {},{} );
          skelgen.goodInputTests( new Date( ),new Date( ) );
          skelgen.goodInputTests( function( ){ },function( ){ } );
        }
      );
    }
  },
  'skelgen.goodInputTestsAsync': {
    'handles good input': function ( ) {
      // var result = skelgen.goodInputTestsAsync( method,params );
      // var expect = { };
      // assert.deepEqual( result, expect );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.goodInputTestsAsync( 'foo','foo' );
          skelgen.goodInputTestsAsync( 66,66 );
          skelgen.goodInputTestsAsync( undefined,undefined );
          skelgen.goodInputTestsAsync( null,null );
          skelgen.goodInputTestsAsync( [],[] );
          skelgen.goodInputTestsAsync( {},{} );
          skelgen.goodInputTestsAsync( new Date( ),new Date( ) );
          skelgen.goodInputTestsAsync( function( ){ },function( ){ } );
        }
      );
    }
  },
  'skelgen.syncTests': {
    'handles good input': function ( ) {
      // var result = skelgen.syncTests( method,args );
      // var expect = { };
      // assert.deepEqual( result, expect );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.syncTests( 'foo','foo' );
          skelgen.syncTests( 66,66 );
          skelgen.syncTests( undefined,undefined );
          skelgen.syncTests( null,null );
          skelgen.syncTests( [],[] );
          skelgen.syncTests( {},{} );
          skelgen.syncTests( new Date( ),new Date( ) );
          skelgen.syncTests( function( ){ },function( ){ } );
        }
      );
    }
  },
  'skelgen.generate': {
    'handles good input': function ( ) {
      // var result = skelgen.generate(  );
      // var expect = { };
      // assert.deepEqual( result, expect );
    },
    'handles malformed input': function ( ) {
      assert.doesNotThrow(
        function ( ) {
          skelgen.generate( 'foo' );
          skelgen.generate( 66 );
          skelgen.generate( undefined );
          skelgen.generate( null );
          skelgen.generate( [] );
          skelgen.generate( {} );
          skelgen.generate( new Date( ) );
          skelgen.generate( function( ){ } );
        }
      );
    }
  }
} ).run( { }, function _allOK ( result ) {
  assert.equal( result.honored + result.pending, result.total );
  process.exit( 0 );
} );
