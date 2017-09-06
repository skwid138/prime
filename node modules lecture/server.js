// requires
var express = require( 'express' );
var path = require( 'path' );
var varName = require( './modules/modName' ); // this can be a .js file we create

// globals
var port = 3000;
var app = express('require');

//use
app.use( express.static( 'public' ));

// spin up server
app.listen( port, function() {
    console.log('server on port: ', port);
}); // end spin up server

// base url
app.get( '/', function( req, res ) {
    res.sendFile( path.resolve( 'public/views/index.html' ));
}) // end home base

// other url