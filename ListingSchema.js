/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  code: String,
  name: String,
  coordinates: {
  	latitude: Number,
  	longitude: Number
  },
  address: String
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  if(!this.code){
    var err = new Error('Code is undefined.');
    next(err);
  }
  if(!this.name){
    var err = new Error('Name is undefined.');
    next(err);
  }
  
  //Get current date.
	var currentDate = new Date();
  //Add created_at property if not already there.
  if(!this.created_at){
    this.created_at = currentDate;
  }
  //Add updated_at property.
  this.updated_at = currentDate;

  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
