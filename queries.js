'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    jsonListings = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);

/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({ name: 'Library West' }, function(err, libWestListing){
    if(err) throw err;

    console.log(libWestListing);
   });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndRemove({ code: 'CABL' }, function(err, cableListing){
    if(err) throw err;
    
    //Log this document to the console.
    console.log(cableListing);
   });
};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   var newAddress = 'Gainesville, FL 32603';
   
   Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: newAddress }, function(err, phelpsListing) {
    if(err) throw err;

    // Log updated listing to the console.
    phelpsListing.address = newAddress;
    console.log(phelpsListing);
  });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, listings){
    if(err) throw err;

    console.log(listings);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
