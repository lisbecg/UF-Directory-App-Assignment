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
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
 var parsedData = JSON.parse(jsonListings.entries);
 console.log(parsedData[0]);
 var currentListing;

 for(var entry in jsonListings.entries){
  if(!entry.code || !entry.name){
    console.log(entry);
  }
  else{
    currentListing = new Listing({
      code: entry.code,
      name: entry.name,
      coordinates: entry.coordinates,
      address: entry.address
    });

    currentListing.save(function(err){
      if(err) throw err;
    });
  }
  /*currentListing = new Listing({
    code: entry.code,
    name: entry.name,
    coordinates: entry.coordinates,
    address: entry.address
  });

  currentListing.save(function(err){
    if(err) throw err;
  });*/

 }

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */