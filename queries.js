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
   Listing.find({ code: 'CABL' }, function(err, cableListing){
    if(err) throw err;
    
    //Delete this document.
    cableListing.remove(function(err){
      if(err) throw err;
      //Log this document to the console.
      console.log(listing);
    });

   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: 'Gainesville, FL 32603' }, function(err, phelpsListing) {
    if(err) throw err;

    // Log updated listing to the console.
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
